import React, { useState, useEffect, useMemo } from "react";

// functions
import { getSubCategory, searchMaterials } from "../../services";
import { cutCpvCode, filterNextLevelItems, createLevel } from "../../services";
// components
import Category from "../Category/Category";
import MaterialList from "../MaterialList/MaterialList";
import { List, Item } from "./CategoryList.styled";
import Loader from "../Loader/Loader";
import { toast } from "react-toastify";

const CategoryList = ({ items, query }) => {
  const [subCategories, setSubCategories] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedCode, setSelectedCode] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  // const [scrollPosition, setScrollPosition] = useState(0);

  // Запит по під категорії
  useEffect(() => {
    const controller = new AbortController();
    async function subCategory(selectedCode) {
      console.log("get subcategory effect");
      setIsLoading(true);
      try {
        const response = await getSubCategory(selectedCode, controller.signal);
        setSubCategories(response.data);
      } catch (error) {
        toast.error("Не вдалось завантажити підкагеторії");
      } finally {
        setIsLoading(false);
      }
    }

    if (selectedCode.length > 0 && selectedCode.length < 5) {
      subCategory(selectedCode);
    }

    return () => {
      controller.abort();
    };
  }, [selectedCode]);

  // Запит по матеріали
  useEffect(() => {
    async function getMaterial(selectedCode) {
      console.log("effect material");
      setIsLoading(true);
      try {
        const response = await searchMaterials(selectedCode);
        // console.log("materials", response.data);

        if (response.data.length < 1) {
          return;
        } else {
          setMaterials(response.data.slice(1));
        }
      } catch (error) {
        toast.error("Не вдалось завантажити матеріали");
      } finally {
        // console.log("setIsLoading:  false");
        setIsLoading(false);
      }
    }

    if (selectedCode.length >= 5) {
      getMaterial(selectedCode);
    }
  }, [selectedCode]);

  const filteredNextLevel = useMemo(() => {
    if (subCategories.length > 0) {
      console.log("memo filteredNextLevel");
      const currentLevelItems = filterNextLevelItems(
        subCategories,
        selectedCode
      );
      return currentLevelItems.slice(1);
    }
    return [];
  }, [subCategories, selectedCode]);

  const level = useMemo(() => {
    if (items.length > 0) {
      // console.log("memo level");
      const cutedCpvCode = cutCpvCode(items[0].Code);
      return createLevel(cutedCpvCode);
    }
    return null;
  }, [items]);

  // Функція формує cpv код і тоглить відкриття категорії
  const selectCategory = async (id, code) => {
    // console.log("handle select category");
    setSelectedCode(cutCpvCode(code));
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
      {isLoading ? (
        <Loader />
      ) : (
        <List level={level}>
          {items.map((item) => (
            <Item key={item._id}>
              {/* якщо вибраний елемент */}
              {selectedId === item._id ? (
                <Category
                  element={item}
                  selectCategory={() => selectCategory(item._id, item.Code)}
                  query={query}
                >
                  {/* якщо код довший то це матеріали */}
                  {selectedCode.length > 4 ? (
                    <MaterialList materials={materials} query={query} />
                  ) : (
                    <CategoryList items={filteredNextLevel} query={query} />
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
      )}
    </>
  );
};

export default CategoryList;
