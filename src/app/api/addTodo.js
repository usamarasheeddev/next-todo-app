import { connectDb } from "@/utils/connectDb"
import { Todo } from "../../../Models/TodoSchema"


export default async function AddTodo(req, res) {

    try {
        await connectDb()
        const { title, description } = req.body;
        if (req.body.title === '' || req.body.description === '') {
            return res.status(400).json({ success: false, message: 'title and description are required' })
        }
        const todo = await Todo.create({
            title,
            description
        })
        res.status(200).json({ success: true, message: 'todo created', todo: todo })

    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
        console.log(error)

    }


}