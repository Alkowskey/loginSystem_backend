import { ObjectID, BaseEntity } from "typeorm";
import { IRegisterInput } from "../interfaces";
export declare class User extends BaseEntity {
    id: ObjectID;
    username: string;
    password: {
        salt: string;
        passwordHash: string;
    };
    constructor(input?: IRegisterInput);
}
