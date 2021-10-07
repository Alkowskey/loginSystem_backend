import { ValidationError } from "apollo-server-errors";
import { getMongoRepository } from "typeorm";

import { User } from "../entity/User";
import { IUserLoginData } from "../interfaces";

import { comparePasswords } from "../middlewares/userMiddleware";

import { sign } from "jsonwebtoken";

export const login = async ({ username, password }: IUserLoginData) => {
  const db = getMongoRepository(User);
  const user = await db.findOne({ username });
  if (!process.env.JWT_SECRET) {
    throw new ValidationError(`Please set JWT_SECRET env`);
  }
  if (!user) {
    throw new ValidationError(`Invalid username or password`);
  }
  if (user?.password?.passwordHash && user?.password?.salt) {
    const passwordMatch = comparePasswords({
      password: password,
      hash: user.password.passwordHash,
      salt: user.password.salt,
    });
    if (!passwordMatch)
      throw new ValidationError("Invalid username or password");
    return {
      token: sign({ username }, process.env.JWT_SECRET),
    };
  }
  throw new ValidationError("Invalid username or password");
};
