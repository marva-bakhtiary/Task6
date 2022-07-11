import React from "react";

interface BtnProps {
  children?: any;
  onClick?: any;
  extraClassname?: any;
  onChange?: any;
  value?: any;
}
const Button = ({
  children,
  onClick,
  extraClassname,
  onChange,
  value,
}: BtnProps) => {
  return (
    <button
      className={`btnColor rounded text-center text-white ${extraClassname}`}
      onClick={onClick}
      onChange={onChange}
      value={value}
    >
      {children}
    </button>
  );
};

export default Button;
