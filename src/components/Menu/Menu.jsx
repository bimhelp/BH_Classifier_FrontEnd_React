import React from "react";
import UserMenu from "../UserMenu/UserMenu";
// Навігація по сайту
import { Navigation, MenuWrapper, StyledNavLink } from "./Menu.styled";

const Menu = () => {
  return (
    <Navigation>
      <MenuWrapper>
        <StyledNavLink to="/">CPV</StyledNavLink>
        <StyledNavLink to="projects">Projects</StyledNavLink>
      </MenuWrapper>
      <UserMenu />
    </Navigation>
  );
};

export default Menu;
