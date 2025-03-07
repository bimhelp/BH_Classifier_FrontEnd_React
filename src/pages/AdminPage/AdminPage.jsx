import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import Section from "../../components/Section/Section";
import { Outlet } from "react-router-dom";
import { StyledNavLink } from "./AdminPage.styled";
const AdminPage = () => {
  return (
    <>
      <Section>
        <SideBar>
          <StyledNavLink to="users">Користувачі</StyledNavLink>
          {/* <StyledNavLink to="script">Update parentId</StyledNavLink> */}
          {/* <StyledNavLink to="drag">Drag and Drop</StyledNavLink> */}
        </SideBar>
        <Section>
          <Outlet />
        </Section>
      </Section>
    </>
  );
};

export default AdminPage;
