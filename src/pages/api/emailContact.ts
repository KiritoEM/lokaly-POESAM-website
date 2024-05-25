import type { NextApiRequest, NextApiResponse } from "next";
import { transporter } from "@/helpers/nodemailerHelper";
import { formatDate } from "@/utils/date";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "POST") {
    const { userEmail, message, phoneNumber, userName } = req.body;
    const actualDate = new Date();

    // Define the HTML content
    const userHtmlContent = `
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
                <h1 style="font-size: 24px; line-height: 1.8em; color: #02260B; margin: 0;">Accusé de réception</h1>
            </div>
    
            <img src="https://raw.githubusercontent.com/KiritoEM/Proxima/main/lokaly.png" alt="Lôkaly Logo" style="object-fit: cover;width: 170px; height: auto; margin: 0 auto; display: block;margin-bottom:38px">
    
            <p id="main" style="position: relative; margin: 0; padding: 0;">
                <span id="topLine" style="display: block; width: 50%; margin: auto; border: 1px solid #00944E; margin-bottom: 38px;"></span>
                Salama e 👋, L'équipe Lokaly a bien reçu votre message et on prendra compte de votre message.
                <br>
                Cependant, restez connecté, suivez nous sur 
                <a href="https://www.facebook.com/profile.php?id=61559917253920" target="_blank" style="color: #00944E; text-decoration: none;" rel="noopener noreferrer">Facebook</a> et 
                <a href="http://" target="_blank" style="color: #00944E; text-decoration: none;" rel="noopener noreferrer">Whatsapp</a>
                <span id="bottomLine" style="display: block; width: 50%; margin: auto; border: 1px solid #00944E; margin-top: 38px;margin-bottom:38px"></span>
            </p>
    
            <p style="color: #02260B; font-weight: 565;">
                Envoyé le ${formatDate(actualDate)}<br>
                Par ${userName} <br>
                Numéro téléphone: ${phoneNumber} <br>
                Message: <span style="font-size: 12px; font-weight: 500;line-height: 1.8em; color: #75757A;">${message}</span>
            </p>
        </div>
    </body>
    </html>
    
    `;
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
                <h1 style="font-size: 24px; line-height: 1.8em; color: #02260B; margin: 0;">Nouveau message</h1>
            </div>
    
            <img src="https://raw.githubusercontent.com/KiritoEM/Proxima/main/lokaly.png" alt="Lôkaly Logo" style="object-fit: cover;width: 170px; height: auto; margin: 0 auto; display: block;margin-bottom:38px">
    
            <div id="main" style="position: relative; margin: 0; padding: 0;">
                <span id="topLine" style="display: block; width: 50%; margin: auto; border: 1px solid #00944E; margin-bottom: 38px;"></span>
            </div>
    
            <p style="color: #02260B; font-weight: 565;">
                Envoyé le ${formatDate(actualDate)}<br>
                Par ${userName} <br>
                Numéro téléphone: ${phoneNumber} <br>
                Email: ${userEmail} <br>
                Message: <span style="font-size: 12px; font-weight: 500;line-height: 1.8em; color: #75757A;">${message}</span>
            </p>
        </div>
    </body>
    </html>
    
    `;

    //envoi de l' email
    try {
      await transporter.sendMail({
        from: `Lokaly<${process.env.NEXT_PUBLIC_EMAIL_SENDER}>`,
        to: userEmail,
        subject: `Confirmation`,
        text: message,
        html: userHtmlContent, // Include the HTML content here
      });

      await transporter.sendMail({
        from: `Lokaly-dev<${process.env.NEXT_PUBLIC_EMAIL_SENDER}>`,
        to: "contact.lokaly@gmail.com",
        subject: `Nouveau message`,
        text: message,
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
