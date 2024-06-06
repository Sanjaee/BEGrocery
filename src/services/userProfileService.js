const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createUserProfile = async (userProfileData) => {
  try {
    // Check if a UserProfile with the same userUid already exists
    const existingUserProfile = await prisma.userProfile.findUnique({
      where: { userUid: userProfileData.userUid },
    });

    if (existingUserProfile) {
      throw new Error("UserProfile with this userUid already exists");
    }

    // Create new UserProfile
    const userProfile = await prisma.userProfile.create({
      data: userProfileData,
    });
    return userProfile;
  } catch (error) {
    throw new Error(`Failed to create user profile: ${error.message}`);
  }
};

exports.getUserProfileById = async (id) => {
  try {
    const userProfile = await prisma.userProfile.findUnique({
      where: { id: parseInt(id) },
      include: { user: true, address: true },
    });
    return userProfile;
  } catch (error) {
    throw new Error(`Failed to get user profile: ${error.message}`);
  }
};

exports.updateUserProfile = async (id, userProfileData) => {
  try {
    const userProfile = await prisma.userProfile.update({
      where: { id: parseInt(id) },
      data: userProfileData,
    });
    return userProfile;
  } catch (error) {
    throw new Error(`Failed to update user profile: ${error.message}`);
  }
};

exports.deleteUserProfile = async (id) => {
  try {
    const userProfile = await prisma.userProfile.delete({
      where: { id: parseInt(id) },
    });
    return userProfile;
  } catch (error) {
    throw new Error(`Failed to delete user profile: ${error.message}`);
  }
};
