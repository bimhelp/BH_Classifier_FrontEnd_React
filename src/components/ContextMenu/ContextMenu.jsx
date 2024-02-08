import React from "react";
import { ContextMenuWrapper } from "./ContextMenu.styled";

const ContextMenu = ({ children }) => {
  return <ContextMenuWrapper>{children}</ContextMenuWrapper>;
};

export default ContextMenu;
