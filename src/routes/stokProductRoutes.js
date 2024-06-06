const express = require("express");
const stokProductController = require("../controllers/stokProductController");
const router = express.Router();

router.post("/:storeId/:productId", stokProductController.createStokProduct);
router.get(
  "/:storeId/:productId",
  stokProductController.getStokProductByStoreIdAndProductId
);
router.put(
  "/:storeId/:productId",
  stokProductController.updateStokProductByStoreIdAndProductId
);
router.delete(
  "/:storeId/:productId",
  stokProductController.deleteStokProductByStoreIdAndProductId
);

module.exports = router;
