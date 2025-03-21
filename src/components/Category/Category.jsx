import React, { useState, useEffect, useContext } from "react";
import { authContext as context } from "../../context/authContext";
import { toast } from "react-toastify";
import { IconButton } from "../Button/Button";
import { IoIosCopy } from "react-icons/io";
import { hiLight } from "../../services";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ItemMenu from "../ItemMenu/ItemMenu";
import PriceDisplay from "../PriceDisplay/PriceDisplay";

import {
  CategoryWrapper,
  CategoryCode,
  CategoryDescription,
  HilightDescription,
  CodeWrapper,
  DescriptionWrapper,
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
    Price,
    Currency,
    Unit,
    ElementNestingLevel,
    Origin,
    owner,
    Category,
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
  showTree,
  tree = [],
  isdelete,
  byId,
}) => {
  const [level, setLevel] = useState(null);
  const [category, setCategory] = useState(false);
  const [addFormVisible, setAddFormVisible] = useState(false);
  const [editFormVisible, setEditFormVisible] = useState(false);
  const [treeVisible, setTreeVisible] = useState(null);
  const { role, userId } = useContext(context);

  useEffect(() => {
    // console.log("userId: ", userId);

    setLevel(ElementNestingLevel);
    setCategory(Category);
  }, [ElementNestingLevel, role, userId, Category]);

  // Відкриття-закриття форми додавання
  function toggleAddForm(id) {
    if (addFormVisible === id) {
      setAddFormVisible(null);
    } else {
      setAddFormVisible(id);
    }
  }
  // Відкриття-закриття дерева
  function toggleTree(id) {
    if (treeVisible === id) {
      setTreeVisible(null);
    } else {
      showTree(id);
      setTreeVisible(id);
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
      <div>
        {treeVisible && (
          <Chain>
            {tree.map((item) => (
              <li key={item._id} onClick={() => byId(item._id)}>
                <ChainLink level={item.ElementNestingLevel}>
                  <p level={item.ElementNestingLevel}>{item.DescriptionUA}</p>
                </ChainLink>
              </li>
            ))}
          </Chain>
        )}
      </div>

      <Card onClick={selectCategory} isdelete={isdelete}>
        <CategoryWrapper level={level}>
          <CodeWrapper level={level} category={category}>
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
            <CategoryCode origin={Origin?.toString()} owner={userId === owner}>
              {Code}
            </CategoryCode>
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
              <PriceDisplay
                price={Price}
                currency={Currency}
                role={role}
                userId={userId}
                owner={owner}
              />
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
              toggleTree={toggleTree}
              extended={true}
            />
          ) : (
            <ItemMenu
              id={_id}
              ParentElementId={ParentElementId}
              toggleAddForm={toggleAddForm}
              toggleEditeForm={toggleEditeForm}
              handleDelete={handleDelete}
              toggleTree={toggleTree}
              extended={false}
            />
          )}
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
