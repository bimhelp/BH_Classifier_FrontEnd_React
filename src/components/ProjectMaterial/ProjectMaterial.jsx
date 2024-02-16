import React from "react";
import {
  MaterialWrapper,
  MaterialCode,
  Description,
  MaterialPrice,
  StyledUserPrice,
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
  material: {
    Code,
    DescriptionUA,
    Price = 0,
    UserPrice = 0,
    Consumption = 1,
    UserConsumption = 1,
    Unit = "",
  },
}) => {
  // console.log("material: ", material);
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
        <CopyToClipboard
          text={DescriptionUA}
          onCopy={() =>
            toast.info(`${DescriptionUA} скопійовано в буфер омбіну`)
          }
        >
          <IconButton
            icon={IoIosCopy}
            visibility="hide"
            position="normal"
            variant="dark"
            tooltip="Копіювати"
          ></IconButton>
        </CopyToClipboard>
        <Description>{DescriptionUA}</Description>

        <Extended>
          <MaterialPrice> {Price} &#8372;</MaterialPrice>
          {UserPrice && <StyledUserPrice> {UserPrice} &#8372;</StyledUserPrice>}
          <MaterialUnit> {Unit} </MaterialUnit>
          <MaterialUnit> {Consumption} </MaterialUnit>
          <MaterialUnit> {UserConsumption} </MaterialUnit>
        </Extended>
        <MaterialMenu>
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
