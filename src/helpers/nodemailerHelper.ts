import nodemailer from "nodemailer";

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: `${process.env.EMAIL_SENDER}`,
    pass: `${process.env.EMAIL_PASSWORD}`,
  },
});

export { transporter };
