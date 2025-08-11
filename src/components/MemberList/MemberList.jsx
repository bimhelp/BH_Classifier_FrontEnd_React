import React from "react";
import MemberCard from "../MemberCard/MemberCard";
import Section from "../Section/Section";
const MemberList = ({ title, members, companyId, add, remove, variant }) => {
  return (
    <Section>
      <h2>{title}</h2>
      <ul>
        {members?.map((member) => (
          <li key={member._id}>
            <MemberCard
              member={member}
              companyId={companyId}
              add={add}
              remove={remove}
              variant={variant}
            ></MemberCard>
          </li>
        ))}
      </ul>
    </Section>
  );
};
export default MemberList;
