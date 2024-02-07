import React from "react";
import { NavLink } from "react-router-dom";

const ProjectList = ({ items }) => {
  return (
    <>
      {items.length > 0 ? (
        <ul>
          {items.map((item) => (
            <li key={item._id}>
              <NavLink to={`${item._id}`}>{item.title}</NavLink>
            </li>
          ))}
        </ul>
      ) : (
        <p>У вас ще немає проектів</p>
      )}
    </>
  );
};

export default ProjectList;
