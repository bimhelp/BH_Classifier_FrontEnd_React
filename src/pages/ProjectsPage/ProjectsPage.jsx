import React, { useState } from "react";
import Modal from "../../components/Modal/Modal";
import { Button } from "../../components/Button/Button";
const ProjectsPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <>
      <p>projects page</p>
      <Button onClick={toggleModal}>Open Modal</Button>
      {modalOpen && (
        <Modal onClose={toggleModal}>
          <p>Modal window</p>
          <Button onClick={toggleModal}>Close Modal</Button>
        </Modal>
      )}
    </>
  );
};

export default ProjectsPage;
