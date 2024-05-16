import React, { useState, useEffect, useContext } from "react";
import { authContext as context } from "../../context/authContext";
import { createLevel } from "../../services";
import { toast } from "react-toastify";
import { IconButton } from "../Button/Button";
import { IoIosCopy } from "react-icons/io";
import { MdModeEditOutline } from "react-icons/md";
import { FaSquarePlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { hiLight } from "../../services";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { TransitionGroup, CSSTransition } from "react-transition-group";
// import { IoCheckbox } from "react-icons/io5";
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
  Animation,
} from "./Category.styled";

// Компонент рендерить розмітку категорії і вкладені списки
const Category = ({
  element,
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
  handleDelete,
  addForm: AddForm,
  create,
  editForm: EditForm,
  edit,
}) => {
  const [level, setLevel] = useState(null);
  const [addFormVisible, setAddFormVisible] = useState(false);
  const [editFormVisible, setEditFormVisible] = useState(false);
  const { role } = useContext(context);

  useEffect(() => {
    setLevel(createLevel(ElementNestingLevel));
  }, [ElementNestingLevel]);

  // Відкриття-закриття форми додавання
  function toggleAddForm(id) {
    if (addFormVisible === id) {
      setAddFormVisible(null);
    } else {
      setAddFormVisible(id);
    }
  }
  // Відкриття-закриття форми редагування
  function toggleEditeForm(id) {
    if (editFormVisible === id) {
      setEditFormVisible(null);
    } else {
      setEditFormVisible(id);
    }
  }

  // Закриття форми додавання
  function closeAddForm() {
    setAddFormVisible(null);
  }
  // Закриття форми редагування
  function closeEditForm() {
    setEditFormVisible(null);
  }

  return (
    <>
      <Card onClick={selectCategory}>
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
              />
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
                  />
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
              {Unit && Unit !== "category" && (
                <MaterialUnit>Одиниця виміру: {Unit}</MaterialUnit>
              )}
              {/* {Unit && Unit === "category" && <IoCheckbox />} */}
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
              onClick={() => toggleAddForm(_id)}
            ></IconButton>
            <IconButton
              icon={MdModeEditOutline}
              visibility="visible"
              variant="neutral"
              tooltip="Редагувати"
              onClick={() => toggleEditeForm(_id)}
            ></IconButton>
            <IconButton
              icon={MdDelete}
              visibility="visible"
              variant="neutral"
              tooltip="Видалити"
              onClick={() => handleDelete(_id)}
            ></IconButton>
          </ItemMenu>
        )}
      </Card>

      <TransitionGroup>
        {addFormVisible && (
          <CSSTransition
            in={addFormVisible}
            classNames="fade"
            timeout={300}
            unmountOnExit
          >
            <Animation>
              <AddForm
                id={_id}
                Code={Code}
                ParentElementId={ParentElementId}
                onClose={() => closeAddForm()}
                create={create}
                element={element}
              />
            </Animation>
          </CSSTransition>
        )}

        {editFormVisible && (
          <CSSTransition
            in={editFormVisible}
            classNames="fade"
            timeout={300}
            unmountOnExit
          >
            <Animation>
              <EditForm
                id={_id}
                Code={Code}
                ParentElementId={ParentElementId}
                onClose={() => closeEditForm()}
                edit={edit}
                element={element}
              />
            </Animation>
          </CSSTransition>
        )}

        {isSelected && (
          <CSSTransition
            in={children}
            classNames="fade"
            timeout={300}
            unmountOnExit
          >
            <Animation>
              <SubList>{children}</SubList>
            </Animation>
          </CSSTransition>
        )}
      </TransitionGroup>
    </>
  );
};

export default Category;
