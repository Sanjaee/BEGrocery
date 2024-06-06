const addressService = require("../services/addressService");

exports.createAddress = async (req, res) => {
  try {
    const address = await addressService.createAddress(req.body);
    res.status(201).json(address);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAddressById = async (req, res) => {
  try {
    const { id } = req.params;
    const address = await addressService.getAddressById(id);
    res.status(200).json(address);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.updateAddress = async (req, res) => {
  try {
    const { id } = req.params;
    const address = await addressService.updateAddress(id, req.body);
    res.status(200).json(address);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteAddress = async (req, res) => {
  try {
    const { id } = req.params;
    const address = await addressService.deleteAddress(id);
    res.status(200).json(address);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
