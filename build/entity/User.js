"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const userMiddleware_1 = require("../middlewares/userMiddleware");
let User = class User extends typeorm_1.BaseEntity {
    constructor(input) {
        if (input) {
            super();
            this.username = input.username;
            this.password = (0, userMiddleware_1.saltHashPassword)(input.password);
        }
    }
};
(0, tslib_1.__decorate)([
    (0, typeorm_1.ObjectIdColumn)(),
    (0, tslib_1.__metadata)("design:type", typeorm_1.ObjectID)
], User.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "username", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", Object)
], User.prototype, "password", void 0);
User = (0, tslib_1.__decorate)([
    (0, typeorm_1.Entity)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], User);
exports.User = User;
//# sourceMappingURL=User.js.map