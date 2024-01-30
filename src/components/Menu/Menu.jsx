import React, { useState } from "react";
// Навігація по сайту
import {
  Navigation,
  MenuWrapper,
  StyledNavLink,
  UserWrapper,
  UserButton,
  UserName,
} from "./Menu.styled";
import { FiUser } from "react-icons/fi";
import { FiPlusSquare } from "react-icons/fi";

const Menu = () => {
  const [userName, setUserName] = useState("Alex");

  return (
    <Navigation>
      <MenuWrapper>
        <StyledNavLink to="/">CPV</StyledNavLink>
        <StyledNavLink to="build">Building Classifier</StyledNavLink>
        <StyledNavLink to="user">User Materials</StyledNavLink>
      </MenuWrapper>
      <UserWrapper>
        <UserButton to="login">
          {userName ? (
            <UserName>{userName}</UserName>
          ) : (
            <UserName> LogIn </UserName>
          )}
          <FiUser />
        </UserButton>

        {userName && (
          <UserButton to="add">
            <FiPlusSquare />
          </UserButton>
        )}
      </UserWrapper>
    </Navigation>
  );
};

export default Menu;
