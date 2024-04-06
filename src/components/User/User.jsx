import React, { useContext, useState } from "react";
import { authContext as context } from "../../context/authContext";
import { FiUser } from "react-icons/fi";
import { Button } from "../Button/Button";
import {
  LogInButton,
  UserWrapper,
  FlexWrapper,
  Menu,
  Plugin,
} from "./User.styled";
import ContextMenu from "../ContextMenu/ContextMenu";
import Confirm from "../Confirm/Confirm";
import { FaArrowRight } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { SiAutodeskrevit } from "react-icons/si";
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
  const { user, isLoggedIn, onLogOut } = useContext(context);
  return (
    <>
      <UserWrapper>
        {isLoggedIn ? (
          <LogInButton onClick={toggleMenu} type="button">
            {user.name} <FiUser />
          </LogInButton>
        ) : (
          <LogInButton to="login">
            LogIn <FiUser />
          </LogInButton>
        )}
      </UserWrapper>
      {menuOpen && (
        <ContextMenu onClose={toggleMenu}>
          {isLoggedIn && (
            <Menu>
              <Plugin>
                <SiAutodeskrevit />
                <a
                  href="https://bimhelp.com.ua/bimstore/bh_classifier/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Завантажити плагін для Revit
                </a>
              </Plugin>

              <Button
                icon={FaArrowRight}
                onClick={handleConfirm}
                role="warning"
              >
                Log Out
              </Button>
            </Menu>
          )}
        </ContextMenu>
      )}

      {confirmOpen && (
        <Confirm onClose={toggleConfirm} title="Ви точно хочете вийти?">
          <FlexWrapper>
            <Button icon={FaArrowRight} onClick={handleLogOut} role="warning">
              Log Out
            </Button>
            <Button icon={RxCross2} onClick={toggleConfirm}>
              Cancel
            </Button>
          </FlexWrapper>
        </Confirm>
      )}
    </>
  );
};

export default User;
