import React from "react";
import MemberCard from "../MemberCard/MemberCard";
import Section from "../Section/Section";
const MemberList = ({ title, memders, ...props }) => {
  return (
    <Section>
      <h2>{title}</h2>
      <ul>
        {memders?.map((member) => (
          <li key={member._id}>
            <MemberCard member={member} {...props}></MemberCard>
          </li>
        ))}
      </ul>
    </Section>
  );
};
export default MemberList;
