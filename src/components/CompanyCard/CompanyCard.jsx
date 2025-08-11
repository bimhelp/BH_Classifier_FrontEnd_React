import React, { useState } from "react";
import CompanyMenu from "../CompanyMenu/CompanyMenu";
import AddMemberForm from "../AddMemberForm/AddMemberForm";
import {
  Card,
  Code,
  CompanyName,
  MenuWrapper,
  CompanyAttribute,
  Menu,
} from "./CompanyCard.styled";
import { BiSolidBusiness } from "react-icons/bi";
import { Modal } from "../Modal/Modal";
import { formatDate, timeDifference } from "../../services";
import AddCompanyForm from "../AddCompanyForm/AddCompanyForm";
import { toast } from "react-toastify";

const CompanyCard = ({
  company,
  company: {
    _id,
    companyName,
    edrpo,
    headEmail,
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
  const [editTeam, setEditTeam] = useState(false);
  function openEditForm() {
    setEditFormOpen(true);
  }
  function closeEditForm() {
    setEditFormOpen(false);
  }

  function openEditTeam() {
    console.log("open");
    setEditTeam(true);
  }
  function closeEditTeam() {
    setEditTeam(false);
  }
  return (
    <>
      <Card>
        <CompanyName>
          <BiSolidBusiness />
          <p>{companyName}</p>
        </CompanyName>
        <div>
          <Code>ЄДПРОУ {edrpo}</Code>
          <CompanyAttribute>
            <p>Керівник компанії:</p> <p>{headEmail}</p>
          </CompanyAttribute>
          <CompanyAttribute>
            <p>Кількість ліцензій:</p> <p>{licenseCount}</p>
          </CompanyAttribute>
          <CompanyAttribute>
            <p>Дата початку ліцензії:</p> <p>{formatedStartDate}</p>
          </CompanyAttribute>
          <CompanyAttribute>
            <p>Дата закінчення ліцензії:</p> <p>{formatedEndDate}</p>
          </CompanyAttribute>
          <CompanyAttribute>
            <p>Час до закінчення ліцензії:</p> <p>{remainingTime}</p>
          </CompanyAttribute>
        </div>
        <MenuWrapper>
          <CompanyMenu
            id={_id}
            edit={openEditForm}
            team={openEditTeam}
            handleDelete={handleDelete}
          ></CompanyMenu>
        </MenuWrapper>
      </Card>
      {editTeam && (
        <Modal onClose={closeEditTeam}>
          <AddMemberForm company={company}></AddMemberForm>
        </Modal>
      )}
      {editFormOpen && (
        <Modal onClose={closeEditForm}>
          <AddCompanyForm
            variant={"edit"}
            company={company}
            edit={edit}
            onClose={closeEditForm}
          />
        </Modal>
      )}
    </>
  );
};

export default CompanyCard;
