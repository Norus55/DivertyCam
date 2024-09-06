import { Router } from "express";
import { createUser,getUser,getUsers,updateUser,deleteUser } from "../controllers/usersController.js";



const userRoute = Router()

userRoute.post('/', createUser)
userRoute.get('/list', getUsers)
userRoute.get('/:id', getUser)
userRoute.put('/:id', updateUser)
userRoute.delete('/:id', deleteUser)

export default userRoute