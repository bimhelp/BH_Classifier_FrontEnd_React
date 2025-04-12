import React, { useState, useEffect, useMemo } from "react";
// functions
import { getServiceByParentId } from "../../services";
import { addService } from "../../services";
import { updateService } from "../../services";
import { removeService } from "../../services";

// components
import Category from "../Category/Category";
import { List, Item } from "./ServiceList.styled";
import { BarLoader } from "react-spinners";
import { PulseLoader } from "react-spinners";
import { toast } from "react-toastify";
import AddServiceForm from "../AddServiceForm/AddServiceForm";
import EditServiceForm from "../EditServiceForm/EditServiceForm";
import Confirm from "../Confirm/Confirm";
import { Button } from "../Button/Button";

const ServiceList = ({ items, query, byId }) => {
  const [subCategories, setSubCategories] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [newService, setNewService] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [curentItems, setCurrentItems] = useState(items);
  const [confirmOpen, setConfirmOpen] = useState(false);
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
        const response = await getServiceByParentId(
          selectedId,
          controller.signal
        );
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
  }, [selectedId, newService, setSubCategories]);

  const level = useMemo(() => {
    if (items.length > 0) {
      return items[0].ElementNestingLevel;
    }
    return null;
  }, [items]);

  // Функція формує cpv код і тоглить відкриття категорії
  const selectCategory = async (event, id) => {
    if (event.target.tagName !== "path" && event.target.tagName !== "svg") {
      toggleCategory(id);
    }
  };

  // Відкриття-закриття категорії
  function toggleCategory(id) {
    if (selectedId === id) {
      // console.log("set null");
      setSelectedId(null);
    } else {
      // console.log("set", id);
      setSelectedId(id);
    }
  }

  // Створення сервісу
  function createService(service) {
    const controller = new AbortController();
    async function createService(newService) {
      try {
        const response = await addService(newService, controller.signal);

        console.log("response.data: ", response.data);
        toast.success("Послугу успішно створено");
        setNewService(response.data);
      } catch (error) {
        toast.error("Не вдалось створити послугу");
      }
    }
    createService(service);
    return () => {
      controller.abort();
    };
  }

  // Редагування сервісу
  function editService(id, editedService) {
    const controller = new AbortController();
    async function edit(id, editedService) {
      try {
        const response = await updateService(
          id,
          editedService,
          controller.signal
        );
        // Видаляємо оновлений сервіс із списку, якщо в оновленого сервісу ParentElementId відрізняється від елементів у поточному списку
        if (response.data.ParentElementId !== curentItems[0].ParentElementId) {
          setCurrentItems(
            curentItems.filter((item) => item._id !== response.data._id)
          );
        } else {
          // Замінюємо сервіс на оновлений
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
        toast.success("Послугу успішно оновлено");
      } catch (error) {
        toast.error("Не вдалось оновити послугу");
      }
    }
    edit(id, editedService);
    return () => {
      controller.abort();
    };
  }
  // Відкриття меню підтвердження
  const confirmDelete = (id) => {
    setConfirmOpen(id);
  };

  // Тогл меню підтвердження
  const toggleConfirm = () => {
    setConfirmOpen(!confirmOpen);
  };

  // Видалення сервісу
  async function handleDelete(id) {
    try {
      setDeleteLoading(true);
      const result = await removeService(id);
      if (result) {
        toast.info("Послуга успішно видалена");
        setCurrentItems(
          curentItems.filter(
            (category) => category._id !== result.data.service._id
          )
        );
        setConfirmOpen(false);
      }
    } catch (error) {
      toast.error("Не вдалось видалити  послугу");
    } finally {
      setDeleteLoading(false);
    }
  }

  return (
    <>
      <List level={level}>
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
                addForm={AddServiceForm}
                editForm={EditServiceForm}
                create={createService}
                edit={editService}
                isdelete={item._id === confirmOpen ? item._id : undefined}
                variant="service"
                byId={byId}
              >
                {isLoading ? (
                  <BarLoader color="#125b56" width="100%" />
                ) : (
                  <ServiceList
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
                handleDelete={confirmDelete}
                query={query}
                addForm={AddServiceForm}
                editForm={EditServiceForm}
                create={createService}
                edit={editService}
                isdelete={item._id === confirmOpen ? item._id : undefined}
                variant="service"
                byId={byId}
              ></Category>
            )}
          </Item>
        ))}
      </List>
      {confirmOpen && (
        <Confirm onClose={toggleConfirm} title="Ви точно хочете видалити?">
          <>
            <Button onClick={() => handleDelete(confirmOpen)} role="warning">
              Delete
              {deleteLoading && <PulseLoader color="#000000" size={5} />}
            </Button>
            <Button onClick={toggleConfirm}>Cancel</Button>
          </>
        </Confirm>
      )}
    </>
  );
};
export default ServiceList;
