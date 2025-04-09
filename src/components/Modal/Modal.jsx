import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { Backdrop, Content, ModalWindow, Title } from "./Modal.styled";
import { CloseButton } from "../../components/Button/Button";
import { CgClose } from "react-icons/cg";
// корінь
const modalRoot = document.querySelector("#modal-root");

export const Modal = ({ children, title, onClose }) => {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.code === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  // Виключив бо часто випадково закриваю форму
  // function handleBackDropClick(event) {
  //   if (event.currentTarget === event.target) {
  //     onClose();
  //   }
  // }

  return createPortal(
    // <Backdrop onClick={handleBackDropClick}>
    <Backdrop>
      <ModalWindow>
        <div>
          <CloseButton onClick={onClose} icon={CgClose}></CloseButton>
          {title && <Title>{title}</Title>}
        </div>
        <Content>{children}</Content>
      </ModalWindow>
    </Backdrop>,
    modalRoot
  );
};
