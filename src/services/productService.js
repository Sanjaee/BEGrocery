// services/productService.js

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createProduct = async (productData) => {
  try {
    const product = await prisma.product.create({
      data: productData,
    });
    return product;
  } catch (error) {
    throw new Error(`Failed to create product: ${error.message}`);
  }
};

exports.getAllProducts = async () => {
  try {
    const products = await prisma.product.findMany({
      include: {
        ProductImage: true,
        StokProduct: true,
        Discount: true,
      },
    });
    return products;
  } catch (error) {
    throw new Error(`Failed to get products: ${error.message}`);
  }
};

exports.getProductById = async (id) => {
  try {
    const product = await prisma.product.findUnique({
      where: { id },
      include: {
        ProductImage: true,
        StokProduct: true,
        Discount: true,
      },
    });
    return product;
  } catch (error) {
    throw new Error(`Failed to get product: ${error.message}`);
  }
};

exports.updateProduct = async (id, productData) => {
  try {
    const product = await prisma.product.update({
      where: { id },
      data: productData,
    });
    return product;
  } catch (error) {
    throw new Error(`Failed to update product: ${error.message}`);
  }
};

exports.deleteProduct = async (id) => {
  try {
    const product = await prisma.product.delete({
      where: { id },
    });
    return product;
  } catch (error) {
    throw new Error(`Failed to delete product: ${error.message}`);
  }
};
