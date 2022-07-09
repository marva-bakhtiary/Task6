import React from "react";
const Button = ({ children, onClick, extraClassname }) => {
  return (
    <button
      className={`btnColor rounded text-center text-white ${extraClassname}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
