import { IFAQCard, InavList } from "@/utils/interfaces";

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

const partnerList: string[] = ["partner1.png"];

const FAQData: IFAQCard[] = [
  {
    title: "Comment fonctionne Lokaly ?",
    text: "Lokaly connecte les producteurs, commerçants et consommateurs via une plateforme digitale. Les producteurs inscrivent leurs produits, les commerçants peuvent gérer leurs stocks et les consommateurs peuvent acheter des produits locaux frais, réduisant ainsi le gaspillage alimentaire et soutenant l'économie locale.",
  },
];

export { navList, partnerList, FAQData };
