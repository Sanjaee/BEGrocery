const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createUser = async (userData) => {
  const user = await prisma.user.create({
    data: userData,
  });
  return user;
};

exports.getAllUsers = async () => {
  const users = await prisma.user.findMany();
  return users;
};

exports.getUserById = async (uid) => {
  const user = await prisma.user.findUnique({
    where: { uid },
    include: { userProfile: true, Transaction: true, Cart: true },
  });
  return user;
};

exports.updateUser = async (uid, userData) => {
  const user = await prisma.user.update({
    where: { uid },
    data: userData,
  });
  return user;
};

exports.deleteUser = async (uid) => {
  const user = await prisma.user.delete({
    where: { uid },
  });
  return user;
};
