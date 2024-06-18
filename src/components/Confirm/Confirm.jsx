import React from "react";
import ContextMenu from "../ContextMenu/ContextMenu";
import { Element } from "./Confirm.styled";

const Confirm = ({ children, onClose, title, element }) => {
  return (
    <ContextMenu onClose={onClose} title={title}>
      {element && <Element>{element}</Element>}
      {children}
    </ContextMenu>
  );
};

export default Confirm;
