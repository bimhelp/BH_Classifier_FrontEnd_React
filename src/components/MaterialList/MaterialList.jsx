import React, { useState, useEffect } from "react";
// functions
import {
  addMaterial,
  updateMaterial,
  getByParentId,
  removeMaterial,
} from "../../services";
// components
import Category from "../Category/Category";
import { List, Item } from "./MaterialList.styled";
import { toast } from "react-toastify";
import { BarLoader } from "react-spinners";
import { PulseLoader } from "react-spinners";
import { Button } from "../Button/Button";
import Confirm from "../Confirm/Confirm";
import AddMaterialForm from "../AddMaterialForm/AddMaterialForm";
import EditMaterialForm from "../EditMaterialForm/EditMaterialForm";
import { ConfirmButtons } from "./MaterialList.styled";

const MaterialList = ({ items, query, byId }) => {
  const [subCategories, setSubCategories] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [newMaterial, setNewMaterial] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [curentItems, setCurrentItems] = useState(items);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [delitingCandidate, setDelitingCandidate] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  // Якщо перейти по дереву, то сюди передаються вибрані елементи
  useEffect(() => {
    setCurrentItems(items);
  }, [items]);

  // Запит по під категорії
  useEffect(() => {
    const controller = new AbortController();
    async function subCategory(selectedId) {
      // console.log("get subcategory effect");
      setIsLoading(true);
      try {
        const response = await getByParentId(selectedId, controller.signal);
        setSubCategories(response.data);
      } catch (error) {
        toast.error("Не вдалось завантажити підкагеторії");
      } finally {
        setIsLoading(false);
      }
    }

    if (!selectedId) {
      return;
    }
    subCategory(selectedId);

    return () => {
      controller.abort();
    };
  }, [selectedId, newMaterial, setSubCategories]);

  const level = () => {
    if (items.length > 0) {
      return items[0].ElementNestingLevel;
    }
  };

  // Функція  тоглить відкриття категорії
  const selectCategory = async (event, id) => {
    if (event.target.tagName !== "path" && event.target.tagName !== "svg") {
      toggleCategory(id);
    }
  };

  // Відкриття-закриття категорії
  function toggleCategory(id) {
    if (selectedId === id) {
      setSelectedId(null);
    } else {
      setSelectedId(id);
    }
  }

  // Створення матеріалу
  function createMaterial(material) {
    const controller = new AbortController();
    async function createMaterial(newMaterial) {
      try {
        const response = await addMaterial(newMaterial, controller.signal);
        toast.success("Матеріал успішно створено");
        setNewMaterial(response.data);
      } catch (error) {
        toast.error("Не вдалось створити матеріал");
      }
    }
    createMaterial(material);
    return () => {
      controller.abort();
    };
  }

  // Редагування матеріалу
  function editMaterial(id, editedMaterial) {
    const controller = new AbortController();
    async function edit(id, editedMaterial) {
      const materialBeforeEdit = curentItems.filter((item) => item._id === id);
      // console.log(
      //   "materialBeforeEdit: ",
      //   materialBeforeEdit[0].ParentElementId
      // );

      try {
        const response = await updateMaterial(
          id,
          editedMaterial,
          controller.signal
        );
        // Видаляємо оновлений матеріал із списку, якщо в оновленого матеріалу ParentElementId відрізняється від ParentElementId до редагування
        // console.log(
        //   "response.data.ParentElementId: ",
        //   response.data.ParentElementId
        // );
        if (
          response.data.ParentElementId !==
          materialBeforeEdit[0].ParentElementId
        ) {
          setCurrentItems(
            curentItems.filter((item) => item._id !== response.data._id)
          );
        } else {
          // Замінюємо матеріал на оновлений
          setCurrentItems(
            curentItems.map((item) => {
              if (item._id === id) {
                return {
                  ...response.data,
                };
              }
              return item;
            })
          );
        }

        // console.log("response.data: ", response.data);
        toast.success("Матеріал успішно оновлено");
      } catch (error) {
        toast.error("Не вдалось оновити матеріал");
      }
    }
    edit(id, editedMaterial);
    return () => {
      controller.abort();
    };
  }

  // Відкриття меню підтвердження
  const confirmDelete = (id) => {
    setDelitingCandidate(curentItems.filter((item) => item._id === id)[0]);

    setConfirmOpen(id);
  };

  // Тогл меню підтвердження
  const toggleConfirm = () => {
    setConfirmOpen(!confirmOpen);
  };

  // Видалення матеріалу
  async function handleDelete(id) {
    try {
      setDeleteLoading(true);
      const result = await removeMaterial(id);
      if (result) {
        toast.info("Матеріал успішно видалений");
        setCurrentItems(
          curentItems.filter(
            (category) => category._id !== result.data.material._id
          )
        );
        setConfirmOpen(false);
      }
    } catch (error) {
      toast.error("Не вдалось видалити  матеріал");
    } finally {
      setDeleteLoading(false);
    }
  }

  return (
    <>
      <div>
        <List level={level()}>
          {curentItems.map((item) => (
            <Item key={item._id}>
              {/* якщо вибраний елемент */}
              {selectedId === item._id ? (
                <Category
                  element={item}
                  selectCategory={(event) => selectCategory(event, item._id)}
                  query={query}
                  isSelected={selectedId === item._id}
                  handleDelete={confirmDelete}
                  addForm={AddMaterialForm}
                  editForm={EditMaterialForm}
                  create={createMaterial}
                  edit={editMaterial}
                  isdelete={item._id === confirmOpen ? item._id : undefined}
                  variant="material"
                  byId={byId}
                >
                  {isLoading ? (
                    <BarLoader color="#125b56" width="100%" />
                  ) : (
                    <MaterialList
                      items={subCategories}
                      query={query}
                      byId={byId}
                    />
                  )}
                </Category>
              ) : (
                <Category
                  element={item}
                  selectCategory={(event) => selectCategory(event, item._id)}
                  query={query}
                  handleDelete={confirmDelete}
                  addForm={AddMaterialForm}
                  editForm={EditMaterialForm}
                  create={createMaterial}
                  edit={editMaterial}
                  isdelete={item._id === confirmOpen ? item._id : undefined}
                  variant="material"
                  byId={byId}
                ></Category>
              )}
            </Item>
          ))}
        </List>
      </div>
      {confirmOpen && (
        <Confirm
          onClose={toggleConfirm}
          title="Ви точно хочете видалити? "
          element={delitingCandidate.DescriptionUA}
        >
          <ConfirmButtons>
            <Button onClick={() => handleDelete(confirmOpen)} role="warning">
              Видалити
              {deleteLoading && <PulseLoader color="#000000" size={5} />}
            </Button>
            <Button onClick={toggleConfirm}>Залишити</Button>
          </ConfirmButtons>
        </Confirm>
      )}
    </>
  );
};

export default MaterialList;
