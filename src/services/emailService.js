const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: "bulk.smtp.mailtrap.io",
  port: 587,
  auth: {
    user: process.env.MAILTRAP_USERNAME,
    pass: process.env.MAILTRAP_PASSWORD,
  },
});

exports.sendVerificationEmail = async (email, verificationToken) => {
  const mailOptions = {
    from: "mailtrap@demomailtrap.com",
    to: email,
    subject: "Complete Your Registration",
    text: `Hello,

    Thank you for signing up! To complete your registration, please click the link below to verify your email address:
    
    http://yourdomain.com/verify-email?token=${verificationToken}
    
    If you did not register with us, please ignore this email.
    
    Thank you!`,
  };

  await transporter.sendMail(mailOptions);
  return verificationToken;
};
