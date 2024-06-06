const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createStore = async (storeData) => {
  try {
    const store = await prisma.store.create({
      data: storeData,
    });
    return store;
  } catch (error) {
    throw new Error(`Failed to create store: ${error.message}`);
  }
};

exports.getStoreById = async (id) => {
  try {
    const store = await prisma.store.findUnique({
      where: { id: parseInt(id) },
      include: { StokProduct: true },
    });
    return store;
  } catch (error) {
    throw new Error(`Failed to get store: ${error.message}`);
  }
};

exports.updateStore = async (id, storeData) => {
  try {
    const store = await prisma.store.update({
      where: { id: parseInt(id) },
      data: storeData,
    });
    return store;
  } catch (error) {
    throw new Error(`Failed to update store: ${error.message}`);
  }
};

exports.deleteStore = async (id) => {
  try {
    const store = await prisma.store.delete({
      where: { id: parseInt(id) },
    });
    return store;
  } catch (error) {
    throw new Error(`Failed to delete store: ${error.message}`);
  }
};
