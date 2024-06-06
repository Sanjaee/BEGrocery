const transactionService = require("../services/transactionService");

exports.createTransaction = async (req, res) => {
  try {
    const transaction = await transactionService.createTransaction(req.body);
    res.status(201).json(transaction);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getTransactionById = async (req, res) => {
  try {
    const { id } = req.params;
    const transaction = await transactionService.getTransactionById(id);
    res.status(200).json(transaction);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.updateTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const transaction = await transactionService.updateTransaction(
      id,
      req.body
    );
    res.status(200).json(transaction);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const transaction = await transactionService.deleteTransaction(id);
    res.status(200).json(transaction);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
