const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const prisma = new PrismaClient();
const { JWT_SECRET } = process.env;

exports.register = async (userData) => {
  const { email, password } = userData;

  // Check if user already exists
  const existingUser = await prisma.user.findFirst({ where: { email } });
  if (existingUser) {
    throw new Error("User already exists");
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create new user
  const user = await prisma.user.create({
    data: {
      ...userData,
      password: hashedPassword,
    },
  });

  return user;
};

exports.login = async (email, password) => {
  // Find user by email
  const user = await prisma.user.findFirst({ where: { email } });
  if (!user) {
    throw new Error("Invalid email or password");
  }

  // Check password
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error("Invalid email or password");
  }

  // Generate JWT token
  const token = jwt.sign(
    { uid: user.uid, email: user.email, roleId: user.roleId },
    JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );

  return token;
};
