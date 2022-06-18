const { ApolloServer, gql } = require("apollo-server");

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
    books(limit: Int): [Books!]
    # books(): [Books!]
  }
`;

const bookInfo = [
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
      {
        title: "Book13",
        author: "John",
      },
      {
        title: "Book14",
        author: "Mike",
      },
      {
        title: "Book15",
        author: "John",
      },
      {
        title: "Book16",
        author: "Mike",
      },
      {
        title: "Book17",
        author: "John",
      },
      {
        title: "Book18",
        author: "Mike",
      },
      {
        title: "Book19",
        author: "John",
      },

      {
        title: "Book20",
        author: "Mike",
      },
      // {
      //   title: "Book21",
      //   author: "John",
      // },
      // {
      //   title: "Book22",
      //   author: "Mike",
      // },
      // {
      //   title: "Book23",
      //   author: "John",
      // },
      // {
      //   title: "Book24",
      //   author: "Mike",
      // },
      // {
      //   title: "Book25",
      //   author: "John",
      // },
      // {
      //   title: "Book26",
      //   author: "Mike",
      // },
      // {
      //   title: "Book27",
      //   author: "John",
      // },
      // {
      //   title: "Book28",
      //   author: "Mike",
      // },
      // {
      //   title: "Book29",
      //   author: "John",
      // },
      // {
      //   title: "Book30",
      //   author: "Mike",
      // },
      // {
      //   title: "Book31",
      //   author: "John",
      // },
      // {
      //   title: "Book32",
      //   author: "Mike",
      // },
      // {
      //   title: "Book33",
      //   author: "John",
      // },
      // {
      //   title: "Book34",
      //   author: "Mike",
      // },
      // {
      //   title: "Book35",
      //   author: "John",
      // },
      // {
      //   title: "Book36",
      //   author: "Mike",
      // },
    ],
  },
];
const booksBasic = [
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
  {
    title: "Book13",
    author: "John",
  },
  {
    title: "Book14",
    author: "Mike",
  },
  {
    title: "Book15",
    author: "John",
  },
  {
    title: "Book16",
    author: "Mike",
  },
  {
    title: "Book17",
    author: "John",
  },
  {
    title: "Book18",
    author: "Mike",
  },
  {
    title: "Book19",
    author: "John",
  },

  {
    title: "Book20",
    author: "Mike",
  },
  {
    title: "Book21",
    author: "John",
  },
  {
    title: "Book22",
    author: "Mike",
  },
  {
    title: "Book23",
    author: "John",
  },
  {
    title: "Book24",
    author: "Mike",
  },
  {
    title: "Book25",
    author: "John",
  },
  {
    title: "Book26",
    author: "Mike",
  },
  {
    title: "Book27",
    author: "John",
  },
  {
    title: "Book28",
    author: "Mike",
  },
  {
    title: "Book29",
    author: "John",
  },
  {
    title: "Book30",
    author: "Mike",
  },
  {
    title: "Book31",
    author: "John",
  },
  {
    title: "Book32",
    author: "Mike",
  },
  {
    title: "Book33",
    author: "John",
  },
  {
    title: "Book34",
    author: "Mike",
  },
  {
    title: "Book35",
    author: "John",
  },
  {
    title: "Book36",
    author: "Mike",
  },
];

const resolvers = {
  Query: {
    // books: async (parent, arg, context, info) => books,
    books: async (_parent, args, _context, _info) => {
      if (args.limit) {
        // const end = args.limit + args.offset;
        // const start = args.offset;
        const end = args.limit;
        // const start = args.offset;
        // console.log(args.limit);
        return [...booksBasic].slice(0, end);
        // return [...booksBasic];
      } else {
        return [...booksBasic];
        // return [...books].slice(start, end);
      }
    },
    // books: (parent, arg, context, info) => bookInfo,
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

// {
//   info: {
//     count: 2,
//     pages: 2,
//     next: 2,
//   },

//   results: [
//     {
//       title: "Book13",
//       author: "John",
//     },
//     {
//       title: "Book14",
//       author: "Mike",
//     },
//     {
//       title: "Book15",
//       author: "John",
//     },
//     {
//       title: "Book16",
//       author: "Mike",
//     },
//     {
//       title: "Book17",
//       author: "John",
//     },
//     {
//       title: "Book18",
//       author: "Mike",
//     },
//     {
//       title: "Book19",
//       author: "John",
//     },
//     {
//       title: "Book20",
//       author: "Mike",
//     },
//     {
//       title: "Book21",
//       author: "John",
//     },
//     {
//       title: "Book22",
//       author: "Mike",
//     },
//     {
//       title: "Book23",
//       author: "John",
//     },
//     {
//       title: "Book24",
//       author: "Mike",
//     },
//   ],
// },

// {
//   title: "Book25",
//   author: "John",
// },
// {
//   title: "Book26",
//   author: "Mike",
// },
// {
//   title: "Book27",
//   author: "John",
// },
// {
//   title: "Book28",
//   author: "Mike",
// },
// {
//   title: "Book29",
//   author: "John",
// },
// {
//   title: "Book30",
//   author: "Mike",
// },
// {
//   title: "Book31",
//   author: "John",
// },
// {
//   title: "Book32",
//   author: "Mike",
// },
// {
//   title: "Book33",
//   author: "John",
// },
// {
//   title: "Book34",
//   author: "Mike",
// },
// {
//   title: "Book35",
//   author: "John",
// },
// {
//   title: "Book36",
//   author: "Mike",
// },
