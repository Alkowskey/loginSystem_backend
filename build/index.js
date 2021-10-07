"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = (0, tslib_1.__importDefault)(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const schema_1 = (0, tslib_1.__importDefault)(require("./graphql/schema/schema"));
const dbConnection_1 = require("./setup/dbConnection");
const PORT = process.env.PORT || 25552;
async function startServer() {
    const server = new apollo_server_express_1.ApolloServer({ schema: schema_1.default });
    const app = (0, express_1.default)();
    await server.start();
    server.applyMiddleware({ app, path: "/graphql" });
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}${server.graphqlPath}`);
    });
    await (0, dbConnection_1.connection)();
}
startServer();
//# sourceMappingURL=index.js.map