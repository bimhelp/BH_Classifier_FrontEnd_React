import React from "react";
import { Navigation } from "./SideBar.styled";

const SideBar = ({ children }) => {
  return (
    <>
      <Navigation>
        <ul>{children}</ul>
      </Navigation>
    </>
  );
};

export default SideBar;
