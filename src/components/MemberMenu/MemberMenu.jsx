import React from "react";
import { IconButton } from "../Button/Button";
import { IoPersonAddSharp } from "react-icons/io5";
import { IoPersonRemoveSharp } from "react-icons/io5";

const MemberMenu = ({ member: { email }, companyId, add, remove, variant }) => {
  return (
    <>
      {variant === "search" ? (
        <IconButton
          icon={IoPersonAddSharp}
          visibility="visible"
          variant="neutral"
          tooltip="Додати"
          onClick={() => add(companyId, email)}
        ></IconButton>
      ) : (
        <>
          <IconButton
            icon={IoPersonRemoveSharp}
            visibility="visible"
            variant="neutral"
            tooltip="Видалити"
            onClick={() => remove(companyId, email)}
          ></IconButton>
        </>
      )}
    </>
  );
};

export default MemberMenu;
