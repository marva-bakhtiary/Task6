import React from "react";
const Button = ({ children, Click, extraClassname }) => {
  return (
    <button
      className={`btnColor rounded text-center text-white ${extraClassname}`}
      onClick={Click}
    >
      {children}
    </button>
  );
};

export default Button;
