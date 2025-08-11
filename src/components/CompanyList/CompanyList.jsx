import React from "react";
import CompanyCard from "../CompanyCard/CompanyCard";
import { ListItem, StyledList } from "./CompanyList.styled";

const CompanyList = ({ items, ...props }) => {
  return (
    <StyledList>
      {items.map((item) => (
        <ListItem key={item._id}>
          <CompanyCard company={item} {...props} />
        </ListItem>
      ))}
    </StyledList>
  );
};

export default CompanyList;
