import { model, Schema } from "mongoose"

const userSchema = new Schema({
    name: {
        type: String,
        required: [true]
    },
    email: {
        type: String,
        required: [true],
        unique: [true],
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0]/]
    },
    password: {
        type: String,
        required: [true],
    },
    role: {
        type: Schema.Types.ObjectId,
        ref: 'Role',
        required: true
    }
},
    { versionKey: false })
export default model('User', userSchema, 'User')