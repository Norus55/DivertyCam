import Permission from "../models/permissions.js";

export const createPermission = async (req, res) => {
    try {
      const permission = new Permission(req.body);
      // Asignar privilegios a un permiso nuevo
      if (req.body.privileges) {
        permission.privileges = req.body.privileges;
      }
      await permission.save();
      res.status(201).json(permission);
    } catch (error) {
      res.status(400).json({ message: "Error creating permission" });
    }
  };
  
  export const getPermissions = async (req, res) => {
    try {
      const permissions = await Permission.find().populate("privileges", "name");
      res.json(permissions);
    } catch (error) {
      res.status(400).json({ message: "Error fetching permissions" });
    }
  };
  
  export const getPermission = async (req, res) => {
    try {
      const permission = await Permission.findById(req.params.id).populate("privileges", "name");
      if (!permission) {
        res.status(404).json({ message: "Permission not found" });
      } else {
        res.json(permission);
      }
    } catch (error) {
      res.status(400).json({ message: "Error fetching permission" });
    }
  };

  export const updatePermission = async (req, res) => {
    try {
      const permission = await Permission.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      // Actualizar privilegios de un permiso existente
      if (req.body.privileges) {
        permission.privileges = req.body.privileges;
      }
      res.json(permission);
    } catch (error) {
      res.status(400).json({ message: "Error updating permission" });
    }
  };
  
  export const deletePermission = async (req, res) => {
    try {
      await Permission.findByIdAndDelete(req.params.id);
      res.status(204).json({ message: "Permission deleted" });
    } catch (error) {
      res.status(400).json({ message: "Error deleting permission" });
    }
  };
