const userProfileService = require("../services/userProfileService");

exports.createUserProfile = async (req, res) => {
  try {
    const userProfile = await userProfileService.createUserProfile(req.body);
    res.status(201).json(userProfile);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getUserProfileById = async (req, res) => {
  try {
    const { id } = req.params;
    const userProfile = await userProfileService.getUserProfileById(id);
    res.status(200).json(userProfile);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.updateUserProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const userProfile = await userProfileService.updateUserProfile(
      id,
      req.body
    );
    res.status(200).json(userProfile);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteUserProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const userProfile = await userProfileService.deleteUserProfile(id);
    res.status(200).json(userProfile);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
