import { useState } from "react";
import { useQuery } from "@apollo/client";
import InfiniteScroll from "react-infinite-scroll-component";
import { Card } from "./components/Card";
import { GET_CHARACTERS } from "./graphql/queries/characters";

export default function App() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const { error, fetchMore } = useQuery(GET_CHARACTERS, {
    variables: { page: page },
    onCompleted: (data) => {
      if (!characters.length) {
        const { info, results } = data.characters;
        setCharacters(results);
        setPage(info.next);
      }
    },
  });

  if (error) return <p>Error...</p>;

  const getMoreCharacters = async () => {
    const { data } = await fetchMore({
      variables: { page: page },
    });
    const { info, results } = data.characters;
    setCharacters((prevCharacters) => [...prevCharacters, ...results]);
    setPage(info.next);
  };

  return (
    <InfiniteScroll
      dataLength={characters.length}
      next={getMoreCharacters}
      hasMore={page}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>You have seen it all</b>
        </p>
      }
    >
      {characters.map(({ id, name, image }) => (
        <Card key={id} name={name} image={image} />
      ))}
    </InfiniteScroll>
  );
}
