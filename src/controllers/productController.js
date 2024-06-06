const productService = require("../services/productService");

exports.createProduct = async (req, res) => {
  try {
    const product = await productService.createProduct(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await productService.getProductById(
      parseInt(req.params.id)
    );
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const product = await productService.updateProduct(
      parseInt(req.params.id),
      req.body
    );
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await productService.deleteProduct(parseInt(req.params.id));
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
