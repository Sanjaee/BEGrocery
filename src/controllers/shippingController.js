const shippingService = require("../services/shippingService");

exports.createShipping = async (req, res) => {
  try {
    const shipping = await shippingService.createShipping(req.body);
    res.status(201).json(shipping);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getShippingById = async (req, res) => {
  try {
    const { id } = req.params;
    const shipping = await shippingService.getShippingById(id);
    res.status(200).json(shipping);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.updateShipping = async (req, res) => {
  try {
    const { id } = req.params;
    const shipping = await shippingService.updateShipping(id, req.body);
    res.status(200).json(shipping);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteShipping = async (req, res) => {
  try {
    const { id } = req.params;
    const shipping = await shippingService.deleteShipping(id);
    res.status(200).json(shipping);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
