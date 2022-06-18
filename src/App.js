import { useState } from "react";
import { useQuery } from "@apollo/client";
import InfiniteScroll from "react-infinite-scroll-component";
import { Card } from "./components/Card";
// import { GET_CHARACTERS } from "./graphql/queries/characters";
import { GET_BOOKS } from "./graphql/queries/books";

export default function App() {
  // const [characters, setCharacters] = useState([]);
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const { error, fetchMore, data } = useQuery(GET_BOOKS, {
    variables: { limit: 5 },
    // variables: { page: page },
    // onCompleted: (data) => {
    //   if (!books.length) {
    //     const { info, results } = data.books[0];
    //     console.log(results);
    //     setBooks(results);
    //     setPage(info.next);
    //   }
    // },
  });

  // console.log(data);

  if (error) return <p>Error...</p>;

  const getMoreBooks = async () => {
    const { data } = await fetchMore({
      variables: { page: page },
    });
    const { info, results } = data.books;
    setBooks((prevBooks) => [...prevBooks, ...results]);
    setPage(info.next);
  };

  return (
    // <InfiniteScroll
    //   dataLength={books.length}
    //   next={getMoreBooks}
    //   hasMore={page}
    //   loader={<h4>Loading...</h4>}
    //   endMessage={
    //     <p style={{ textAlign: "center" }}>
    //       <b>You have seen it all</b>
    //     </p>
    //   }
    // >
    <div>
      {/* {books &&
        books.map(({ title, author }, index) => (
          <Card key={index} title={title} author={author} />
        ))} */}
      {data &&
        data.books.map(({ title, author }, index) => (
          <Card key={index} title={title} author={author} />
        ))}
    </div>
    //{" "}
    // </InfiniteScroll>
  );
}
