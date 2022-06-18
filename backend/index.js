const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

const resolvers = {
  Query: {
    books: () => [
      {
        title: "Book1",
        author: "John",
      },
      {
        title: "Book2",
        author: "Mike",
      },
    ],
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
