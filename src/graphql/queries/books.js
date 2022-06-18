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
  query getBooks($limit: Int) {
    books(limit: $limit) {
      title
      author
    }
  }
`;
