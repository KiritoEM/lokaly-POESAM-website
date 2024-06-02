import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Lokaly connecte producteurs, commerçants et consommateurs pour réduire le gaspillage alimentaire, promouvoir les produits locaux et encourager les alternatives écologiques à Madagascar" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-icon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
