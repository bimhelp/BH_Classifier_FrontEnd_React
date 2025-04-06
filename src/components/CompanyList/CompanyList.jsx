import React from "react";
import Section from "../Section/Section";
import CompanyCard from "../CompanyCard/CompanyCard";

const CompanyList = ({ items }) => {
  return (
    <Section>
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            <CompanyCard company={item} />
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default CompanyList;
