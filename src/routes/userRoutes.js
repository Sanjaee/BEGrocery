const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router.post("/", userController.createUser);
router.get("/", userController.getAllUsers);
router.get("/:uid", userController.getUserById);
router.put("/:uid", userController.updateUser);
router.delete("/:uid", userController.deleteUser);

module.exports = router;
