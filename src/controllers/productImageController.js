const productImageService = require("../services/productImageService");

// Controller Functions
exports.createProductImage = async (req, res) => {
  try {
    const productImage = await productImageService.createProductImage(req.body);
    res.json(productImage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getProductImageById = async (req, res) => {
  try {
    const productImage = await productImageService.getProductImageById(
      req.params.id
    );
    res.json(productImage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateProductImage = async (req, res) => {
  try {
    const productImage = await productImageService.updateProductImage(
      req.params.id,
      req.body
    );
    res.json(productImage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteProductImage = async (req, res) => {
  try {
    const deletedProductImage = await productImageService.deleteProductImage(
      req.params.id
    );
    res.json(deletedProductImage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
