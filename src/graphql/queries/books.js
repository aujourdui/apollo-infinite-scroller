import { gql } from "@apollo/client";

export const GET_BOOKS = gql`
  query getBooks($page: Int) {
    books(page: $page) {
      info {
        count
        pages
        next
      }
      results {
        title
        author
      }
    }
  }
`;
