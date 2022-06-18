const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Books {
    info: Info
    results: [Book]
  }

  type Book {
    title: String
    author: String
  }

  type Info {
    count: Int
    pages: Int
    next: Int
    prev: Int
  }

  type Query {
    books(page: Int): [Books!]
  }
  # type Query {
  #   books: [Book(page: Int!)]: Int
  # }
`;

const resolvers = {
  Query: {
    books: (parent, { page }, context, info) => [
      {
        info: {
          count: 1,
          pages: 1,
          next: 1,
        },
        results: [
          {
            title: "Book1",
            author: "John",
          },
          {
            title: "Book2",
            author: "Mike",
          },
          {
            title: "Book3",
            author: "John",
          },
          {
            title: "Book4",
            author: "Mike",
          },
          {
            title: "Book5",
            author: "John",
          },
          {
            title: "Book6",
            author: "Mike",
          },
          {
            title: "Book7",
            author: "John",
          },
          {
            title: "Book8",
            author: "Mike",
          },
          {
            title: "Book9",
            author: "John",
          },
          {
            title: "Book10",
            author: "Mike",
          },
          {
            title: "Book11",
            author: "John",
          },
          {
            title: "Book12",
            author: "Mike",
          },
        ],
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
