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
    const { email } = req.body;

    //envoi de l' email
    try {
      await transporter.sendMail({
        from: `Lokaly<${process.env.EMAIL_SENDER}>`,
        to: email,
        subject: `Confirmation d' adresse email`,
        html: `
        <button>
            Confirmer
        </button>
        `,
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
