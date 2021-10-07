"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const connection = () => {
    (0, typeorm_1.createConnection)()
        .then(async (connection) => {
        console.log("Set up mongo db");
    })
        .catch((error) => console.log(error));
};
exports.connection = connection;
//# sourceMappingURL=dbConnection.js.map