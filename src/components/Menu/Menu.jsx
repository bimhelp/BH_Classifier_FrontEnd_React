import React, { useState, useContext } from "react";
import { authContext as context } from "../../context/authContext";
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
import { BiSolidBusiness } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import User from "../User/User";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { role } = useContext(context);
  const menuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navigation>
      {role === "admin" ? (
        <DesctopMenu className={isOpen ? "active" : ""}>
          <StyledNavLink to="/" onClick={() => setIsOpen(false)}>
            <GiBrickWall />
            <LinkTitle>Матеріали</LinkTitle>
          </StyledNavLink>

          <StyledNavLink to="services" onClick={() => setIsOpen(false)}>
            <IoHammer />
            <LinkTitle>Послуги</LinkTitle>
          </StyledNavLink>

          <StyledNavLink to="companys" onClick={() => setIsOpen(false)}>
            <BiSolidBusiness />
            <LinkTitle>Компанії</LinkTitle>
          </StyledNavLink>

          <StyledNavLink to="users" onClick={() => setIsOpen(false)}>
            <FaUsers />
            <LinkTitle>Користувачі</LinkTitle>
          </StyledNavLink>
        </DesctopMenu>
      ) : (
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
      )}

      <MenuBtn onClick={menuToggle}>
        <GiHamburgerMenu />
      </MenuBtn>
      <User />
    </Navigation>
  );
};

export default Menu;
