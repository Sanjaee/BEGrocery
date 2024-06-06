const userService = require("../services/userService");

exports.createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.uid);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await userService.updateUser(req.params.uid, req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await userService.deleteUser(req.params.uid);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
