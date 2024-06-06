const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createTransaction = async (transactionData) => {
  try {
    const transaction = await prisma.transaction.create({
      data: transactionData,
    });
    return transaction;
  } catch (error) {
    throw new Error(`Failed to create transaction: ${error.message}`);
  }
};

exports.getTransactionById = async (id) => {
  try {
    const transaction = await prisma.transaction.findUnique({
      where: { id: parseInt(id) },
      include: { user: true, product: true, Shipping: true, Payment: true },
    });
    return transaction;
  } catch (error) {
    throw new Error(`Failed to get transaction: ${error.message}`);
  }
};

exports.updateTransaction = async (id, transactionData) => {
  try {
    const transaction = await prisma.transaction.update({
      where: { id: parseInt(id) },
      data: transactionData,
    });
    return transaction;
  } catch (error) {
    throw new Error(`Failed to update transaction: ${error.message}`);
  }
};

exports.deleteTransaction = async (id) => {
  try {
    const transaction = await prisma.transaction.delete({
      where: { id: parseInt(id) },
    });
    return transaction;
  } catch (error) {
    throw new Error(`Failed to delete transaction: ${error.message}`);
  }
};
