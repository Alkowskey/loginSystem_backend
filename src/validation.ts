export const isValidUsername = (username: string): boolean => {
  return /^\w{5,}$/.test(username);
};
export const isValidPassword = (pass: string): boolean => {
  return !!pass.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\w\W]{8,}$/);
};
