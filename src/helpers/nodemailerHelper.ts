import nodemailer from "nodemailer";

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: `${process.env.NEXT_PUBLIC_EMAIL_SENDER}`,
    pass: `${process.env.NEXT_PUBLIC_EMAIL_PASSWORD}`,
  },
});

export { transporter };
