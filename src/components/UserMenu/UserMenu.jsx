import React, { useContext } from "react";
import { authContext as context } from "../../context/authContext";
import { UserWrapper, UserButton, UserName } from "./UserMenu.styled";
import { FiUser } from "react-icons/fi";
import { Button } from "../Button/Button";

const UserMenu = () => {
  const { user, isLoggedIn, onLogIn, onLogOut } = useContext(context);
  // console.log("userMenu: ", authContext);
  return (
    <UserWrapper>
      <UserButton to="login">
        {isLoggedIn && <UserName>{user.name}</UserName>}
        {isLoggedIn ? (
          <Button onClick={onLogOut}>LogOut</Button>
        ) : (
          <Button>LogIn</Button>
        )}
        <FiUser />
      </UserButton>
    </UserWrapper>
  );
};

export default UserMenu;
