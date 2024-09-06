import { Router } from "express";
import { createPrivilege, deletePrivilege, getPrivilege, getPrivileges, updatePrivilege } from "../controllers/privilegeController.js";


const privilegeRoute = Router()

privilegeRoute.post('/', createPrivilege)
privilegeRoute.get('/list', getPrivileges)
privilegeRoute.get('/:id', getPrivilege)
privilegeRoute.put('/:id', updatePrivilege)
privilegeRoute.delete('/:id', deletePrivilege)

export default privilegeRoute


