import { ValidationError } from "apollo-server-errors";
import { getMongoRepository } from "typeorm";

import { User } from "../entity/User";
import { IRegisterInput } from "../interfaces";
import { isValidPassword, isValidUsername } from "../validation";

export const register = async (input: IRegisterInput) => {
  const db = getMongoRepository(User);
  if (!isValidUsername(input.username)) {
    throw new ValidationError(`Not a valid username`);
  }
  if (!isValidPassword(input.password)) {
    throw new ValidationError(`Not a valid password`);
  }
  const userExists = await db.findOne({ username: input.username });
  if (userExists) {
    throw new ValidationError(`Username already in DB`);
  }
  const user = db.save(new User(input));

  return true;
};
