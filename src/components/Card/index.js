import React from "react";
import style from "./style.module.scss";

export const Card = React.memo(function (props) {
  const {
    title = "",
    author = "",
    // name = "Rick Sanchez",
    // image = "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  } = props;

  return (
    <div className={style.container}>
      {/* <img src={image} alt="" /> */}
      <p>{title}</p>
      <p>{author}</p>
    </div>
  );
});
