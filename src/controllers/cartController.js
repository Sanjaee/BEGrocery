const cartService = require("../services/cartService");

exports.createCart = async (req, res) => {
  try {
    const cart = await cartService.createCart(req.body);
    res.status(201).json(cart);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getCartById = async (req, res) => {
  try {
    const { id } = req.params;
    const cart = await cartService.getCartById(id);
    res.status(200).json(cart);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.updateCart = async (req, res) => {
  try {
    const { id } = req.params;
    const cart = await cartService.updateCart(id, req.body);
    res.status(200).json(cart);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteCart = async (req, res) => {
  try {
    const { id } = req.params;
    const cart = await cartService.deleteCart(id);
    res.status(200).json(cart);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
