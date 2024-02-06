import React, { useContext } from "react";
import UserMenu from "../UserMenu/UserMenu";
import { authContext as context } from "../../context/authContext";
// Навігація по сайту
import { Navigation, MenuWrapper, StyledNavLink } from "./Menu.styled";

const Menu = () => {
  const { isLoggedIn } = useContext(context);

  return (
    <Navigation>
      <MenuWrapper>
        <StyledNavLink to="/">CPV</StyledNavLink>
        {isLoggedIn && (
          <>
            <StyledNavLink to="projects">Projects</StyledNavLink>
            <StyledNavLink to="materials">Materials</StyledNavLink>
          </>
        )}
      </MenuWrapper>
      <UserMenu />
    </Navigation>
  );
};

export default Menu;
