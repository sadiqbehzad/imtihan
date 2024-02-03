import "./button.css";
const Button = (props) => {
  const { label, color } = props;
  const myButtonStyle = {
    color: color || "white",
    // width: width || "auto",
  };
  const myButtonReflectionStyle = {
    color: "transparent",
    // width: width || "auto",
  };
  return (
    <div className="myButton-container">
      <button className="myBttn" style={myButtonStyle}>
        {label}
      </button>
      <button className="myBttn-reflection" style={myButtonReflectionStyle}>
        {label}
      </button>
    </div>
  );
};

export default Button;
