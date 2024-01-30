import React from "react";
import { Backdrop, Content } from "./Modal.styled";
const Modal = ({ children }) => {
  return (
    <Backdrop>
      <Content>{children}</Content>
    </Backdrop>
  );
};

export default Modal;
