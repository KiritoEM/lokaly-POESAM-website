import type { NextApiRequest, NextApiResponse } from "next";
import emailCheck from "email-check";
import { transporter } from "@/helpers/nodemailerHelper";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Méthode non autorisée" });
    return;
  }

  const { email } = req.body;

  if (!email) {
    res.status(400).json({ message: "Email non fourni" });
    return;
  }

  try {
    console.log(`Vérification de l'email: ${email}`);
    const emailExists = await emailCheck(email, { timeout: 40000 });
    console.log(`Résultat de la vérification de l'email: ${emailExists}`);

    try {
      console.log(`Envoi de l'email à: ${email}`);
      await transporter.sendMail({
        from: `Lokaly <${process.env.EMAIL_SENDER}>`,
        to: email,
        subject: `Email reçu`,
        text: "Nous vous informons que nous avons reçu votre email",
      });
      console.log(`Email envoyé avec succès à: ${email}`);
    } catch (mailError) {
      console.error(`Erreur lors de l'envoi de l'email à ${email}:`, mailError);
      res.status(500).json({ message: "Erreur lors de l'envoi de l'email" });
      return;
    }

    if (emailExists) {
      res.status(200).json({ message: "Email validé avec succès" });
    } else {
      res.status(400).json({ message: "Email non valide" });
    }
  } catch (err) {
    if (err instanceof Error) {
      if (err.message === "refuse") {
        console.error(
          `Erreur: Le serveur MX refuse les demandes de votre adresse IP`
        );
        res.status(429).json({
          message: "Le serveur MX refuse les demandes de votre adresse IP",
        });
      } else {
        console.error(`Erreur lors de la validation de l'email ${email}:`, err);
        res
          .status(500)
          .json({ message: "Erreur lors de la validation de l'email" });
      }
    } else {
      console.error("Erreur inconnue:", err);
      res.status(500).json({ message: "Erreur inconnue" });
    }
  }
}
