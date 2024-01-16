
import React from "react";
import './button.css'

const Button = (props) => {
  const {label}=props;
  return (
    <div>
      <button className='btn'>{label}</button>
    </div>
  );
};

export default Button;