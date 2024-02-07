import React, { useContext } from "react";
import UserMenu from "../UserMenu/UserMenu";
import { authContext as context } from "../../context/authContext";
// Навігація по сайту
import { Navigation, MenuWrapper, StyledNavLink } from "./Menu.styled";
import { FaListUl } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { HiMiniQueueList } from "react-icons/hi2";

const Menu = () => {
  const { isLoggedIn } = useContext(context);

  return (
    <Navigation>
      <MenuWrapper>
        <StyledNavLink to="/">
          <FaListUl />
          CPV
        </StyledNavLink>
        {isLoggedIn && (
          <>
            <StyledNavLink to="projects">
              <GrProjects />
              Projects
            </StyledNavLink>
            <StyledNavLink to="materials">
              <HiMiniQueueList />
              Materials
            </StyledNavLink>
          </>
        )}
      </MenuWrapper>
      <UserMenu />
    </Navigation>
  );
};

export default Menu;
