import React, { useState } from "react";
import CardText from "../card-text/cardtext";
import "./style.scss";
const CardFront = () => {
  const [cardClass, setClass] = useState("")

  return (
    <div id="card" className={cardClass}>
      <div id="card-inside">
        <div className="wrap">
          <CardText/>
        </div>
      </div>

      <div id="card-front">
        <div className="wrap">
          <h1>Happy Birthday! Patricio</h1>
        </div>
        <button id="open" onClick={() => setClass("open-fully")}>&gt;</button>
        <button id="close" onClick={() => setClass("")}>&lt;</button>
      </div>
    </div>
  );
};
export default CardFront;
