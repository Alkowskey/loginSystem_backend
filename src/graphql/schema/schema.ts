import { makeExecutableSchema } from "graphql-tools";

//import { type } from "./schema.graphql";
import { GraphQLSchema } from "graphql";
import resolverMap from "../resolvers/userResolvers";
import type from "./schema.graphql";

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: type,
  resolvers: resolverMap,
});

export default schema;
