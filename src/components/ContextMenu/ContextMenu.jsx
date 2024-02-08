import React, { useEffect } from "react";
import { CloseButton } from "../../components/Button/Button";
import { CgClose } from "react-icons/cg";

import {
  ContextMenuWrapper,
  Backdrop,
  Content,
  Title,
} from "./ContextMenu.styled";
import { createPortal } from "react-dom";
// корінь
const modalRoot = document.querySelector("#modal-root");

const ContextMenu = ({ children, title, onClose }) => {
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

  function handleBackDropClick(event) {
    if (event.currentTarget === event.target) {
      onClose();
    }
  }
  return createPortal(
    <Backdrop onClick={handleBackDropClick}>
      <ContextMenuWrapper>
        {title && <Title>{title}</Title>}
        <Content>
          <CloseButton onClick={onClose} icon={CgClose}></CloseButton>
          {children}
        </Content>
      </ContextMenuWrapper>
    </Backdrop>,
    modalRoot
  );
};

export default ContextMenu;
