import React from "react";

function Card(props) {
  return (
    <div className="wrapper">
      <h1 className="name">{props.name}</h1>
      <img src={props.img} alt="Obama" />
      <div className="info">
        <p>{props.phone}</p>
        <p>{props.email}</p>
      </div>
    </div>
  );
}

export default Card;
