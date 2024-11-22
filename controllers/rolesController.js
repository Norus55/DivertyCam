import Role from "../models/roles.js";

export const createRole = async (req, res) => {
    try {
        const role = new Role(req.body);
        // Asignar permisos a un rol nuevo
        if (req.body.permission) {
            role.permission = req.body.permission;
        }
        await role.save();
        res.status(201).json(role);
    } catch (error) {
        res.status(400).json({ message: "Error creating role" });
    }
};

export const getRoles = async (req, res) => {
    try {
        const roles = await Role.find()
            .populate({
                path: 'permission',
                select:'name privileges',
                populate: {
                    path: 'privileges',
                    select: 'name' // Agregamos el campo name a la selección
                }
            });
        res.json(roles);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Error fetching roles" });
    }
};

export const getRole = async (req, res) => {
    try {
        const role = await Role.findById(req.params.id)
            .populate({
                path: 'permissions',
                populate: {
                    path: 'privileges',
                    select: '_id name' // Agregamos el campo name a la selección
                }
            });
        if (!role) {
            res.status(404).json({ message: "Role not found" });
        } else {
            res.json(role);
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Error fetching role" });
    }
};

export const updateRole = async (req, res) => {
    try {
        const role = await Role.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        // Actualizar permisos de un rol existente
        if (req.body.permissions) {
            role.permissions = req.body.permissions;
        }
        res.json(role);
    } catch (error) {
        res.status(400).json({ message: "Error updating role" });
    }
};

export const deleteRole = async (req, res) => {
    try {
        await Role.findByIdAndDelete(req.params.id);
        res.status(204).json({ message: "Role deleted" });
    } catch (error) {
        res.status(400).json({ message: "Error deleting role" });
    }
};
