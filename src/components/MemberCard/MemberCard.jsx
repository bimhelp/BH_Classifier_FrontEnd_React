import React from "react";
import { Card, MenuWrapper } from "./MemberCard.styled";
import MemberMenu from "../MemberMenu/MemberMenu";

const MemberCard = ({ variant, member, member: { name, lastName, email } }) => {
  return (
    <Card>
      <p>{name}</p>
      <p>{lastName}</p>
      <p>{email}</p>
      <MenuWrapper>
        <MemberMenu variant={variant} member={member}></MemberMenu>
      </MenuWrapper>
    </Card>
  );
};

export default MemberCard;
