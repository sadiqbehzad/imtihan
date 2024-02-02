import React from "react";
import "./button.css";
import { useNavigate } from "react-router-dom";


  const Button = (props) => {
    const { width, label, color, to } = props;
    const navigate = useNavigate();

    const btnStyle = {
      width: width || "auto",
      color: color || "White",
    };

    const handleClick = () => {
      navigate(to);
    };
    return (
      <div className="btn-container">
        <button className="btn" style={btnStyle} onClick={handleClick}>
          {label}{" "}
        </button>
      </div>
    );
  };
  
export default Button;

