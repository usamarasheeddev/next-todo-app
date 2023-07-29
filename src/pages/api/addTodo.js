import { connectDb } from "@/utils/connectDb"
import { Todo } from "../../../Models/TodoSchema"
import mongoose from "mongoose"

export default async function AddTodo(req, res) {

    try {
        await connectDb()
        const { title, description, userId } = req.body;
        if (req.body.title === '' || req.body.description === '' || req.body.user === '') {
            return res.status(400).json({ success: false, message: 'title and description are required' })
        }
        const userObjectId =new mongoose.Types.ObjectId(userId); // Convert the string to ObjectId

        const todo = await Todo.create({
            title,
            description,
            userId: userObjectId,
        })
        res.status(200).json({ success: true, message: 'todo created', todo: todo })

    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
        console.log(error)

    }


}