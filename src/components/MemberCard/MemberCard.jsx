import React from "react";
import { Card, MenuWrapper } from "./MemberCard.styled";
import MemberMenu from "../MemberMenu/MemberMenu";

const MemberCard = ({
  member,
  member: { name, lastName, email },
  companyId,
  add,
  remove,
  variant,
}) => {
  return (
    <Card>
      <p>{name}</p>
      <p>{lastName}</p>
      <p>{email}</p>
      <MenuWrapper>
        <MemberMenu
          member={member}
          companyId={companyId}
          add={add}
          remove={remove}
          test={(id, email) => console.log("test", id, email)}
          variant={variant}
        ></MemberMenu>
      </MenuWrapper>
    </Card>
  );
};

export default MemberCard;
