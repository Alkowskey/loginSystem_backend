"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const apollo_server_errors_1 = require("apollo-server-errors");
const typeorm_1 = require("typeorm");
const User_1 = require("../entity/User");
const validation_1 = require("../validation");
const register = async (input) => {
    const db = (0, typeorm_1.getMongoRepository)(User_1.User);
    if (!(0, validation_1.isValidUsername)(input.username)) {
        throw new apollo_server_errors_1.ValidationError(`Not a valid username`);
    }
    if (!(0, validation_1.isValidPassword)(input.password)) {
        throw new apollo_server_errors_1.ValidationError(`Not a valid password`);
    }
    const userExists = await db.findOne({ username: input.username });
    if (userExists) {
        throw new apollo_server_errors_1.ValidationError(`Username already in DB`);
    }
    const user = db.save(new User_1.User(input));
    return true;
};
exports.register = register;
//# sourceMappingURL=register.js.map