import React from "react";
import { IconButton } from "../Button/Button";
// import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaGear } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";

const CompanyMenu = ({ id, edit, handleDelete }) => {
  return (
    <>
      <IconButton
        icon={RiTeamFill}
        visibility="visible"
        variant="neutral"
        tooltip="Команда"
        onClick={() => console.log("open team manager")}
      ></IconButton>
      <IconButton
        icon={FaGear}
        visibility="visible"
        variant="neutral"
        tooltip="Налаштувати"
        onClick={() => edit(id)}
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
