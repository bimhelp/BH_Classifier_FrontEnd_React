import React, { useState, useEffect, useContext } from "react";
import { authContext as context } from "../../context/authContext";
import { toast } from "react-toastify";
import { IconButton } from "../Button/Button";
import { IoIosCopy } from "react-icons/io";
import { hiLight } from "../../services";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ItemMenu from "../ItemMenu/ItemMenu";
import { getMaterialTree } from "../../services";

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
  Chain,
  ChainLink,
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
    owner,
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
  submit,
}) => {
  const [level, setLevel] = useState(null);
  const [addFormVisible, setAddFormVisible] = useState(false);
  const [editFormVisible, setEditFormVisible] = useState(false);
  const { role, userId } = useContext(context);
  const [tree, setTree] = useState([]);

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

  // Показати Дерево
  function showTree(id) {
    const controller = new AbortController();
    async function tree(id) {
      try {
        const response = await getMaterialTree(id, controller.signal);
        setTree(response.data);
      } catch (error) {
        toast.error("Не вдалось отримати дерево вкладеності");
      }
    }
    tree(id);
    return () => {
      controller.abort();
    };
  }

  return (
    <>
      <div>
        {tree.length > 0 && (
          <Chain>
            {tree.map((item) => (
              <li key={item._id} onClick={() => submit(item.DescriptionUA)}>
                <ChainLink level={item.ElementNestingLevel}>
                  {/* <CopyToClipboard
                    text={item.DescriptionUA}
                    onCopy={() =>
                      toast.info(
                        `${item.DescriptionUA} скопійовано в буфер омбіну`
                      )
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
                  </CopyToClipboard> */}
                  <p level={item.ElementNestingLevel}>{item.DescriptionUA}</p>
                </ChainLink>
              </li>
            ))}
          </Chain>
        )}
      </div>
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
            <CategoryCode origin={Origin?.toString()}>{Code}</CategoryCode>
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
          {role === "admin" || userId === owner ? (
            <ItemMenu
              id={_id}
              ParentElementId={ParentElementId}
              toggleAddForm={toggleAddForm}
              toggleEditeForm={toggleEditeForm}
              handleDelete={handleDelete}
              showTree={showTree}
            />
          ) : null}
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
            // in={editFormVisible}
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
