import React from "react";
import { Card, CompanyName } from "./CompanyCard.styled";

const CompanyCard = ({ company: { _id, companyName } }) => {
  return (
    <div>
      <Card>
        <CompanyName>{companyName}</CompanyName>
      </Card>
    </div>
  );
};

export default CompanyCard;
