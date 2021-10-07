import express from "express";
import { ApolloServer } from "apollo-server-express";

import schema from "./graphql/schema/schema";
import { connection } from "./setup/dbConnection";

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
