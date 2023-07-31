
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import User from '../../../Models/UserSchema';

import { connectDb } from '@/utils/connectDb';
import cookie from 'cookie'
export default async function handler(req, res) {
    if (req.method != 'POST') {
        return res.status(400).json({ message: "method not supported", success: false });
    }
    try {
        if (!req.body.email || !req.body.password) {

            res.status(400).json({ message: 'Credentials not provided', success: false });
        }
        await connectDb();
        const user = await User.findOne({ email: req.body.email })
        if (!user) {

            return res.status(400).send({ message: 'User does not exists', success: false });

        }

        const comparePassword = await bcrypt.compare(req.body.password, user.password);
        if (!comparePassword) {

            return res.status(400).send({ message: 'Login with correct credentials', success: false });

        }
        const userWithoutPassword = {
            _id: user._id,
            userName: user.userName,
            email: user.email,
            createdAt: user.createdAt,
        };


        //createing jwt token
        const token = jwt.sign({ id: user._id.toString() }, process.env.JWT_SECRET)

        res.setHeader('Set-Cookie', cookie.serialize('token', token, {
            path:'/',
            httpOnly: true,
            maxAge: 7 * 60 * 60 
            // maxAge: new Date(Date.now() + 7 * 60 * 60 * 1000)
            // expires: new Date(Date.now() + 7 * 60 * 60 * 1000),
        }))

        res.status(201).json({ message: 'User logged in', success: true, user: userWithoutPassword });

    } catch (error) {
        res.status(500).json({ message: error.message, success: false });

    }

}