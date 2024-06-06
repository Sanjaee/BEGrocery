const discountService = require("../services/discountService");

exports.createDiscount = async (req, res) => {
  try {
    const discount = await discountService.createDiscount(req.body);
    res.status(201).json(discount);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getDiscountById = async (req, res) => {
  try {
    const { id } = req.params;
    const discount = await discountService.getDiscountById(id);
    res.status(200).json(discount);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.updateDiscount = async (req, res) => {
  try {
    const { id } = req.params;
    const discount = await discountService.updateDiscount(id, req.body);
    res.status(200).json(discount);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteDiscount = async (req, res) => {
  try {
    const { id } = req.params;
    const discount = await discountService.deleteDiscount(id);
    res.status(200).json(discount);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
