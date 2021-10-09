import { register } from "../../UserMutation/register";
import { login } from "../../UserQuery/login";
import { displayUser } from "../../UserQuery/displayUser";
import { IRegisterInput, ILoggedInData } from "../../interfaces";

const resolverMap = {
  UserQuery: {
    async login(_: void, input: any): Promise<ILoggedInData> {
      return await login(input.user);
    },
    async displayUser(_: void, input: any): Promise<string[]> {
      return await displayUser();
    },
  },
  UserMutation: {
    async register(_: void, input: any): Promise<Boolean> {
      return await register(input.user);
    },
  },
};
export default resolverMap;
