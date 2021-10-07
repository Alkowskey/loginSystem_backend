import { register } from "../../UserMutation/register";
import { login } from "../../UserQuery/login";
import { IRegisterInput, ILoggedInData } from "../../interfaces";

const resolverMap = {
  UserQuery: {
    async login(_: void, input: any): Promise<ILoggedInData> {
      return await login(input.user);
    },
  },
  UserMutation: {
    async register(_: void, input: any): Promise<Boolean> {
      return await register(input.user);
    },
  },
};
export default resolverMap;
