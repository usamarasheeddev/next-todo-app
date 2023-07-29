import mongoose, { Schema, model } from "mongoose";

const UserSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }, email: {
        type: String,
        required: true
    }
})

mongoose.models={}
const User = model("User", UserSchema);

export default User;