import React, { useEffect, useState } from "react";
import Category from "../Category/Category";
import Row from "../Row/Row";
import css from "./Table.module.css";
import { getCategory, getSubCategory } from "../../services/api";

const Table = () => {
  const [mainCategory, setMainCategory] = useState([]);
  const [firstLevel, setFirstLevel] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    // створюємо асинхронну функцію
    async function getAllCategory() {
      setIsLoading(true);
      try {
        const response = await getCategory();
        setMainCategory(response.data);
      } catch {
        setError("error");
      } finally {
        setIsLoading(false);
      }
    }
    // викликаємо функцію
    getAllCategory();
  }, []);

  // Сортування категорій по вкладеності
  function sortData(data) {
    const firstLevelItems = [];
    const secondLevelItems = [];
    const thirdLevelItems = [];

    data.forEach((element) => {
      // console.log(element.Code.indexOf("0"));

      switch (element.Code.indexOf("0")) {
        case 0:
          // console.log("level: 0");
          break;
        case 1:
          // console.log("level: 0");
          break;
        case 2:
          // console.log("level: 0");
          break;
        case 3:
          // console.log("level: 1");
          firstLevelItems.push(element);
          break;
        case 4:
          // console.log("level: 2");
          secondLevelItems.push(element);
          break;
        case 5:
          // console.log("level: 3");
          thirdLevelItems.push(element);
          break;
        default:
          // console.log("default");
          break;
      }
    });
    console.log("firstLevelItems: ", firstLevelItems);
    console.log("secondLevelItems: ", secondLevelItems);
    console.log("thirdLevelItems: ", thirdLevelItems);
  }
  const selectCategory = async (id, code) => {
    // console.log("id: ", id);
    const cpvCode = [];

    for (let index = 0; index < code.length; index++) {
      if (code[index] === "0" && index !== 0) {
        break;
      } else {
        cpvCode.push(code[index]);
        // console.log(code[index]);
      }
    }

    // console.log("cpvCode: ", cpvCode);
    const stringCpvCode = cpvCode.join("");
    // console.log("stringCpvCode: ", stringCpvCode);

    // Відкриття-закриття основної категорії
    if (selectedId === id) {
      setSelectedId(null);
    } else {
      setSelectedId(id);
    }

    setIsLoading(true);
    try {
      const response = await getSubCategory(stringCpvCode);
      sortData(response.data);

      setFirstLevel(response.data);
    } catch (error) {
      setError("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className={css.table}>
          <li>
            {mainCategory.map((element) => (
              <div key={element._id} className={css.row}>
                <Category
                  element={element}
                  selectCategory={() =>
                    selectCategory(element._id, element.Code)
                  }
                  isSelected={element._id === selectedId}
                  firstLevel={firstLevel}
                />
              </div>
            ))}
          </li>
        </ul>
      )}
      {error && <p>{error}</p>}
    </>
  );
};

export default Table;
