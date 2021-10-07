"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidPassword = exports.isValidUsername = void 0;
const isValidUsername = (username) => {
    return /^\w{5,}$/.test(username);
};
exports.isValidUsername = isValidUsername;
const isValidPassword = (pass) => {
    return !!pass.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\w\W]{8,}$/);
};
exports.isValidPassword = isValidPassword;
//# sourceMappingURL=validation.js.map