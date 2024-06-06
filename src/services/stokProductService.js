const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createStokProduct = async (stokProductData) => {
  try {
    const stokProduct = await prisma.stokProduct.create({
      data: stokProductData,
    });
    return stokProduct;
  } catch (error) {
    throw new Error(`Failed to create stok product: ${error.message}`);
  }
};

exports.getStokProductByStoreIdAndProductId = async (storeId, productId) => {
  try {
    const stokProduct = await prisma.stokProduct.findFirst({
      where: {
        storeId: parseInt(storeId),
        productId: parseInt(productId),
      },
    });
    return stokProduct;
  } catch (error) {
    throw new Error(`Failed to get stok product: ${error.message}`);
  }
};

exports.updateStokProductByStoreIdAndProductId = async (
  storeId,
  productId,
  stokProductData
) => {
  try {
    const stokProduct = await prisma.stokProduct.update({
      where: {
        storeId: parseInt(storeId),
        productId: parseInt(productId),
      },
      data: stokProductData,
    });
    return stokProduct;
  } catch (error) {
    throw new Error(`Failed to update stok product: ${error.message}`);
  }
};

exports.deleteStokProductByStoreIdAndProductId = async (storeId, productId) => {
  try {
    const stokProduct = await prisma.stokProduct.delete({
      where: {
        storeId: parseInt(storeId),
        productId: parseInt(productId),
      },
    });
    return stokProduct;
  } catch (error) {
    throw new Error(`Failed to delete stok product: ${error.message}`);
  }
};
