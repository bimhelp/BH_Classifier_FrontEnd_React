import React, { useContext, useState } from "react";
import { authContext as context } from "../../context/authContext";
import { IconButton } from "../Button/Button";
import { FiUser } from "react-icons/fi";
import {
  LogInButton,
  UserWrapper,
  FlexWrapper,
  Menu,
  Plugin,
} from "./User.styled";
import ContextMenu from "../ContextMenu/ContextMenu";
import { Button } from "../Button/Button";
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
          <IconButton onClick={toggleMenu} type="button" icon={FiUser}>
            {user.name}
          </IconButton>
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
                  href="https://drive.google.com/drive/folders/17y6FYQ_if2LSBmSmSpJhtAmb-G_2casa?usp=sharing"
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
