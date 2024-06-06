const storeService = require("../services/storeService");

exports.createStore = async (req, res) => {
  try {
    const store = await storeService.createStore(req.body);
    res.status(201).json(store);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getStoreById = async (req, res) => {
  try {
    const { id } = req.params;
    const store = await storeService.getStoreById(id);
    res.status(200).json(store);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.updateStore = async (req, res) => {
  try {
    const { id } = req.params;
    const store = await storeService.updateStore(id, req.body);
    res.status(200).json(store);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteStore = async (req, res) => {
  try {
    const { id } = req.params;
    const store = await storeService.deleteStore(id);
    res.status(200).json(store);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
