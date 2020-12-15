import React from "react";
import "./style.scss";

const Button = ({ toURL = "", btnText = "" }) => {
  return (
    <a href={toURL} className="button-wrapper">
      <button className="learn-more">{btnText}</button>
    </a>
  );
};

export default Button;
