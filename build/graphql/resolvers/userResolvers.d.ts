import { ILoggedInData } from "../../interfaces";
declare const resolverMap: {
    UserQuery: {
        login(_: void, input: any): Promise<ILoggedInData>;
    };
    UserMutation: {
        register(_: void, input: any): Promise<Boolean>;
    };
};
export default resolverMap;
