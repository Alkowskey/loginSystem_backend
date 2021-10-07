import express from "express";
import { ApolloServer } from "apollo-server-express";

import { connection } from "./setup/dbConnection";
import { makeExecutableSchema } from "graphql-tools";

import { GraphQLSchema } from "graphql";
import resolverMap from "./graphql/resolvers/userResolvers";
import typeDef from "./graphql/schema/schema";

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: typeDef,
  resolvers: resolverMap,
});

export default schema;

const PORT = process.env.PORT || 25552;
async function startServer() {
  const server = new ApolloServer({ schema });
  const app = express();
  await server.start();
  server.applyMiddleware({ app, path: "/graphql" });

  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}${server.graphqlPath}`);
  });

  await connection();
}

startServer();
