import  Privilege  from "../models/privileges.js";

export const createPrivilege = async (req, res) => {
  try {
    const privilege = new Privilege(req.body);
    await privilege.save();
    res.status(201).json(privilege);
  } catch (error) {
    res.status(400).json({ message: "Error creating privilege" });
  }
};

export const getPrivileges = async (req, res) => {
  try {
    const privileges = await Privilege.find();
    res.json(privileges);
  } catch (error) {
    res.status(400).json({ message: "Error fetching privileges" });
  }
};

export const getPrivilege = async (req, res) => {
  try {
    const privilege = await Privilege.findById(req.params.id);
    if (!privilege) {
      res.status(404).json({ message: "Privilege not found" });
    } else {
      res.json(privilege);
    }
  } catch (error) {
    res.status(400).json({ message: "Error fetching privilege" });
  }
};

export const updatePrivilege = async (req, res) => {
  try {
    const privilege = await Privilege.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(privilege);
  } catch (error) {
    res.status(400).json({ message: "Error updating privilege" });
  }
};

export const deletePrivilege = async (req, res) => {
  try {
    await Privilege.findByIdAndRemove(req.params.id);
    res.status(204).json({ message: "Privilege deleted" });
  } catch (error) {
    res.status(400).json({ message: "Error deleting privilege" });
  }
};