import React, { useState, useEffect } from "react";
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
  const [selectedCode, setSelectedCode] = useState(null);
  const [filteredNextLevel, setFilteredNextLevel] = useState([]);
  const [level, setLevel] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  // Запит по під категорії
  useEffect(() => {
    async function subCategory(selectedCode) {
      // console.log("selectedCode:", selectedCode);
      setIsLoading(true);
      // console.log("setIsLoading:  true");
      try {
        const response = await getSubCategory(selectedCode);
        // console.log("response: ", response);
        setSubCategories(response.data);
      } catch (error) {
        toast.error("Не вдалось завантажити підкагеторії", {
          autoClose: false,
        });
      } finally {
        // console.log("setIsLoading:  false");
        setIsLoading(false);
      }
    }

    if (selectedCode) {
      // console.log("get sub categorys");
      subCategory(selectedCode);
    }
  }, [selectedCode]);

  // Запит по матеріали
  useEffect(() => {
    async function getMaterial(selectedCode) {
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
        toast.error("Не вдалось завантажити матеріали", {
          autoClose: false,
        });
      } finally {
        // console.log("setIsLoading:  false");
        setIsLoading(false);
      }
    }

    if (selectedCode) {
      // console.log("get materials");
      getMaterial(selectedCode);
    }
  }, [selectedCode]);

  // Фільтруємо елементи для наступної підкатегорії
  useEffect(() => {
    if (subCategories.length > 0) {
      const currentLevelItems = filterNextLevelItems(
        subCategories,
        selectedCode
      );
      setFilteredNextLevel(currentLevelItems.slice(1));
    }
  }, [subCategories, selectedCode]);

  useEffect(() => {
    if (items.length > 0) {
      const cutedCpvCode = cutCpvCode(items[0].Code);
      setLevel(createLevel(cutedCpvCode));
    }
  }, [items, selectedCode]);

  // Функція формує cpv код і тоглить відкриття категорії
  const selectCategory = async (id, code) => {
    setSelectedCode(cutCpvCode(code));
    toggleCategory(id);
  };

  // Відкриття-закриття категорії
  function toggleCategory(id) {
    if (selectedId === id) {
      // console.log("selectedId: ", selectedId, "=", id);
      setSelectedId(null);
    } else {
      // console.log("selectedId: ", selectedId, "!=", id);
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
