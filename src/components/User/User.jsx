import React, { useContext, useState } from "react";
import { authContext as context } from "../../context/authContext";
import { IconButton } from "../Button/Button";
import { FiUser } from "react-icons/fi";
import { LogInButton, UserWrapper } from "./User.styled";
import ContextMenu from "../ContextMenu/ContextMenu";
import { Button } from "../Button/Button";
import { FaArrowRight } from "react-icons/fa";
import Confirm from "../Confirm/Confirm";
import { RxCross2 } from "react-icons/rx";
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
        <ContextMenu>
          {isLoggedIn && (
            <Button icon={FaArrowRight} onClick={handleConfirm} role="warning">
              Log Out
            </Button>
          )}
        </ContextMenu>
      )}

      {confirmOpen && (
        <Confirm>
          <p>Ви точно хочете вийти?</p>
          <div>
            <Button icon={FaArrowRight} onClick={handleLogOut} role="warning">
              Log Out
            </Button>
            <Button icon={RxCross2} onClick={toggleConfirm}>
              Cancel
            </Button>
          </div>
        </Confirm>
      )}
    </>
  );
};

export default User;
