import React from "react";
import { IconButton } from "../Button/Button";
// import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaGear } from "react-icons/fa6";

const CompanyMenu = ({ id, handleDelete }) => {
  return (
    <>
      <IconButton
        icon={FaGear}
        visibility="visible"
        variant="neutral"
        tooltip="Налаштувати"
        onClick={() => console.log("config")}
      ></IconButton>
      <IconButton
        icon={MdDelete}
        visibility="visible"
        variant="neutral"
        tooltip="Видалити"
        onClick={() => handleDelete(id)}
      ></IconButton>
    </>
  );
};

export default CompanyMenu;
