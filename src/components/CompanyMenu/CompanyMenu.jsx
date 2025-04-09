import React from "react";
import { IconButton } from "../Button/Button";
// import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const CompanyMenu = ({ id, handleDelete }) => {
  return (
    <div>
      <IconButton
        icon={MdDelete}
        visibility="visible"
        variant="neutral"
        tooltip="Видалити"
        onClick={() => handleDelete(id)}
      ></IconButton>
    </div>
  );
};

export default CompanyMenu;
