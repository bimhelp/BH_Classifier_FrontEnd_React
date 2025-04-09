import React from "react";
import { Card, CompanyName, MenuWrapper } from "./CompanyCard.styled";
import { formatDate, timeDifference } from "../../services";
import CompanyMenu from "../CompanyMenu/CompanyMenu";

const CompanyCard = ({
  company: { _id, companyName, edrpo, licenseStartTime, licenseEndTime },
  handleDelete,
}) => {
  const formatedStartDate = formatDate(licenseStartTime);
  const formatedEndDate = formatDate(licenseEndTime);
  const remainingTime = timeDifference(licenseStartTime, licenseEndTime);
  return (
    <div>
      <Card>
        <div>
          <CompanyName>{companyName}</CompanyName>
          <p>ЄДПРОУ {edrpo}</p>
          <p>Дата початку ліцензії: {formatedStartDate}</p>
          <p>Дата закінчення ліцензії: {formatedEndDate}</p>
          <p>Час до закінчення ліцензії: {remainingTime}</p>
        </div>
        <MenuWrapper>
          <CompanyMenu id={_id} handleDelete={handleDelete} />
        </MenuWrapper>
      </Card>
    </div>
  );
};

export default CompanyCard;
