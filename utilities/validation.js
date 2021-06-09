import User from "../models/User";

export const validateUser = (username, password) => {
  if (username === User.username) {
    if (password == User.password) {
      console.log("Correct");
      return true;
    }
  }
  return false;
};
