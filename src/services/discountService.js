const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createDiscount = async (discountData) => {
  try {
    const discount = await prisma.discount.create({
      data: discountData,
    });
    return discount;
  } catch (error) {
    throw new Error(`Failed to create discount: ${error.message}`);
  }
};

exports.getDiscountById = async (id) => {
  try {
    const discount = await prisma.discount.findUnique({
      where: { id: parseInt(id) },
      include: { product: true },
    });
    return discount;
  } catch (error) {
    throw new Error(`Failed to get discount: ${error.message}`);
  }
};

exports.updateDiscount = async (id, discountData) => {
  try {
    const discount = await prisma.discount.update({
      where: { id: parseInt(id) },
      data: discountData,
    });
    return discount;
  } catch (error) {
    throw new Error(`Failed to update discount: ${error.message}`);
  }
};

exports.deleteDiscount = async (id) => {
  try {
    const discount = await prisma.discount.delete({
      where: { id: parseInt(id) },
    });
    return discount;
  } catch (error) {
    throw new Error(`Failed to delete discount: ${error.message}`);
  }
};
