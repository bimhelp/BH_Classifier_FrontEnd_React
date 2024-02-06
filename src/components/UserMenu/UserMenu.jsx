import React, { useContext } from "react";
import { authContext as context } from "../../context/authContext";
import { UserWrapper, UserButton, UserName } from "./UserMenu.styled";
import { FiUser } from "react-icons/fi";
import { FiPlusSquare } from "react-icons/fi";

const UserMenu = () => {
  const { userName } = useContext(context);

  return (
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
  );
};

export default UserMenu;
