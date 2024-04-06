import React from "react";
import Users from "../../components/Users/Users";
import SideBar from "../../components/SideBar/SideBar";

const AdminPage = () => {
  return (
    <div>
      <SideBar></SideBar>
      <div>
        <Users />
      </div>
    </div>
  );
};

export default AdminPage;
