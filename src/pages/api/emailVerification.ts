import type { NextApiRequest, NextApiResponse } from "next";
import { transporter } from "@/helpers/nodemailerHelper";
import { formatDate } from "@/utils/date";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "POST") {
    const { userEmail } = req.body;
    const actualDate = new Date();

    const comHtmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Lôkaly</title>
        <style>
            @import url('https://fonts.cdnfonts.com/css/general-sans');
        </style>
    </head>
    
    <body style="font-family: 'General Sans', sans-serif; color: #75757A; margin: 0; padding: 0; width: 100%; background-color: #ffffff;">
        <div style="max-width: 600px; margin: auto; padding: 40px;">
            <div style="text-align: center;margin-bottom:38px">
                <p style="font-size: 12px; line-height: 1.8em; color: #75757A;">Notification</p>
                <h1 style="font-size: 24px; line-height: 1.8em; color: #02260B; margin: 0;">Nouveau email ajouté depuis le NewLetter</h1>
            </div>
    
            <img src="https://raw.githubusercontent.com/KiritoEM/Proxima/main/lokaly.png" alt="Lôkaly Logo" style="object-fit: cover;width: 170px; height: auto; margin: 0 auto; display: block;margin-bottom:38px">
    
            <div id="main" style="position: relative; margin: 0; padding: 0;">
                <span id="topLine" style="display: block; width: 50%; margin: auto; border: 1px solid #00944E; margin-bottom: 38px;"></span>
            </div>
    
            <p style="color: #02260B; font-weight: 565;">
                Envoyé le ${formatDate(actualDate)}<br>
                Email envoyé: ${userEmail} <br>
            </p>
        </div>
    </body>
    </html>
    
    `;

    //envoi de l' email
    try {
      await transporter.sendMail({
        from: `Lokaly-dev<${process.env.NEXT_PUBLIC_EMAIL_SENDER}>`,
        to: "contact.lokaly@gmail.com",
        subject: `Nouveau email venant du newsLetter`,
        html: comHtmlContent, // Include the HTML content here
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

// import type { NextApiRequest, NextApiResponse } from "next";
// import emailCheck from "email-check";
// import { transporter } from "@/helpers/nodemailerHelper";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<any>
// ) {
//   if (req.method !== "POST") {
//     res.status(405).json({ message: "Méthode non autorisée" });
//     return;
//   }

//   const { email } = req.body;

//   if (!email) {
//     res.status(400).json({ message: "Email non fourni" });
//     return;
//   }

//   try {
//     console.log(`Vérification de l'email: ${email}`);
//     const emailExists = await emailCheck(email, { timeout: 40000 });
//     console.log(`Résultat de la vérification de l'email: ${emailExists}`);

//     try {
//       console.log(`Envoi de l'email à: ${email}`);
//       await transporter.sendMail({
//         from: `Lokaly <${process.env.EMAIL_SENDER}>`,
//         to: email,
//         subject: `Email reçu`,
//         text: "Nous vous informons que nous avons reçu votre email",
//       });
//       console.log(`Email envoyé avec succès à: ${email}`);
//     } catch (mailError) {
//       console.error(`Erreur lors de l'envoi de l'email à ${email}:`, mailError);
//       res.status(500).json({ message: "Erreur lors de l'envoi de l'email" });
//       return;
//     }

//     if (emailExists) {
//       res.status(200).json({ message: "Email validé avec succès" });
//     } else {
//       res.status(400).json({ message: "Email non valide" });
//     }
//   } catch (err) {
//     if (err instanceof Error) {
//       if (err.message === "refuse") {
//         console.error(
//           `Erreur: Le serveur MX refuse les demandes de votre adresse IP`
//         );
//         res.status(429).json({
//           message: "Le serveur MX refuse les demandes de votre adresse IP",
//         });
//       } else {
//         console.error(`Erreur lors de la validation de l'email ${email}:`, err);
//         res
//           .status(500)
//           .json({ message: "Erreur lors de la validation de l'email" });
//       }
//     } else {
//       console.error("Erreur inconnue:", err);
//       res.status(500).json({ message: "Erreur inconnue" });
//     }
//   }
// }
