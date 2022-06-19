import { useQuery } from "@apollo/client";
import { Card } from "./components/Card";
import { GET_BOOKS } from "./graphql/queries/books";
import { InView } from "react-intersection-observer";

export default function App() {
  const { loading, error, fetchMore, data } = useQuery(GET_BOOKS, {
    variables: { offset: 0, limit: 16 },
  });

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
      {data &&
        data.books.map(({ title, author }, index) => (
          <Card key={index} title={title} author={author} />
        ))}
      {data && (
        <InView
          onChange={async (inView) => {
            const currentLength = data.books.length || 0;
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
  );
}
