import React from "react";
import { Navigation } from "./SideBar.styled";

const SideBar = ({ children }) => {
  return (
    <asid>
      <Navigation>
        <ul>{children}</ul>
      </Navigation>
    </asid>
  );
};

export default SideBar;
