"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparePasswords = exports.saltHashPassword = exports.genRandomString = void 0;
const tslib_1 = require("tslib");
const crypto_1 = (0, tslib_1.__importDefault)(require("crypto"));
const genRandomString = (length) => crypto_1.default
    .randomBytes(Math.ceil(length / 2))
    .toString("hex")
    .slice(0, length);
exports.genRandomString = genRandomString;
const saltHashPassword = (password) => {
    const salt = (0, exports.genRandomString)(16); /** Gives us salt of length 16 */
    return sha512(password, salt);
};
exports.saltHashPassword = saltHashPassword;
const sha512 = (password, salt) => {
    const hash = crypto_1.default.createHmac("sha512", salt);
    hash.update(password);
    const passwordHash = hash.digest("hex");
    return {
        salt,
        passwordHash,
    };
};
const comparePasswords = ({ password, hash, salt, }) => {
    return hash === sha512(password, salt).passwordHash;
};
exports.comparePasswords = comparePasswords;
//# sourceMappingURL=userMiddleware.js.map