import User from "../models/users.js";

export const createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: "Error creating user" });
    }
};

export const getUsers = async (req, res) => {
    try {
        const users = await User.find()
            .populate({
                path: 'role',
                populate: {
                    path: 'permission',
                    populate: {
                        path: 'privileges',
                        select: '_id name'
                    }
                }
            });
        res.json(users);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Error fetching users" });
    }
};

export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
            .populate({
                path: 'role',
                populate: {
                    path: 'permission',
                    populate: {
                        path: 'privileges',
                        select: '_id name'
                    }
                }
            });
        if (!user) {
            res.status(404).json({ message: "User not found" });
        } else {
            res.json(user);
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Error fetching user" });
    }
};

export const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.json(user);
    } catch (error) {
        res.status(400).json({ message: "Error updating user" });
    }
};

export const deleteUser  = async (req, res) => {
    try {
        const user = await User.findByIdAndRemove(req.params.id);
        
        // Verifica si se encontró el usuario
        if (!user) {
            return res.status(404).json({ message: "User  not found" });
        }

        res.status(204).json({ message: "User  deleted" });
    } catch (error) {
        // Manejo de errores más específico
        console.error(error); // Log del error para depuración
        res.status(400).json({ message: "Error deleting user", error: error.message });
    }
};
