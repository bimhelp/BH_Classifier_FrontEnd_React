import React, { useState, useEffect, useMemo } from "react";

// functions
import { getServiceByParentCode } from "../../services";
import { createLevel } from "../../services";
// components
import Category from "../Category/Category";
import { List, Item } from "./ServiceList.styled";
import Loader from "../Loader/Loader";
import { toast } from "react-toastify";

const ServiceList = ({ items, query }) => {
  const [subCategories, setSubCategories] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedCode, setSelectedCode] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  // Запит по під категорії
  useEffect(() => {
    const controller = new AbortController();
    async function subCategory(selectedCode) {
      // console.log("get subcategory effect");
      setIsLoading(true);
      try {
        const response = await getServiceByParentCode(
          selectedCode,
          controller.signal
        );
        // console.log("response: ", response.data);

        setSubCategories(response.data);
      } catch (error) {
        toast.error("Не вдалось завантажити підкагеторії");
      } finally {
        setIsLoading(false);
      }
    }

    if (selectedCode === "") {
      return;
    }
    subCategory(selectedCode);

    return () => {
      controller.abort();
    };
  }, [selectedCode]);

  const level = useMemo(() => {
    if (items.length > 0) {
      return createLevel(items[0].ElementNestingLevel);
    }
    return null;
  }, [items]);

  // Функція формує cpv код і тоглить відкриття категорії
  const selectCategory = async (id, code) => {
    setSelectedCode(code);
    toggleCategory(id);
  };

  // Відкриття-закриття категорії
  function toggleCategory(id) {
    if (selectedId === id) {
      setSelectedId(null);
    } else {
      setSelectedId(id);
    }
  }

  return (
    <>
      <List level={level}>
        {items.map((item) => (
          <Item key={item._id}>
            {/* якщо вибраний елемент */}
            {selectedId === item._id ? (
              <Category
                element={item}
                selectCategory={() => selectCategory(item._id, item.Code)}
                query={query}
                isSelected={selectedId === item._id}
              >
                {isLoading ? (
                  <Loader />
                ) : (
                  <ServiceList items={subCategories} query={query} />
                )}
              </Category>
            ) : (
              <Category
                element={item}
                selectCategory={() => selectCategory(item._id, item.Code)}
                query={query}
              ></Category>
            )}
          </Item>
        ))}
      </List>
    </>
  );
};

export default ServiceList;
