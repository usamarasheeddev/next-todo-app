import {  Schema } from "mongoose";
import mongoose from "mongoose";
const TodoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    userId:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

mongoose.models={}

export const Todo = mongoose.model("todo", TodoSchema);
