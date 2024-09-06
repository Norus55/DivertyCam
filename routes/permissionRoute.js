import { Router } from "express";
import { createPermission, deletePermission, getPermission, getPermissions, updatePermission } from "../controllers/permissionController.js";


const permissionRoute = Router()

permissionRoute.post('/', createPermission)
permissionRoute.get('/list', getPermissions)
permissionRoute.get('/:id', getPermission)
permissionRoute.put('/:id', updatePermission)
permissionRoute.delete('/:id', deletePermission)

export default permissionRoute
