import React from "react";
import { StyledButton } from "./Button.styled";

const Button = ({
  type = "button",
  disabled = false,
  icon: Icon = null,
  children,
}) => {
  return (
    <StyledButton type={type} disabled={disabled}>
      {Icon && <Icon />}
      {children}
    </StyledButton>
  );
};

export default Button;
