import React from "react";
import { StyledButton, StyledBack, StyledSearch } from "./Button.styled";

export const Button = ({
  type = "button",
  disabled = false,
  icon: Icon = null,
  children,
  onClick,
}) => {
  return (
    <StyledButton type={type} disabled={disabled} onClick={onClick}>
      {Icon && <Icon size={14} />}
      {children}
    </StyledButton>
  );
};
export const BackButton = ({
  type = "button",
  disabled = false,
  icon: Icon = null,
  children,
  onClick,
}) => {
  return (
    <StyledBack type={type} disabled={disabled} onClick={onClick}>
      {Icon && <Icon size={14} />}
      {children}
    </StyledBack>
  );
};

export const SearchButton = ({
  type = "button",
  disabled = false,
  icon: Icon = null,
  children,
  onClick,
}) => {
  return (
    <StyledSearch type={type} disabled={disabled} onClick={onClick}>
      {Icon && <Icon size={14} />}
      {children}
    </StyledSearch>
  );
};
