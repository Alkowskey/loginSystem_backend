"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const register_1 = require("../../UserMutation/register");
const login_1 = require("../../UserQuery/login");
const resolverMap = {
    UserQuery: {
        async login(_, input) {
            return await (0, login_1.login)(input.user);
        },
    },
    UserMutation: {
        async register(_, input) {
            return await (0, register_1.register)(input.user);
        },
    },
};
exports.default = resolverMap;
//# sourceMappingURL=userResolvers.js.map