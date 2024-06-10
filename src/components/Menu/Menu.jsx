import React, { useState } from "react";
// Навігація по сайту
import {
  Navigation,
  DesctopMenu,
  StyledNavLink,
  LinkTitle,
  MenuBtn,
} from "./Menu.styled";
import { GiBrickWall } from "react-icons/gi";
import { IoHammer } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import User from "../User/User";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navigation>
      <DesctopMenu className={isOpen ? "active" : ""}>
        <StyledNavLink to="/" onClick={() => setIsOpen(false)}>
          <GiBrickWall />
          <LinkTitle>Матеріали</LinkTitle>
        </StyledNavLink>

        <StyledNavLink to="services" onClick={() => setIsOpen(false)}>
          <IoHammer />
          <LinkTitle>Послуги</LinkTitle>
        </StyledNavLink>
      </DesctopMenu>

      <MenuBtn onClick={menuToggle}>
        <GiHamburgerMenu />
      </MenuBtn>
      <User />
    </Navigation>
  );
};

export default Menu;
