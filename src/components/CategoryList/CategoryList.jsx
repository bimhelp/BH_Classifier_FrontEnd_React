import React, { useState, useEffect } from "react";
import css from "./CategoryList.module.css";
import Category from "../Category/Category";
import { getSubCategory } from "../../services/api";

const CategoryList = ({ items }) => {
  const [subCategories, setSubCategories] = useState([]);

  const [selectedId, setSelectedId] = useState(null);
  const [selectedCode, setSelectedCode] = useState(null);
  const [filteredNextLevel, setFilteredNextLevel] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("selectedCode:", selectedCode);

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

  // Функція фільтрує
  function filterNextLevelItems(subCategories, selectedCode) {
    if (subCategories.length > 0) {
      const regex = new RegExp(`^${selectedCode}`);
      const currentLevelItems = subCategories.filter(
        (item) => item.Code.search(regex) !== -1
      );
      console.log("currentLevelItems: ", currentLevelItems);

      setFilteredNextLevel(currentLevelItems);
    }
  }

  useEffect(() => {
    filterNextLevelItems(subCategories, selectedCode);
  }, [selectedCode, subCategories]);

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
      <ul>
        {items.map((item) => (
          <li key={item._id} className={css.categoryWrapper}>
            {selectedId === item._id ? (
              <Category
                element={item}
                selectCategory={() => selectCategory(item._id, item.Code)}
              >
                <CategoryList items={filteredNextLevel} />
                <p>Children</p>
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
    </>
  );
};

export default CategoryList;
