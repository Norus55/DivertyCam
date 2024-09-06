import { model, Schema } from "mongoose"

const permissionSchema = new Schema({
  name: {
    type: String,
    required: [true]
  },
  description: {
    type: String
  },
  privileges: [{
    type: Schema.Types.ObjectId,
    ref: 'Privilege',
    required: true
  }]
},
  { versionKey: false })
export default model('Permission', permissionSchema, 'Permission')