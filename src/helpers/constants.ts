import { IFAQCard, InavList, Ipartners } from "@/utils/interfaces";

const navList: InavList[] = [
  {
    label: "Accueil",
    scrollSectionId: "hero",
  },
  {
    label: "A propos",
    scrollSectionId: "features",
  },
  {
    label: "Nos partenaires",
    scrollSectionId: "partners",
  },
  {
    label: "FAQ",
    scrollSectionId: "FAQ",
  },
];

const partnerList: Ipartners[] = [
  { img: "partner1.png", link: "https://www.facebook.com/recyclanay" },
  {
    img: "partner2.png",
    link: "https://www.facebook.com/profile.php?id=100071985974415",
  },
  {
    img: "partner3.png",
    link: "https://www.facebook.com/NectartServiceTraiteur",
    colspan: 3,
  },
];

const FAQData: IFAQCard[] = [
  {
    title: "Comment fonctionne Lokaly ?",
    text: "Lokaly connecte les producteurs, commerçants et consommateurs via une plateforme digitale. Les producteurs inscrivent leurs produits, les commerçants peuvent gérer leurs stocks et les consommateurs peuvent acheter des produits locaux frais, réduisant ainsi le gaspillage alimentaire et soutenant l'économie locale.",
  },
  {
    title: "Comment puis-je m'inscrire en tant que producteur ou commerçant ?",
    text: "Pour rejoindre Lokaly en tant que vendeur, vous devez nous contacter pour obtenir un compte vendeur. Envoyez-nous un message via notre formulaire de contact ou par email, et nous vous guiderons dans le processus de création de votre compte.",
  },
  {
    title: "Quels types de produits puis-je trouver sur Lokaly ?",
    text: "Sur Lokaly, vous pouvez trouver une variété de produits locaux, notamment des produits agricoles frais tels que des fruits et légumes, des produits issus des food businesses pour le programme NoWaste, et des alternatives durables comme les charbons éco et le biogaz.",
  },
  {
    title:
      "Comment Lokaly contribue-t-elle à la réduction du gaspillage alimentaire ?",
    text: "Lokaly aide à réduire le gaspillage alimentaire en permettant aux producteurs et commerçants de vendre leurs produits invendus ou en surplus à des consommateurs à la recherche de produits frais et locaux. Cela valorise les excédents et évite que des produits parfaitement bons ne soient jetés, contribuant ainsi à une économie circulaire et durable.",
  },
];

export { navList, partnerList, FAQData };
