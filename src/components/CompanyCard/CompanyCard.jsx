import React, { useState } from "react";
import { IconButton } from "../Button/Button";
import { MdDelete } from "react-icons/md";
import {
  Card,
  Code,
  CompanyName,
  // MenuWrapper,
  Time,
} from "./CompanyCard.styled";
import { BiSolidBusiness } from "react-icons/bi";
import { Modal } from "../Modal/Modal";
import { formatDate, timeDifference } from "../../services";
import AddCompanyForm from "../AddCompanyForm/AddCompanyForm";
// import CompanyMenu from "../CompanyMenu/CompanyMenu";

const CompanyCard = ({
  company,
  company: {
    _id,
    companyName,
    edrpo,
    licenseStartTime,
    licenseEndTime,
    licenseCount,
  },
  handleDelete,
  edit,
}) => {
  const formatedStartDate = formatDate(licenseStartTime);
  const formatedEndDate = formatDate(licenseEndTime);
  const remainingTime = timeDifference(licenseStartTime, licenseEndTime);
  const [editFormOpen, setEditFormOpen] = useState(false);

  function openEditForm() {
    setEditFormOpen(true);
  }
  function closeEditForm() {
    setEditFormOpen(false);
  }
  return (
    <>
      <Card onClick={() => openEditForm(_id)}>
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
      {editFormOpen && (
        <Modal onClose={closeEditForm}>
          <AddCompanyForm
            variant={"edit"}
            company={company}
            edit={edit}
            onClose={closeEditForm}
          />
          <IconButton
            icon={MdDelete}
            visibility="visible"
            variant="neutral"
            tooltip="Видалити компанію"
            onClick={() => handleDelete(_id)}
          ></IconButton>
        </Modal>
      )}
    </>
  );
};

export default CompanyCard;
