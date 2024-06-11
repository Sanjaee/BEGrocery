const express = require("express");
const router = express.Router();
const productImageController = require("../controllers/productImageController");

// Routes
router.post("/", productImageController.createProductImage);
router.get("/:id", productImageController.getProductImageById);
router.put("/:id", productImageController.updateProductImage);
router.delete("/:id", productImageController.deleteProductImage);

module.exports = router;
