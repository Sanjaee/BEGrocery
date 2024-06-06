const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createPayment = async (paymentData) => {
  try {
    const payment = await prisma.payment.create({
      data: paymentData,
    });
    return payment;
  } catch (error) {
    throw new Error(`Failed to create payment: ${error.message}`);
  }
};

exports.getPaymentById = async (id) => {
  try {
    const payment = await prisma.payment.findUnique({
      where: { id: parseInt(id) },
      include: { transaction: true },
    });
    return payment;
  } catch (error) {
    throw new Error(`Failed to get payment: ${error.message}`);
  }
};

exports.updatePayment = async (id, paymentData) => {
  try {
    const payment = await prisma.payment.update({
      where: { id: parseInt(id) },
      data: paymentData,
    });
    return payment;
  } catch (error) {
    throw new Error(`Failed to update payment: ${error.message}`);
  }
};

exports.deletePayment = async (id) => {
  try {
    const payment = await prisma.payment.delete({
      where: { id: parseInt(id) },
    });
    return payment;
  } catch (error) {
    throw new Error(`Failed to delete payment: ${error.message}`);
  }
};
