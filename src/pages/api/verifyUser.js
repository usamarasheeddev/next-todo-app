import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../../../Models/UserSchema';
import { connectDb } from '@/utils/connectDb';

import verifyToken from '@/utils/Middleware/verifyToken';
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(400).json({ message: 'Method not supported', success: false });
    }
    try {

        await connectDb();

        // Use the verifyToken middleware to check the token before processing the request
        verifyToken(req, res, async () => {

            const user = await User.findById(req.user.id).select('+password');
            if (!user) {
                return res.status(400).json({ message: 'User does not exist', success: false });
            }

        
            const userWithoutPassword = {
                _id: user._id,
                userName: user.userName,
                email: user.email,
                createdAt: user.createdAt,
            };

            res.status(201).json({ message: 'User logged in', success: true, user: userWithoutPassword });
        });

    } catch (error) {
        res.status(500).json({ message: error.message, success: false });
    }
}
