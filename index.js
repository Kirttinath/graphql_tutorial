import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

//? import typeDefs
import { typeDefs } from "./schema.js";

//Todo Server SetUp :

const server = new ApolloServer({
  //* typeDefs : Definitions of types of data
  typeDefs,
  //* Resolvers
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log("server is ready", 4000);
