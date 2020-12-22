export const createPasswordLabel = (value) => {
  switch (value) {
    case 0:
      return "Weak";
    case 1:
      return "Weak";
    case 2:
      return "Fair";
    case 3:
      return "Good";
    case 4:
      return "Strong";
    default:
      return "Weak";
  }
};
