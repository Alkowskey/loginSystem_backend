import { IUserLoginData } from "../interfaces";
export declare const login: ({ username, password }: IUserLoginData) => Promise<{
    token: string;
}>;
