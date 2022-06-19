import { ApolloServer, gql } from "apollo-server";
import { booksBasic, bookInfo } from "./data/books.js";
// const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  # type Books {
  #   info: Info
  #   results: [Book]
  # }

  # type Book {
  #   title: String
  #   author: String
  # }
  type Books {
    title: String
    author: String
  }

  # type Info {
  #   count: Int
  #   pages: Int
  #   next: Int
  #   prev: Int
  # }

  type Query {
    books(offset: Int, limit: Int): [Books!]
    # books(): [Books!]
  }
`;

const resolvers = {
  Query: {
    books: async (_parent, args, _context, _info) => {
      if (args.limit) {
        const start = args.offset;
        const end = args.limit;
        return [...booksBasic].slice(start, end);
      } else {
        return [...booksBasic];
      }
    },
  },
};

new ApolloServer({
  typeDefs,
  resolvers,
})
  .listen()
  .then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
