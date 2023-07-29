
import bcrypt from 'bcrypt'
import User from '../../../Models/UserSchema';
import { connectDb } from '@/utils/connectDb';
export default async function handler(req, res) {
    if (req.method != 'POST') {
        return res.status(400).json({ message: "method not supported", success: false });
    }
    try {
        if (!req.body.userName || !req.body.email || !req.body.password) {

            res.status(400).json({ message: 'Credentials not provided', success: false });
        }
        await connectDb();
        const userExit = await User.findOne({ email: req.body.email })
        if (userExit) {

            return res.status(400).send({ message: 'User already exists', success: false });

        }

        const hashedpassword = await bcrypt.hash(req.body.password, 10);
        const user = await User.create({
            userName: req.body.userName,
            email: req.body.email,
            password: hashedpassword
        })
        res.status(201).json({ message: 'User Created', success: true });

    } catch (error) {
        res.status(500).json({ message: error.message, success: false });

    }

}