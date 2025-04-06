import React, { useContext, useState } from "react";
import { authContext as context } from "../../context/authContext";
import { FaUser } from "react-icons/fa";
import { Button } from "../Button/Button";
import { PLUGIN_URL } from "../../services";
import {
  LogInButton,
  UserWrapper,
  FlexWrapper,
  Menu,
  Plugin,
  IconWrapper,
  StyledNavLink,
  LinkTitle,
} from "./User.styled";
import ContextMenu from "../ContextMenu/ContextMenu";
import Confirm from "../Confirm/Confirm";
import { FaArrowRight } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { SiAutodeskrevit } from "react-icons/si";
import { FaListAlt } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
// import { FaGear } from "react-icons/fa6";

const User = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

  // Показує або приховує меню
  const toggleMenu = () => {
    // console.log("toggle menu");
    setMenuOpen(!menuOpen);
  };

  const toggleConfirm = () => {
    // console.log("toggle confirm");
    setConfirmOpen(!confirmOpen);
  };

  const handleLogOut = () => {
    onLogOut();
    toggleConfirm();
  };

  const handleConfirm = () => {
    toggleConfirm();
    toggleMenu();
  };

  const { user, isLoggedIn, onLogOut, role } = useContext(context);

  return (
    <>
      <UserWrapper>
        {isLoggedIn ? (
          <>
            <LogInButton onClick={toggleMenu} type="button">
              {user.name}
              <IconWrapper role={role}>
                <FaUser />
              </IconWrapper>
            </LogInButton>
          </>
        ) : (
          <LogInButton to="login">
            LogIn <FaUser />
          </LogInButton>
        )}
      </UserWrapper>
      {menuOpen && (
        <ContextMenu onClose={toggleMenu}>
          {isLoggedIn && (
            <Menu>
              <IconWrapper role={role}>
                <FaUser />
                <span>{user.name}</span>
                <span style={{ marginLeft: "auto" }}>{role}</span>
              </IconWrapper>
              {role === "designer" && (
                <>
                  <StyledNavLink to="user-material">
                    <FaListAlt />
                    <LinkTitle>Мої матеріали</LinkTitle>
                  </StyledNavLink>
                  <StyledNavLink to="user-service">
                    <FaListAlt />
                    <LinkTitle>Мої послуги</LinkTitle>
                  </StyledNavLink>
                </>
              )}
              {role === "admin" && (
                <>
                  <StyledNavLink to="user-material">
                    <FaListAlt />
                    <LinkTitle>Мої матеріали</LinkTitle>
                  </StyledNavLink>

                  <StyledNavLink to="user-service">
                    <FaListAlt />
                    <LinkTitle>Мої послуги</LinkTitle>
                  </StyledNavLink>

                  <StyledNavLink to="projects">
                    <GrProjects />
                    <LinkTitle>Projects</LinkTitle>
                  </StyledNavLink>

                  {/* <StyledNavLink to="admin-panel">
                    <FaGear />
                    <LinkTitle>Admin panel</LinkTitle>
                  </StyledNavLink> */}
                </>
              )}

              <Plugin>
                <SiAutodeskrevit />
                <a href={PLUGIN_URL} target="_blank" rel="noreferrer noopener">
                  Завантажити плагін для Revit
                </a>
              </Plugin>

              <Button
                icon={FaArrowRight}
                onClick={handleConfirm}
                role="warning"
              >
                Вийти із системи
              </Button>
            </Menu>
          )}
        </ContextMenu>
      )}

      {confirmOpen && (
        <Confirm onClose={toggleConfirm} title="Ви точно хочете вийти?">
          <FlexWrapper>
            <Button icon={FaArrowRight} onClick={handleLogOut} role="warning">
              Вийти
            </Button>
            <Button icon={RxCross2} onClick={toggleConfirm}>
              Залишитись
            </Button>
          </FlexWrapper>
        </Confirm>
      )}
    </>
  );
};

export default User;
