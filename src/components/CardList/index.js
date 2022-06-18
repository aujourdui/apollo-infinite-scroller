import React from "react";

const handleScroll = ({ currentTarget }, onLoadMore) => {
  if (
    currentTarget.scrollTop + currentTarget.clientHeight >=
    currentTarget.scrollHeight
  ) {
    onLoadMore();
  }
};

const CardList = ({ books, onLoadMore }) => {
  return (
    <div onScroll={(e) => handleScroll(e, onLoadMore)}>
      {books.map(({ title, author }, index) => (
        <div key={index}>
          <p>{title}</p>
          <p>{author}</p>
        </div>
      ))}
    </div>
  );
};

export default CardList;
