import React from "react";
import { StyledNavLink } from "./ProjectList.styled";
import Section from "../Section/Section";
const ProjectList = ({ items }) => {
  return (
    <Section>
      {items.length > 0 ? (
        <ul>
          {items.map((item) => (
            <li key={item._id}>
              <StyledNavLink to={`${item._id}`}>{item.title}</StyledNavLink>
            </li>
          ))}
        </ul>
      ) : (
        <p>У вас ще немає проектів</p>
      )}
    </Section>
  );
};

export default ProjectList;
