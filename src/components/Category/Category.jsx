import React, { useState, useEffect, useRef } from "react";
import { createLevel, cutCpvCode } from "../../services";
import { toast } from "react-toastify";
import { IconButton } from "../Button/Button";
import { IoIosCopy } from "react-icons/io";
import {
  CategoryWrapper,
  CategoryCode,
  CategoryDescription,
  HilightDescription,
  CodeWrapper,
  DescriptionWrapper,
  MaterialPrice,
  MaterialUnit,
  Extended,
  SubList,
} from "./Category.styled";
import { hiLight } from "../../services";
import { CopyToClipboard } from "react-copy-to-clipboard";

// Компонент рендерить розмітку категорії і вкладені списки
const Category = ({
  element: { Code, DescriptionUA, PriceUAH, Unit },
  selectCategory,
  children,
  query,
  isSelected,
}) => {
  const [level, setLevel] = useState(null);

  useEffect(() => {
    const cutedCpvCode = cutCpvCode(Code);
    setLevel(createLevel(cutedCpvCode));
  }, [Code]);

  function handleClick(event) {
    selectCategory(event);
  }

  return (
    <>
      <CategoryWrapper level={level} onClick={handleClick}>
        <CodeWrapper level={level}>
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
          <CategoryCode>{Code}</CategoryCode>
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
                  tooltip="Копіювати"
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
                  tooltip="Копіювати"
                ></IconButton>
              </CopyToClipboard>
              <CategoryDescription>{DescriptionUA}</CategoryDescription>
            </DescriptionWrapper>
          )}
          <Extended>
            {Unit && <MaterialUnit>Одиниця виміру: {Unit} </MaterialUnit>}
            {PriceUAH && (
              <MaterialPrice>Ціна: {PriceUAH} &#8372;</MaterialPrice>
            )}
          </Extended>
        </div>
      </CategoryWrapper>
      {isSelected && <SubList>{children}</SubList>}
    </>
  );
};

export default Category;

// className={`${css.categoryCode} ${css[level]}`}
