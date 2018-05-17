import React from "react";

const Button = ({ text, className, onClick }) => (
  <button className={className} onClick={onClick}>
    {text}
  </button>
);

export default Button;
