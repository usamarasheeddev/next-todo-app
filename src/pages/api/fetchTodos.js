import {Todo} from '../../../Models/TodoSchema'
import { connectDb } from '@/utils/connectDb'

export default async function handler(req, res) {

    if (req.method !== 'POST') {
        return res.status(401).json({ message: 'this method is not allowed' })
    }
    if (!req.body.userId) {
        return res.status(401).json({ message: 'Unauthorized' })
    }
    try {
        await connectDb()
        const todo = await Todo.find({userId:req.body.userId})
        res.status(200).send(todo)
    } catch (error) {
        res.status(500).send({ message: error })
    }


}