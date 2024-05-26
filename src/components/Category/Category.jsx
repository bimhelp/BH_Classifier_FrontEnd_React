import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { IconButton } from "../Button/Button";
import { IoIosCopy } from "react-icons/io";
import { hiLight } from "../../services";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ItemMenu from "../ItemMenu/ItemMenu";
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
  MenuWrapper,
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
    Origin,
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
  isdelete,
}) => {
  const [level, setLevel] = useState(null);
  const [addFormVisible, setAddFormVisible] = useState(false);
  const [editFormVisible, setEditFormVisible] = useState(false);

  useEffect(() => {
    setLevel(ElementNestingLevel);
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
      <Card onClick={selectCategory} isdelete={isdelete}>
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
                left={0}
              />
            </CopyToClipboard>
            <CategoryCode origin={Origin.toString()}>{Code}</CategoryCode>
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
                    left={0}
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
              {PriceUAH && (
                <MaterialPrice>Ціна: {PriceUAH} &#8372;</MaterialPrice>
              )}
            </Extended>
          </DescriptionWrapper>
        </CategoryWrapper>

        <MenuWrapper>
          <ItemMenu
            id={_id}
            toggleAddForm={toggleAddForm}
            toggleEditeForm={toggleEditeForm}
            handleDelete={handleDelete}
          />
        </MenuWrapper>
      </Card>

      <TransitionGroup>
        {addFormVisible && (
          <CSSTransition classNames="fade" timeout={300} unmountOnExit>
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
          <CSSTransition classNames="fade" timeout={300} unmountOnExit>
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
