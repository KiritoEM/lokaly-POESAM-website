const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isValidPhoneNumber = (phoneNumber: any) => {
  const phoneRegex = /^0(32|33|34|38)\d{7}$/;
  return phoneRegex.test(phoneNumber);
};

export { isValidEmail, isValidPhoneNumber };
