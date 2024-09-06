import { Router } from "express";
import { createRole, deleteRole, getRole, getRoles, updateRole } from "../controllers/rolesController.js";


const roleRoute = Router()

roleRoute.post('/', createRole)
roleRoute.get('/list', getRoles)
roleRoute.get('/:id', getRole)
roleRoute.put('/:id', updateRole)
roleRoute.delete('/:id', deleteRole)

export default roleRoute


