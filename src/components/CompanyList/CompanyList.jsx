import React from "react";
import CompanyCard from "../CompanyCard/CompanyCard";

const CompanyList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item._id}>
          <CompanyCard company={item} />
        </li>
      ))}
    </ul>
  );
};

export default CompanyList;
