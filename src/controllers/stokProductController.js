const stokProductService = require("../services/stokProductService");

exports.createStokProduct = async (req, res) => {
  try {
    const stokProduct = await stokProductService.createStokProduct(req.body);
    res.status(201).json(stokProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getStokProductByStoreIdAndProductId = async (req, res) => {
  try {
    const { storeId, productId } = req.params;
    const stokProduct =
      await stokProductService.getStokProductByStoreIdAndProductId(
        storeId,
        productId
      );
    res.status(200).json(stokProduct);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.updateStokProductByStoreIdAndProductId = async (req, res) => {
  try {
    const { storeId, productId } = req.params;
    const stokProduct =
      await stokProductService.updateStokProductByStoreIdAndProductId(
        storeId,
        productId,
        req.body
      );
    res.status(200).json(stokProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteStokProductByStoreIdAndProductId = async (req, res) => {
  try {
    const { storeId, productId } = req.params;
    const stokProduct =
      await stokProductService.deleteStokProductByStoreIdAndProductId(
        storeId,
        productId
      );
    res.status(200).json(stokProduct);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
