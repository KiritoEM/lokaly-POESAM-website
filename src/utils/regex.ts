const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isValidPhoneNumber = (phoneNumber: any) => {
  const phoneRegex =
    /^0(32|33|34|34|35|36|37|38|39|40|42|43|44|45|46|47|49|50|52|53|54|55|56|57|58|60|61|63|65|66|68|69|32|34|42|43|45|47|53|55|56|57|58|63|65|66|69|72|75|76|77|78|80|81|82|83|84|85|86|87|88|89|90|91|92|93|94|95|96|97|98|99)\d{6}$/;
  return phoneRegex.test(phoneNumber);
};

export { isValidEmail, isValidPhoneNumber };
