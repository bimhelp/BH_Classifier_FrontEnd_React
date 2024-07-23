import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import Section from "../../components/Section/Section";
import { Outlet } from "react-router-dom";
import { Layout, StyledNavLink } from "./AdminPage.styled";
const AdminPage = () => {
  return (
    <>
      <Layout>
        <SideBar>
          <StyledNavLink to="users">Users</StyledNavLink>
          <StyledNavLink to="script">Update parentId</StyledNavLink>
          <StyledNavLink to="drag">Drag and Drop</StyledNavLink>
        </SideBar>
        <Section>
          <Outlet />
        </Section>
      </Layout>
    </>
  );
};

export default AdminPage;
