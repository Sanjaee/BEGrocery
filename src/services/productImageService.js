const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createProductImage = async (productImageData) => {
  try {
    const newProductImage = await prisma.productImage.create({
      data: productImageData,
    });
    return newProductImage;
  } catch (error) {
    throw new Error(`Failed to create product image: ${error.message}`);
  }
};

exports.getProductImageById = async (id) => {
  try {
    const productImage = await prisma.productImage.findUnique({
      where: { id: parseInt(id) },
      include: { product: true },
    });
    return productImage;
  } catch (error) {
    throw new Error(`Failed to get product image: ${error.message}`);
  }
};

exports.updateProductImage = async (id, productImageData) => {
  try {
    const updatedProductImage = await prisma.productImage.update({
      where: { id: parseInt(id) },
      data: productImageData,
    });
    return updatedProductImage;
  } catch (error) {
    throw new Error(`Failed to update product image: ${error.message}`);
  }
};

exports.deleteProductImage = async (id) => {
  try {
    const deletedProductImage = await prisma.productImage.delete({
      where: { id: parseInt(id) },
    });
    return deletedProductImage;
  } catch (error) {
    throw new Error(`Failed to delete product image: ${error.message}`);
  }
};
