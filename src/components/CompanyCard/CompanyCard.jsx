import React from "react";
import {
  Card,
  Code,
  CompanyName,
  // MenuWrapper,
  Time,
} from "./CompanyCard.styled";
import { BiSolidBusiness } from "react-icons/bi";

import { formatDate, timeDifference } from "../../services";
// import CompanyMenu from "../CompanyMenu/CompanyMenu";

const CompanyCard = ({
  company: {
    _id,
    companyName,
    edrpo,
    licenseStartTime,
    licenseEndTime,
    licenseCount,
  },
  handleDelete,
}) => {
  const formatedStartDate = formatDate(licenseStartTime);
  const formatedEndDate = formatDate(licenseEndTime);
  const remainingTime = timeDifference(licenseStartTime, licenseEndTime);
  return (
    <>
      <Card>
        <CompanyName>
          <BiSolidBusiness />
          <p>{companyName}</p>
        </CompanyName>
        <div>
          <Code>ЄДПРОУ {edrpo}</Code>
          <Time>
            <p>Кількість ліцензій:</p> <p>{licenseCount}</p>
          </Time>
          <Time>
            <p>Дата початку ліцензії:</p> <p>{formatedStartDate}</p>
          </Time>
          <Time>
            <p>Дата закінчення ліцензії:</p> <p>{formatedEndDate}</p>
          </Time>
          <Time>
            <p>Час до закінчення ліцензії:</p> <p>{remainingTime}</p>
          </Time>
        </div>
        {/* <MenuWrapper>
          <CompanyMenu id={_id} handleDelete={handleDelete} />
        </MenuWrapper> */}
      </Card>
    </>
  );
};

export default CompanyCard;
