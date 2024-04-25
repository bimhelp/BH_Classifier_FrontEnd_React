import React from "react";
import { Navigation } from "./SideBar.styled";
import { NavList } from "./SideBar.styled";

const SideBar = ({ children }) => {
  return (
    <>
      <Navigation>
        <NavList>{children}</NavList>
      </Navigation>
    </>
  );
};

export default SideBar;
