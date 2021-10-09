import { ValidationError } from "apollo-server-errors";
import { getMongoRepository } from "typeorm";

import { User } from "../entity/User";

export const displayUser = async () => {
  const db = getMongoRepository(User);
  const users = await db.find();

  return users.map((u) => u.username);
};
