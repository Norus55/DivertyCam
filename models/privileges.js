import { model, Schema } from "mongoose"

const privilegeSchema = new Schema({
  name: {
    type: String,
    required: [true]
  },
  description: {
    type: String
  }
},
  { versionKey: false })
export default model('Privilege', privilegeSchema, 'Privilege')