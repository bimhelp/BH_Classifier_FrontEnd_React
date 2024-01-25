import React from "react";
import { StyledButton } from "./Button.styled";
import { IoMdRadioButtonOn } from "react-icons/io";

const Button = ({ type = "button", disabled = false, children }) => {
  return (
    <StyledButton type={type} disabled={disabled}>
      <IoMdRadioButtonOn />

      {children}
    </StyledButton>
  );
};

export default Button;
