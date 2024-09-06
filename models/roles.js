import { model, Schema } from "mongoose"

const roleSchema = new Schema({
    name: {
        type: String,
        required: [true]
    },
    permission: {
        type: Schema.Types.ObjectId,
        ref: 'Permission',
        required: true
    }
},
    { versionKey: false })
export default model('Role', roleSchema, 'Role')