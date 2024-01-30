import React from "react";
// Навігація по сайту
import { NavLink } from "react-router-dom";
import { Navigation, MenuWrapper, StyledNavLink } from "./Menu.styled";
const Menu = () => {
  return (
    <Navigation>
      <MenuWrapper>
        <StyledNavLink to="/">CPV</StyledNavLink>
        <StyledNavLink to="build">Building Classifier</StyledNavLink>
        <StyledNavLink to="user">User Materials</StyledNavLink>
      </MenuWrapper>
      <NavLink to="login">LogIn</NavLink>
    </Navigation>
  );
};

export default Menu;
