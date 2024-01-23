import React, { useState, useEffect } from "react";

import css from "./CategoryList.module.css";
import Category from "../Category/Category";
import MaterialList from "../MaterialList/MaterialList";
import { getSubCategory, searchMaterials } from "../../services/api";

const CategoryList = ({ items }) => {
  const [subCategories, setSubCategories] = useState([]);
  const [materials, setMaterials] = useState([]);

  const [selectedId, setSelectedId] = useState(null);
  const [selectedCode, setSelectedCode] = useState(null);
  const [filteredNextLevel, setFilteredNextLevel] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Функція створення змінної (кількості нулів) для регулярного виразу
  function createQueryString(code) {
    // Задає початковий рядок
    // 00000000-0
    const query = ["0", "0", "0", "0", "0", "0", "0", "0", "-", "."];

    // Заміна елементів у масиві початкового рядка заданим числом
    // eslint-disable-next-line no-unused-vars
    const replacedCode = query.splice(0, code.length, ...code);
    // console.log("replacedCode: ", query);

    // eslint-disable-next-line no-unused-vars
    const replacedZero = query.splice(code.length, 1, ".");
    // console.log("replacedDot: ", query);

    const queryString = query.join("");
    return queryString;
  }

  // Запит по під категорії
  useEffect(() => {
    // console.log("selectedCode:", selectedCode);

    async function subCategory(selectedCode) {
      setIsLoading(true);
      try {
        const response = await getSubCategory(selectedCode);
        // console.log("response: ", response);
        setSubCategories(response.data);
      } catch (error) {
        setError("error");
      } finally {
        setIsLoading(false);
      }
    }

    if (selectedCode) {
      subCategory(selectedCode);
    }
  }, [selectedCode]);

  // Запит по матеріали
  useEffect(() => {
    async function getMaterial(selectedCode) {
      try {
        const response = await searchMaterials(selectedCode);
        // console.log(response.data.slice(1));
        setMaterials(response.data.slice(1));
      } catch (error) {
        // setError(error);
      } finally {
        // setIsLoading(false);
      }
    }
    getMaterial(selectedCode);
  }, [selectedCode]);

  // Функція фільтрує елементи для наступної підкатегорії
  useEffect(() => {
    function filterNextLevelItems(subCategories, selectedCode) {
      if (subCategories.length > 0) {
        const querry = createQueryString(selectedCode);
        // console.log("querry: ", querry);

        const regex = new RegExp(`^${querry}`);
        // console.log("regex: ", regex);

        const currentLevelItems = subCategories.filter(
          (item) => item.Code.search(regex) !== -1
        );
        // console.log("currentLevelItems: ", currentLevelItems);

        setFilteredNextLevel(currentLevelItems.slice(1));
      }
    }

    filterNextLevelItems(subCategories, selectedCode);
  }, [subCategories, selectedCode]);

  // Функція отримує код вибраного елемента обрізає нулі і записує в стейт
  const selectCategory = async (id, code) => {
    const cpvCode = [];

    for (let index = 0; index < code.length; index++) {
      if (code[index] === "0" && index !== 0) {
        break;
      } else {
        cpvCode.push(code[index]);
      }
    }

    const stringCpvCode = cpvCode.join("");
    // console.log("stringCpvCode: ", stringCpvCode);
    setSelectedCode(stringCpvCode);

    // Відкриття-закриття категорії
    if (selectedId === id) {
      // console.log("selectedId: ", selectedId, "=", id);
      setSelectedId(null);
    } else {
      // console.log("selectedId: ", selectedId, "!=", id);
      setSelectedId(id);
    }
  };

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className={css.categoryList}>
          {items.map((item) => (
            <li key={item._id} className={css.categoryItem}>
              {selectedId === item._id ? (
                <Category
                  element={item}
                  selectCategory={() => selectCategory(item._id, item.Code)}
                >
                  {selectedCode.length > 4 ? (
                    <MaterialList materials={materials} />
                  ) : (
                    <CategoryList items={filteredNextLevel} />
                  )}
                </Category>
              ) : (
                <Category
                  element={item}
                  selectCategory={() => selectCategory(item._id, item.Code)}
                ></Category>
              )}
            </li>
          ))}
        </ul>
      )}
      {error && <p>{error}</p>}
    </>
  );
};

export default CategoryList;
