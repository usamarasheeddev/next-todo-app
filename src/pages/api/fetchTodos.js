import { Todo } from '../../../Models/TodoSchema'
import { connectDb } from '@/utils/connectDb'
import verifyToken from '@/utils/Middleware/verifyToken'
import User from '../../../Models/UserSchema'
export default async function fetchTodos(req, res) {

    if (req.method !== 'POST') {
        return res.status(401).json({ message: 'this method is not allowed' })
    }

    try {
        await connectDb()
        verifyToken(req, res, async () => {

            const user = await User.findById(req.user.id).select('+password');
            if (!user) {
                return res.status(400).json({ message: 'User does not exist', success: false });
            }


            // if (!req.body.userId) {
            //     return res.status(401).json({ message: 'Unauthorized' })
            // }
            const todo = await Todo.find({ userId: req.user.id })
            res.status(200).send(todo)
        });
    } catch (error) {
        res.status(500).send({ message: error })
    }


}