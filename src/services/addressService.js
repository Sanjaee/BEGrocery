const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createAddress = async (addressData) => {
  try {
    const address = await prisma.address.create({
      data: addressData,
    });
    return address;
  } catch (error) {
    throw new Error(`Failed to create address: ${error.message}`);
  }
};

exports.getAddressById = async (id) => {
  try {
    const address = await prisma.address.findUnique({
      where: { id: parseInt(id) },
    });
    return address;
  } catch (error) {
    throw new Error(`Failed to get address: ${error.message}`);
  }
};

exports.updateAddress = async (id, addressData) => {
  try {
    const address = await prisma.address.update({
      where: { id: parseInt(id) },
      data: addressData,
    });
    return address;
  } catch (error) {
    throw new Error(`Failed to update address: ${error.message}`);
  }
};

exports.deleteAddress = async (id) => {
  try {
    const address = await prisma.address.delete({
      where: { id: parseInt(id) },
    });
    return address;
  } catch (error) {
    throw new Error(`Failed to delete address: ${error.message}`);
  }
};
