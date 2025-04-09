import React from "react";
import CompanyCard from "../CompanyCard/CompanyCard";

const CompanyList = ({ items, handleDelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item._id}>
          <CompanyCard company={item} handleDelete={handleDelete} />
        </li>
      ))}
    </ul>
  );
};

export default CompanyList;
