import React from "react";
import { StyledNavLink } from "./ProjectList.styled";
import Section from "../Section/Section";
import { useLocation } from "react-router-dom";

const ProjectList = ({ items }) => {
  const location = useLocation();
  // console.log("location: ", location);
  return (
    <Section>
      {items.length === 0 ? (
        <p>У вас ще немає проектів</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item._id}>
              <StyledNavLink to={`${item._id}`} state={{ from: location }}>
                {item.Title}
              </StyledNavLink>
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
};

export default ProjectList;
