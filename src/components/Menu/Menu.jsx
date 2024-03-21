// import React, { useContext } from "react";
// import { authContext as context } from "../../context/authContext";
// Навігація по сайту
import {
  Navigation,
  MenuWrapper,
  StyledNavLink,
  LinkTitle,
} from "./Menu.styled";
import { FaListUl } from "react-icons/fa";
// import { GrProjects } from "react-icons/gr";
// import { HiMiniQueueList } from "react-icons/hi2";
import User from "../User/User";

const Menu = () => {
  // const { isLoggedIn } = useContext(context);

  return (
    <Navigation>
      <MenuWrapper>
        <StyledNavLink to="/">
          <FaListUl />
          <LinkTitle>CPV</LinkTitle>
        </StyledNavLink>

        {/* {isLoggedIn && (
          <>
            <StyledNavLink to="projects">
              <GrProjects />
              <LinkTitle>Projects</LinkTitle>
            </StyledNavLink>
            <StyledNavLink to="materials">
              <HiMiniQueueList />
              <LinkTitle>Materials</LinkTitle>
            </StyledNavLink>
          </>
        )} */}
      </MenuWrapper>

      <User />
    </Navigation>
  );
};

export default Menu;
