import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "../entity/User";

export const connection = () => {
  createConnection()
    .then(async (connection) => {
      console.log("Set up mongo db");
    })
    .catch((error) => console.log(error));
};
