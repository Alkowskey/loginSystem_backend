import {
  Entity,
  ObjectIdColumn,
  ObjectID,
  Column,
  BaseEntity,
  Index,
} from "typeorm";
import { IRegisterInput } from "../interfaces";
import { saltHashPassword } from "../middlewares/userMiddleware";

@Entity()
export class User extends BaseEntity {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  username: string;

  @Column()
  password: {
    salt: string;
    passwordHash: string;
  };

  constructor(input?: IRegisterInput) {
    if (input) {
      super();
      this.username = input.username;
      this.password = saltHashPassword(input.password);
    }
  }
}
