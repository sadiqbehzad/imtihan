
import React from "react";
import { useNavigate } from "react-router-dom";
import './button.css';

const Button = (props) => {
  const { label, whiteButton, to } = props;
  const navigate = useNavigate();
  const color = whiteButton === 'blackButton' ? 'black' : 'white';
  const buttonStyle = {
    color: color,
  };
  
  const handleClick = () => {
    navigate(to);
  };

  return (
    <button className='btn' style={buttonStyle} onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;



