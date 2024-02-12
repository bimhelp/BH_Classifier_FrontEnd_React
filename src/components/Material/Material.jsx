import React from "react";
import {
  MaterialWrapper,
  MaterialCode,
  Description,
  MaterialPrice,
  MaterialUnit,
  Extended,
  HilightDescription,
  CodeWrapper,
  DescriptionWrapper,
} from "./Material.styled";
import { toast } from "react-toastify";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { IconButton } from "../Button/Button";
import { hiLight } from "../../services";
import { IoIosCopy } from "react-icons/io";

const Material = ({
  material: { Code, DescriptionUA, Price, Unit },
  query,
}) => {
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
          ></IconButton>
        </CopyToClipboard>
        <MaterialCode>{Code}</MaterialCode>
      </CodeWrapper>

      <div>
        {query ? (
          <DescriptionWrapper>
            <HilightDescription>
              {hiLight(query, DescriptionUA)}
            </HilightDescription>
            <CopyToClipboard
              text={DescriptionUA}
              onCopy={() =>
                toast.info(`${DescriptionUA} скопійовано в буфер омбіну`)
              }
            >
              <IconButton
                icon={IoIosCopy}
                visibility="hide"
                position="absolute"
                variant="dark"
              ></IconButton>
            </CopyToClipboard>
          </DescriptionWrapper>
        ) : (
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
                position="absolute"
                variant="dark"
              ></IconButton>
            </CopyToClipboard>
            <Description>{DescriptionUA}</Description>
          </DescriptionWrapper>
        )}
        <Extended>
          {Price && <MaterialPrice> {Price} &#8372;</MaterialPrice>}
          {Unit && <MaterialUnit> {Unit} </MaterialUnit>}
        </Extended>
      </div>
    </MaterialWrapper>
  );
};

export default Material;
