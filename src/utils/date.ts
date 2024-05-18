const formatDate = (): string => {
  const actualDate = new Date();

  const month = [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre",
  ];

  const jour = actualDate.getDate();
  const mois = month[actualDate.getMonth()];
  const annee = actualDate.getFullYear();

  const dateFormatee = `${jour} ${mois} ${annee}`;
  return dateFormatee;
};
