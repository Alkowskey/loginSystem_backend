"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const graphql_tools_1 = require("graphql-tools");
const userResolvers_1 = (0, tslib_1.__importDefault)(require("../resolvers/userResolvers"));
const typeDefs = [
    `
    schema {
      query: Query
    }
  
    type Query {
      bars: [Bar]!
    }
  
    type Bar {
      id
    }
    `,
    `
    type Foo {
      id: String!
    }
  
    extend type Query {
      foos: [Foo]!
    }
  `,
];
const schema = (0, graphql_tools_1.makeExecutableSchema)({
    typeDefs: typeDefs,
    resolvers: userResolvers_1.default,
});
exports.default = schema;
//# sourceMappingURL=schema.js.map