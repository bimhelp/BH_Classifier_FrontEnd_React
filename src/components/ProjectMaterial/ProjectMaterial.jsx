import React from "react";
import {
  MaterialWrapper,
  MaterialCode,
  Description,
  MaterialPrice,
  UserPrice,
  MaterialUnit,
  Extended,
  // HilightDescription,
  CodeWrapper,
  MaterialMenu,
  DescriptionWrapper,
} from "./ProjectMaterial.styled";
import { toast } from "react-toastify";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { IconButton } from "../Button/Button";
// import { hiLight } from "../../services";
import { IoIosCopy } from "react-icons/io";
import { RiFileEditFill } from "react-icons/ri";

const ProjectMaterial = ({
  material: { Code, DescriptionUA, Price, Unit },
  query,
  userPrice,
}) => {
  function editPrice() {
    console.log("edit material");
  }

  return (
    <MaterialWrapper>
      <CodeWrapper>
        <CopyToClipboard
          text={Code}
          onCopy={() => toast.info(`Код ${Code} скопійовано в буфер омбіну`)}
        >
          <IconButton
            icon={IoIosCopy}
            visibility="hide"
            position="absolute"
            variant="light"
            tooltip="Копіювати"
          ></IconButton>
        </CopyToClipboard>
        <MaterialCode>{Code}</MaterialCode>
      </CodeWrapper>
      <DescriptionWrapper>
        <Description>{DescriptionUA}</Description>

        <Extended>
          {Price && <MaterialPrice> {Price} &#8372;</MaterialPrice>}
          {userPrice && <UserPrice> {userPrice} &#8372;</UserPrice>}

          {Unit && <MaterialUnit> {Unit} </MaterialUnit>}
        </Extended>
        <MaterialMenu>
          <CopyToClipboard
            text={DescriptionUA}
            onCopy={() =>
              toast.info(`${DescriptionUA} скопійовано в буфер омбіну`)
            }
          >
            <IconButton
              icon={IoIosCopy}
              visibility="visible"
              position="normal"
              variant="dark"
              tooltip="Копіювати"
            ></IconButton>
          </CopyToClipboard>
          <IconButton
            icon={RiFileEditFill}
            onClick={editPrice}
            variant="dark"
            tooltip="Редагувати ціну"
          ></IconButton>
        </MaterialMenu>
      </DescriptionWrapper>
    </MaterialWrapper>
  );
};

export default ProjectMaterial;
