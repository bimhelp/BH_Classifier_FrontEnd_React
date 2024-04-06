import React from "react";
import Users from "../../components/Users/Users";
import SideBar from "../../components/SideBar/SideBar";
import Section from "../../components/Section/Section";
const AdminPage = () => {
  return (
    <Section>
      <SideBar></SideBar>
      <div>
        <Users />
      </div>
    </Section>
  );
};

export default AdminPage;
