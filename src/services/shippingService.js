const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createShipping = async (shippingData) => {
  try {
    const shipping = await prisma.shipping.create({
      data: shippingData,
    });
    return shipping;
  } catch (error) {
    throw new Error(`Failed to create shipping: ${error.message}`);
  }
};

exports.getShippingById = async (id) => {
  try {
    const shipping = await prisma.shipping.findUnique({
      where: { id: parseInt(id) },
      include: { transaction: true },
    });
    return shipping;
  } catch (error) {
    throw new Error(`Failed to get shipping: ${error.message}`);
  }
};

exports.updateShipping = async (id, shippingData) => {
  try {
    const shipping = await prisma.shipping.update({
      where: { id: parseInt(id) },
      data: shippingData,
    });
    return shipping;
  } catch (error) {
    throw new Error(`Failed to update shipping: ${error.message}`);
  }
};

exports.deleteShipping = async (id) => {
  try {
    const shipping = await prisma.shipping.delete({
      where: { id: parseInt(id) },
    });
    return shipping;
  } catch (error) {
    throw new Error(`Failed to delete shipping: ${error.message}`);
  }
};
