import React from "react";
import SideBar from "../../components/SideBar/SideBar";

const AdminPage = () => {
  return (
    <div>
      <SideBar>
        <p>Users</p>
        <p>Char</p>
        <p>Calendar</p>
      </SideBar>
      <div>Content</div>
    </div>
  );
};

export default AdminPage;
