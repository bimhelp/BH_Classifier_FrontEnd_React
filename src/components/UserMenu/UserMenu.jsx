import React, { useContext } from "react";
import { authContext as context } from "../../context/authContext";
import { UserWrapper, UserButton, UserName, Avatar } from "./UserMenu.styled";
import { FiUser } from "react-icons/fi";
import { Button } from "../Button/Button";

const UserMenu = () => {
  const { user, isLoggedIn, onLogOut } = useContext(context);
  return (
    <UserWrapper>
      <UserButton to="login">
        {isLoggedIn ? (
          <UserName>{user.name}</UserName>
        ) : (
          <UserName>LogIn</UserName>
        )}
        {isLoggedIn && <Button onClick={onLogOut}>LogOut</Button>}
        <Avatar>
          <FiUser />
          {/* {user?.avatar ? <img src={user.avatar} alt="user" /> : <FiUser />} */}
        </Avatar>
      </UserButton>
    </UserWrapper>
  );
};

export default UserMenu;
