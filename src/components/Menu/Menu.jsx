import React, { useContext } from "react";
import { authContext as context } from "../../context/authContext";
// Навігація по сайту
import {
  Navigation,
  MenuWrapper,
  StyledNavLink,
  LinkTitle,
} from "./Menu.styled";
// import { FaListUl } from "react-icons/fa";
import { GiBrickWall } from "react-icons/gi";
import { IoHammer } from "react-icons/io5";
import { FaGear } from "react-icons/fa6";
// import { GrProjects } from "react-icons/gr";
// import { HiMiniQueueList } from "react-icons/hi2";
import User from "../User/User";

const Menu = () => {
  // const { isLoggedIn } = useContext(context);
  const { user } = useContext(context);
  console.log("user: ", user.role);

  return (
    <Navigation>
      <MenuWrapper>
        <StyledNavLink to="/">
          {/* <FaListUl /> */}
          <GiBrickWall />
          <LinkTitle>Матеріали</LinkTitle>
        </StyledNavLink>

        <StyledNavLink to="services">
          <IoHammer />
          <LinkTitle>Послуги</LinkTitle>
        </StyledNavLink>
        {user.role === "admin" && (
          <StyledNavLink to="admin-panel">
            <FaGear />
            <LinkTitle>Admin panel</LinkTitle>
          </StyledNavLink>
        )}
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
