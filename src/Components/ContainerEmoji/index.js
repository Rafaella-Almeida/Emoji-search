import React from "react";
import "./style.css";

export default function ContainerEmoji(props) {
  const { title, symbol } = props;
  return (
    <div className="container-um">
      <span className="imagem"> {symbol}</span>
      <p className="texto">{title}</p>
    </div>
  );
}
