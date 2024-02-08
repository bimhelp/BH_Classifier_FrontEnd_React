import React from "react";
import { ContextMenuWrapper } from "./ContextMenu.styled";
import { createPortal } from "react-dom";
// корінь
const modalRoot = document.querySelector("#modal-root");

const ContextMenu = ({ children }) => {
  return createPortal(
    <ContextMenuWrapper>{children}</ContextMenuWrapper>,
    modalRoot
  );
};

export default ContextMenu;
