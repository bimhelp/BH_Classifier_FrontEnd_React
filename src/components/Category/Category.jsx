import React, { useState, useEffect, useContext } from "react";
import { authContext as context } from "../../context/authContext";
import { createLevel } from "../../services";
import { toast } from "react-toastify";
import { IconButton } from "../Button/Button";
import { IoIosCopy } from "react-icons/io";
import { FaSquarePlus } from "react-icons/fa6";
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
  Card,
} from "./Category.styled";
import { hiLight } from "../../services";
import { CopyToClipboard } from "react-copy-to-clipboard";

// Компонент рендерить розмітку категорії і вкладені списки
const Category = ({
  element: { Code, DescriptionUA, PriceUAH, Unit, ElementNestingLevel },
  selectCategory,
  children,
  query,
  isSelected,
}) => {
  const [level, setLevel] = useState(null);
  const { role } = useContext(context);

  useEffect(() => {
    setLevel(createLevel(ElementNestingLevel));
  }, [ElementNestingLevel]);

  function handleClick(event) {
    selectCategory(event);
  }

  return (
    <>
      <Card onClick={handleClick}>
        <CategoryWrapper level={level}>
          <CodeWrapper level={level}>
            <CopyToClipboard
              text={Code}
              onCopy={() =>
                toast.info(`Код ${Code} скопійовано в буфер омбіну`)
              }
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

          <DescriptionWrapper>
            {query ? (
              <div>
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
              </div>
            ) : (
              <div>
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
              </div>
            )}
            <Extended>
              {Unit && <MaterialUnit>Одиниця виміру: {Unit} </MaterialUnit>}
              {PriceUAH && (
                <MaterialPrice>Ціна: {PriceUAH} &#8372;</MaterialPrice>
              )}
            </Extended>
          </DescriptionWrapper>
        </CategoryWrapper>
        {role === "admin" && (
          <IconButton
            icon={FaSquarePlus}
            visibility="visible"
            variant="dark"
            tooltip="Додати"
          ></IconButton>
        )}
      </Card>
      {isSelected && <SubList>{children}</SubList>}
    </>
  );
};

export default Category;
