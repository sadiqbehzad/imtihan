import React from "react";
import "./button.css";
const Button = (props) => {
  const { width, label, color } = props;
  const btnStyle = {
    width: width || "auto",
    color: color || "White",
  };

  return (
    <div className="btn-container">
      <button className="btn" style={btnStyle}>
        {label}{" "}
      </button>
    </div>
  );
};
export default Button;
