import { gql } from "@apollo/client";

// export const GET_BOOKS = gql`
//   query getBooks($page: Int, $limit: Int) {
//     books(page: $page, limit: $limit) {
//       info {
//         count
//         pages
//         next
//       }
//       results {
//         title
//         author
//       }
//     }å
//   }
// `;
export const GET_BOOKS = gql`
  query getBooks($offset: Int, $limit: Int) {
    books(offset: $offset, limit: $limit) {
      title
      author
    }
  }
`;
