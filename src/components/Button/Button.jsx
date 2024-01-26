import React from "react";
import { StyledButton } from "./Button.styled";

const Button = ({
  type = "button",
  disabled = false,
  icon: Icon = null,
  children,
  onClick,
  hide,
}) => {
  return (
    <StyledButton type={type} disabled={disabled} onClick={onClick}>
      {Icon && <Icon />}
      {children}
    </StyledButton>
  );
};

export default Button;
