const paymentService = require("../services/paymentService");

exports.createPayment = async (req, res) => {
  try {
    const payment = await paymentService.createPayment(req.body);
    res.status(201).json(payment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPaymentById = async (req, res) => {
  try {
    const { id } = req.params;
    const payment = await paymentService.getPaymentById(id);
    res.status(200).json(payment);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.updatePayment = async (req, res) => {
  try {
    const { id } = req.params;
    const payment = await paymentService.updatePayment(id, req.body);
    res.status(200).json(payment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deletePayment = async (req, res) => {
  try {
    const { id } = req.params;
    const payment = await paymentService.deletePayment(id);
    res.status(200).json(payment);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
