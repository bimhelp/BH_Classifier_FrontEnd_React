import React, { useState } from "react";
import { Button } from "../Button/Button";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { MdDelete } from "react-icons/md";
import {
  Card,
  Code,
  CompanyName,
  // MenuWrapper,
  CompanyAttribute,
  Menu,
} from "./CompanyCard.styled";
import { BiSolidBusiness } from "react-icons/bi";
import { Modal } from "../Modal/Modal";
import { formatDate, timeDifference } from "../../services";
import AddCompanyForm from "../AddCompanyForm/AddCompanyForm";
import { toast } from "react-toastify";
// import CompanyMenu from "../CompanyMenu/CompanyMenu";

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
        <Menu>  <Button
            icon={MdDelete}
            visibility="visible"
            variant="neutral"
            tooltip="Видалити компанію"
            onClick={() => handleDelete(_id)}
            role="warning"
          >Видалити компанію</Button>
            <CopyToClipboard text={_id}
            onCopy={()=> toast.info(`Id компанії ${_id} скопійовано в буфер обміну`)}>
            <Button>Копіювати id компанії</Button>
            </CopyToClipboard>
            <Button>Керувати співробітниками</Button>
        </Menu>
        </Modal>
      )}
    </>
  );
};

export default CompanyCard;
