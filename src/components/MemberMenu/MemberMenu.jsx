import React from "react";
import { IconButton } from "../Button/Button";
// import { MdModeEditOutline } from "react-icons/md";
import { IoPersonAddSharp } from "react-icons/io5";

const MemberMenu = ({ variant, member: { _id } }) => {
  return (
    <>
      {variant === "search" ? (
        <IconButton
          icon={IoPersonAddSharp}
          visibility="visible"
          variant="neutral"
          tooltip="Додати"
          onClick={() => console.log({ _id })}
        ></IconButton>
      ) : (
        <>
          <IconButton
            icon={IoPersonAddSharp}
            visibility="visible"
            variant="neutral"
            tooltip="Команда"
            onClick={() => console.log("add")}
          ></IconButton>
          <IconButton
            icon={IoPersonAddSharp}
            visibility="visible"
            variant="neutral"
            tooltip="Команда"
            onClick={() => console.log("add")}
          ></IconButton>
        </>
      )}
    </>
  );
};

export default MemberMenu;
