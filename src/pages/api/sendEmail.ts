import nodemailer from "nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "POST") {
    const { userEmail, message, phoneNumber, userName } = req.body;

    //configuration du transporter
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: `${process.env.EMAIL_SENDER}`,
        pass: `${process.env.EMAIL_PASSWORD}`,
      },
    });

    //envoi de l' email
    try {
      await transporter.sendMail({
        from: "lokaly<loickemadesemadisson@gmail.com>",
        to: userEmail,
        subject: `message venant de l'utilisateur ${userName} avec l'email: ${userEmail} , numéro mobile: ${phoneNumber}`,
        text: message,
      });
      res.status(200).json({ message: "Email envoyé avec succès" });
    } catch (err) {
      res.status(500).json({ message: "Erreur lors de l'envoi de l'email", err });
      console.error(err);
    }
  } else {
    res.status(405).json({ message: "Méthode non autorisée" });
  }
}
