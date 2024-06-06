const express = require("express");
const userProfileController = require("../controllers/userProfileController");
const router = express.Router();

router.post("/", userProfileController.createUserProfile);
router.get("/:id", userProfileController.getUserProfileById);
router.put("/:id", userProfileController.updateUserProfile);
router.delete("/:id", userProfileController.deleteUserProfile);

module.exports = router;
