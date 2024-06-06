const express = require("express");
const shippingController = require("../controllers/shippingController");
const router = express.Router();

router.post("/", shippingController.createShipping);
router.get("/:id", shippingController.getShippingById);
router.put("/:id", shippingController.updateShipping);
router.delete("/:id", shippingController.deleteShipping);

module.exports = router;
