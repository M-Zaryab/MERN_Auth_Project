import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

console.log(process.env.NODEMAILER_SENDER, process.env.NODEMAILER_PASS);

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NODEMAILER_SENDER,
    pass: process.env.NODEMAILER_PASS,
  },
});
