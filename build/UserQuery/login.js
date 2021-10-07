"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const apollo_server_errors_1 = require("apollo-server-errors");
const typeorm_1 = require("typeorm");
const User_1 = require("../entity/User");
const userMiddleware_1 = require("../middlewares/userMiddleware");
const jsonwebtoken_1 = require("jsonwebtoken");
const login = async ({ username, password }) => {
    var _a, _b;
    const db = (0, typeorm_1.getMongoRepository)(User_1.User);
    const user = await db.findOne({ username });
    if (!process.env.JWT_SECRET) {
        throw new apollo_server_errors_1.ValidationError(`Please set JWT_SECRET env`);
    }
    if (!user) {
        throw new apollo_server_errors_1.ValidationError(`Invalid username or password`);
    }
    if (((_a = user === null || user === void 0 ? void 0 : user.password) === null || _a === void 0 ? void 0 : _a.passwordHash) && ((_b = user === null || user === void 0 ? void 0 : user.password) === null || _b === void 0 ? void 0 : _b.salt)) {
        const passwordMatch = (0, userMiddleware_1.comparePasswords)({
            password: password,
            hash: user.password.passwordHash,
            salt: user.password.salt,
        });
        if (!passwordMatch)
            throw new apollo_server_errors_1.ValidationError("Invalid username or password");
        return {
            token: (0, jsonwebtoken_1.sign)({ username }, process.env.JWT_SECRET),
        };
    }
    throw new apollo_server_errors_1.ValidationError("Invalid username or password");
};
exports.login = login;
//# sourceMappingURL=login.js.map