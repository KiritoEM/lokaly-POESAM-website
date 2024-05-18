import nodemailer from "nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";
import { transporter } from "@/helpers/nodemailerHelper";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "POST") {
    const { userEmail, message, phoneNumber, userName } = req.body;
    const date = Date.now();

    // Define the HTML content
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Lôkaly</title>
    
        <style>
            @import url('https://fonts.cdnfonts.com/css/general-sans');
    
            :root {
                --green: #00944E;
                --darkGreen: #02260B;
                --grey: #75757A;
                --black: #1D1D1F;
            }
    
            * {
                font-family: 'General Sans', sans-serif;
                color: var(--grey);
                margin: 0;
                text-decoration: none;
                font-size: 14px;
                line-height: 1.8em;
            }
    
            body {
                display: flex;
                flex-direction: column;
                align-items: flex-starts;
                max-width: 1200px;
                margin: auto;
                padding: 40px;
                gap: 32px;
            }
    
            p {
                width: 100%;
            }
    
            .small {
                font-size: small;
            }
    
            .large {
                font-size: large;
            }
    
            .bold {
                font-weight: 565;
            }
    
            .text-center {
                text-align: center;
            }
    
            .darkGreen {
                color: var(--darkGreen)
            }
    
            .green {
                color: var(--green)
            }
    
            .black {
                color: var(--black)
            }
    
            #logo {
                width: 170px;
                height: auto;
            }
    
            #main {
                position: relative;
            }
    
            #main span {
                display: block;
                width: 50%;
                margin: auto;
                border: 1px solid var(--green);
            }
    
            #main #topLine {
                margin-bottom: 38px;
            }
    
            #main #bottomLine {
                margin-top: 38px;
            }
    
            #end {
                display: flex;
                flex-direction: column;
                gap: 16px;
            }
        </style>
    </head>
    
    <body>
        <div>
            <p class="text-center small">Notification</p>
            <h1 class="text-center darkGreen large">Accusé de réception</h1>
        </div>
    
        <svg id="logo" width="172" height="60" viewBox="0 0 172 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M36.7863 4.5014C36.1373 4.15529 35.3596 4.1509 34.7068 4.48966L26.0719 8.97045C25.0435 9.50411 23.7772 9.10304 23.2436 8.07465C22.7099 7.04625 23.111 5.77996 24.1394 5.24631L32.7742 0.765518C34.6536 -0.209694 36.8926 -0.197058 38.7607 0.799309L47.0802 5.23638C48.1026 5.78161 48.4893 7.05234 47.9441 8.07465C47.3988 9.09695 46.1281 9.4837 45.1058 8.93847L36.7863 4.5014Z"
                fill="#F77F00" />
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M35.6277 41.2342C43.8874 41.2342 50.5833 34.5383 50.5833 26.2786C50.5833 18.0188 43.8874 11.3229 35.6277 11.3229C27.3679 11.3229 20.672 18.0188 20.672 26.2786C20.672 34.5383 27.3679 41.2342 35.6277 41.2342ZM35.6277 32.0307C38.8045 32.0307 41.3798 29.4554 41.3798 26.2786C41.3798 23.1017 38.8045 20.5264 35.6277 20.5264C32.4508 20.5264 29.8755 23.1017 29.8755 26.2786C29.8755 29.4554 32.4508 32.0307 35.6277 32.0307Z"
                fill="#00944E" />
            <path
                d="M0.630013 16.673C0.570415 13.7999 2.92617 11.4792 5.79989 11.4792C8.70554 11.4792 11.0449 13.841 11.1454 16.7449C11.7669 34.7136 16.1286 47.0696 34.0619 48.9531C36.8411 49.245 39.1257 51.4692 39.1257 54.2637C39.1257 57.0582 36.857 59.348 34.0684 59.1669C11.2145 57.6833 1.2285 45.5253 0.630013 16.673Z"
                fill="#00944E" />
            <path
                d="M97.7659 49.7011C99.7408 48.7614 102.196 49.1562 103.447 50.9504C104.697 52.7447 104.265 55.2414 102.329 56.2592C98.5003 58.2722 94.5322 59.3237 90.7394 59.3237C88.3752 59.3237 86.1095 58.9296 84.0408 58.1416C81.1841 56.9595 78.7214 55.1863 76.7512 53.6102C72.5154 50.1624 68.6736 46.3206 65.3243 42.0848L64.3392 43.2669C64.3392 46.9804 64.3392 50.6939 64.3392 54.4472C64.3392 56.6426 62.5449 58.4147 60.3496 58.3872C58.1928 58.3603 56.4586 56.6039 56.4586 54.4469C56.4586 41.2659 56.4586 28.3834 56.4586 15.3403C56.4586 13.1833 58.1928 11.4271 60.3496 11.4001C62.5449 11.3727 64.3392 13.1448 64.3392 15.3402C64.3392 19.8708 64.3392 24.3322 64.3392 28.8326C64.3392 29.2945 64.9259 29.4923 65.2055 29.1246L77.5358 12.9094C78.2828 11.9271 79.446 11.3503 80.6801 11.3503C83.9518 11.3503 85.8053 15.0996 83.8187 17.6991L70.1512 35.5832L70.9392 36.5683C74.19 40.6071 77.8348 44.2519 81.7751 47.5027C83.3512 48.7833 85.0259 50.0639 86.8975 50.7535C90.0142 51.9697 93.8936 51.5435 97.7659 49.7011Z"
                fill="#00944E" />
            <path
                d="M104.522 41.1049C102.945 41.1049 101.553 40.0748 101.092 38.5668L101.027 38.3538C100.907 37.9615 100.545 37.6935 100.135 37.6935H94.2142C93.8092 37.6935 93.454 37.9636 93.3456 38.3538L93.3039 38.5039C92.8769 40.041 91.4773 41.1049 89.8819 41.1049C87.5274 41.1049 85.8246 38.8554 86.4637 36.5892L92.985 13.4684C93.3129 12.3059 94.3214 11.4645 95.5238 11.3503H98.7878C100.072 11.4644 101.151 12.3597 101.501 13.6002L107.973 36.5454C108.618 38.8335 106.899 41.1049 104.522 41.1049ZM97.2246 24.7114L95.5189 30.5865H98.8355L97.2246 24.7114Z"
                fill="#00944E" />
            <path
                d="M123.51 49.1538C123.51 50.3525 124.482 51.3243 125.68 51.3243H146.008C148.217 51.3243 150.008 53.115 150.008 55.324C150.008 57.5329 148.217 59.3237 146.008 59.3237H120.816C117.886 59.3237 115.51 56.9482 115.51 54.0179V15.5272C115.51 13.3182 117.301 11.5275 119.51 11.5275C121.719 11.5275 123.51 13.3182 123.51 15.5272V49.1538Z"
                fill="#00944E" />
            <path
                d="M163.972 13.4194C164.677 12.1876 165.988 11.4275 167.407 11.4275C170.486 11.4275 172.386 14.7895 170.797 17.4272L160.173 35.0623C159.675 35.8888 159.412 36.8354 159.412 37.8002V55.124C159.412 57.333 157.622 59.1237 155.413 59.1237C153.204 59.1237 151.413 57.333 151.413 55.124V37.8254C151.413 36.8447 151.141 35.8832 150.628 35.0476L139.751 17.346C138.16 14.7576 140.023 11.4275 143.061 11.4275C144.454 11.4275 145.74 12.1736 146.432 13.3828L154.375 27.263C154.746 27.9104 155.68 27.9104 156.05 27.263L163.972 13.4194Z"
                fill="#00944E" />
        </svg>
    
    
        <p id="main">
            <span id="topLine"></span>
            Salama e 👋, L'équipe Lokaly a bien reçu votre message et on prendra compte de votre message. On vous renvoie
            ci-après une copie de votre message.
            <br>
            Cependant, Restez connecté, suivez nous sur <a href="http://" target="_blank" class="green"
                rel="noopener noreferrer">Facebook</a> et <a href="http://" target="_blank" class="green"
                rel="noopener noreferrer">Whatsapp</a>
            <span id="bottomLine"></span>
        </p>
    
        <p class="darkGreen bold">
            Envoyé le 05 Mars 2022 <br>
            Par Emadisson <br>
            Numero telephone: 0648756425 <br>
            Message:
        </p>
    
        <div id="end">
            <p>
                Bonjour monsieur, je vous informe de l’arrivé d’un nouveau message par nomdelapersonne envoyé par email en
                provenance de votre site internet <a href="http://clementsainthilaire.fr"
                    class="black bold">clementsainthilaire.fr</a>
                <br>
                Ce dernier semble vouloir vous contacter pour discuter avec vous du sujet suivant: <span
                    class="black bold">intitulé du sujet</span>.
            </p>
    
            <p>
                Je vous invite à lui répondre incessamment sous peu, toujours à l’adresse <a href="mailto:adress@mail.com"
                    class="black bold">adress@mail.com</a>.
            </p>
    
            <p>
                En vous souhaitant une bonne journée.
            </p>
        </div>
    </body>
    
    </html>
    `;

    //envoi de l' email
    try {
      await transporter.sendMail({
        from: `Lokaly<${process.env.EMAIL_SENDER}>`,
        to: userEmail,
        subject: `Message venant de l'utilisateur ${userName} avec l'email: ${userEmail}, numéro mobile: ${phoneNumber}`,
        text: message,
        html: htmlContent, // Include the HTML content here
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
