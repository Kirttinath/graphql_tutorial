import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
//? import db
import db from "./_db.js";

//? import typeDefs
import { typeDefs } from "./schema.js";

//Todo Server SetUp :
const resolvers = {
  Query: {
    games() {
      return db.games;
    },
    authors() {
      return db.authors;
    },
    reviews() {
      return db.reviews;
    },
    review(_, args) {
      //? 3 parameters parent, args and context
      return db.reviews.find((review) => review.id === args.id);
    },
    author(_, args) {
      //? 3 parameters parent, args and context
      return db.authors.find((author) => author.id === args.id);
    },
    game(_, args) {
      //? 3 parameters parent, args and context
      return db.games.find((game) => game.id === args.id);
    },
  },
};
const server = new ApolloServer({
  //* typeDefs : Definitions of types of data
  typeDefs,
  //* Resolvers
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log("server is ready", 4000);
