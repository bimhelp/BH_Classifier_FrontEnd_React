import React from "react";
import { UserMenuWrapper } from "./UserMenu.styled";

const UserMenu = ({ children }) => {
  return <UserMenuWrapper>{children}</UserMenuWrapper>;
};

export default UserMenu;
