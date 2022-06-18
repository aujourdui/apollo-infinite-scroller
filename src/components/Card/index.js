import React from "react";
import style from "./style.module.scss";

export const Card = React.memo(function (props) {
  const {
    name = "Rick Sanchez",
    image = "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  } = props;

  return (
    <div className={style.container}>
      <img src={image} alt="" />
      <p>{name}</p>
    </div>
  );
});
