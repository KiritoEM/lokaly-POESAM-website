import nodemailer from "nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";
import { transporter } from "@/helpers/nodemailerHelper";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "POST") {
    const { userEmail, message, phoneNumber, userName } = req.body;

    //envoi de l' email
    try {
      await transporter.sendMail({
        from: `Lokaly<${process.env.EMAIL_SENDER}>`,
        to: userEmail,
        subject: `message venant de l'utilisateur ${userName} avec l'email: ${userEmail} , numéro mobile: ${phoneNumber}`,
        text: message,
      });
      res.status(200).json({ message: "Email envoyé avec succès" });
    } catch (err) {
      res
        .status(500)
        .json({ message: "Erreur lors de l'envoi de l'email", err });
      console.error(err);
    }
  } else {
    res.status(405).json({ message: "Méthode non autorisée" });
  }
}
