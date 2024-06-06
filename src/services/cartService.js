const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createCart = async (cartData) => {
  try {
    const cart = await prisma.cart.create({
      data: cartData,
    });
    return cart;
  } catch (error) {
    throw new Error(`Failed to create cart: ${error.message}`);
  }
};

exports.getCartById = async (id) => {
  try {
    const cart = await prisma.cart.findUnique({
      where: { id: parseInt(id) },
      include: { user: true, product: true },
    });
    return cart;
  } catch (error) {
    throw new Error(`Failed to get cart: ${error.message}`);
  }
};

exports.updateCart = async (id, cartData) => {
  try {
    const cart = await prisma.cart.update({
      where: { id: parseInt(id) },
      data: cartData,
    });
    return cart;
  } catch (error) {
    throw new Error(`Failed to update cart: ${error.message}`);
  }
};

exports.deleteCart = async (id) => {
  try {
    const cart = await prisma.cart.delete({
      where: { id: parseInt(id) },
    });
    return cart;
  } catch (error) {
    throw new Error(`Failed to delete cart: ${error.message}`);
  }
};
