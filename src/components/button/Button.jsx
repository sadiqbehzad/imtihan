
import React from "react";
import './button.css';

const Button = (props) => {
  const { label, whiteButton } = props;
  const color = whiteButton === 'blackButton' ? 'black' : 'white';
  const buttonStyle = {
    color: color,
  };

  return (
    <button className='btn' style={buttonStyle}>
      {label}
    </button>
  );
};

export default Button;

