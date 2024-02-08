import React from "react";
import ContextMenu from "../ContextMenu/ContextMenu";

const Confirm = ({ children, onClose, title }) => {
  return (
    <ContextMenu onClose={onClose} title={title}>
      {children}
    </ContextMenu>
  );
};

export default Confirm;
