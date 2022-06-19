import { useState } from "react";
import { useQuery } from "@apollo/client";
import InfiniteScroll from "react-infinite-scroll-component";
import { Card } from "./components/Card";
// import CardList from "./components/CardList";
// import { GET_CHARACTERS } from "./graphql/queries/characters";
import { GET_BOOKS } from "./graphql/queries/books";
import { InView } from "react-intersection-observer";

export default function App() {
  // const [characters, setCharacters] = useState([]);
  // const [books, setBooks] = useState([]);
  // const [page, setPage] = useState(1);
  const { loading, error, fetchMore, data } = useQuery(GET_BOOKS, {
    variables: { offset: 0, limit: 16 },
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

  // if (error) return <p>Error...</p>;

  // const getMoreBooks = async () => {
  //   const { data } = await fetchMore({
  //     variables: { page: page },
  //   });
  //   const { info, results } = data.books;
  //   setBooks((prevBooks) => [...prevBooks, ...results]);
  //   setPage(info.next);
  // };
  if (loading) {
    return <p>Lording</p>;
  }
  if (error) {
    console.log(error);
  }

  if (data) {
    console.log(data.books.length);
  }

  return (
    <div>
      {/* {books &&
        books.map(({ title, author }, index) => (
          <Card key={index} title={title} author={author} />
        ))} */}
      {data &&
        data.books.map(({ title, author }, index) => (
          <Card key={index} title={title} author={author} />
        ))}
      {/* <button
        onClick={async () => {
          const currentLength = data?.books.length || 0;
          console.log(currentLength);
          await fetchMore({
            variables: {
              offset: currentLength,
              limit: currentLength * 2,
            },
          });
        }}
      >
        fetch more
      </button> */}
      {data && (
        <InView
          onChange={async (inView) => {
            const currentLength = data?.books.length || 0;
            if (inView) {
              await fetchMore({
                variables: {
                  offset: currentLength,
                  limit: currentLength * 2,
                },
              });
            }
          }}
        />
      )}
    </div>
    //{" "}
    // </InfiniteScroll>
  );
}

// {data && (
//   <CardList
//     // key={index}
//     // title={title}
//     // author={author}
//     books={data.books || []}
//     onLoadMore={() =>
//       fetchMore({
//         variables: {
//           offset: data.books.length,
//         },
//         updateQuery: (prev, { fetchMoreResult }) => {
//           if (!fetchMoreResult) return prev;
//           return Object.assign({}, prev, {
//             books: [...prev.books, ...fetchMoreResult.books],
//           });
//         },
//       })
//     }
//   />
// )}
