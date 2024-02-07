import React, { useContext, useState } from "react";
import { authContext as context } from "../../context/authContext";
import { IconButton } from "../Button/Button";
import { FiUser } from "react-icons/fi";
import { LogInButton, UserWrapper } from "./User.styled";
import UserMenu from "../UserMenu/UserMenu";
import { Button } from "../Button/Button";
import { FaArrowRight } from "react-icons/fa";
const User = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // Показує або приховує меню
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogOut = () => {
    onLogOut();
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
        <UserMenu>
          {isLoggedIn && (
            <Button icon={FaArrowRight} onClick={handleLogOut}>
              Log Out
            </Button>
          )}
        </UserMenu>
      )}
    </>
  );
};

export default User;
