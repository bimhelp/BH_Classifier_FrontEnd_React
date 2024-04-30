import React, { useState, useEffect, useContext } from "react";
import { authContext as context } from "../../context/authContext";
import { createLevel } from "../../services";
import { toast } from "react-toastify";
import { IconButton } from "../Button/Button";
import { IoIosCopy } from "react-icons/io";
import { MdModeEditOutline } from "react-icons/md";
import { FaSquarePlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import AddForm from "../AddForm/AddForm";
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
  ItemMenu,
} from "./Category.styled";
import { hiLight } from "../../services";
import { CopyToClipboard } from "react-copy-to-clipboard";

// Компонент рендерить розмітку категорії і вкладені списки
const Category = ({
  element: {
    _id,
    ParentElementId,
    Code,
    DescriptionUA,
    PriceUAH,
    Unit,
    ElementNestingLevel,
  },
  selectCategory,
  children,
  query,
  isSelected,
}) => {
  const [level, setLevel] = useState(null);
  const [addFormVisible, setAddFormVisible] = useState(false);
  const { role } = useContext(context);

  useEffect(() => {
    setLevel(createLevel(ElementNestingLevel));
  }, [ElementNestingLevel]);

  function handleClick(event) {
    selectCategory(event);
  }

  function addItem(event, id) {
    // console.log("event: ", event.currentTarget.id);

    toggleAddForm(id);
  }

  // Відкриття-закриття форми додавання
  function toggleAddForm(id) {
    if (addFormVisible === id) {
      setAddFormVisible(null);
    } else {
      setAddFormVisible(id);
    }
  }
  function closeForm() {
    setAddFormVisible(null);
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
          <ItemMenu>
            <IconButton
              id="add"
              icon={FaSquarePlus}
              visibility="visible"
              variant="neutral"
              tooltip="Додати"
              onClick={(event) => addItem(event, _id, Code, ParentElementId)}
            ></IconButton>
            <IconButton
              icon={MdModeEditOutline}
              visibility="visible"
              variant="neutral"
              tooltip="Редагувати"
            ></IconButton>
            <IconButton
              icon={MdDelete}
              visibility="visible"
              variant="neutral"
              tooltip="Видалити"
            ></IconButton>
          </ItemMenu>
        )}
      </Card>

      {addFormVisible && (
        <AddForm
          id={_id}
          Code={Code}
          ParentElementId={ParentElementId}
          onClose={() => closeForm()}
        ></AddForm>
      )}
      {isSelected && <SubList>{children}</SubList>}
    </>
  );
};

export default Category;
