import mongoose from "mongoose";

export const connectDb = async () => {
    try {
         await mongoose.connect('mongodb://localhost:27017/nextTodo', {
            useNewUrlParser: true,
        })

        console.log("Connected to MongoDB")
    } catch (error) {

        console.log(error.message)
    }
}