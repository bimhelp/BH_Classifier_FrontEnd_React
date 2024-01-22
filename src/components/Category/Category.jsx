import React, { useState } from "react";
import css from "./Category.module.css";
import FirstLevel from "../FirstLevel/FirstLevel";

const Category = ({
  element: { Code = "", DescriptionUA = "" },
  selectCategory,
  isSelected,
  firstLevel,
  secondLevel,
  thirdLevel,
}) => {
  const [selectedId, setSelectedId] = useState(null);
  const [filteredSecondLevel, setFilteredSecondLevel] = useState([]);

  // фільтруємо firstLevel відповідно по співпадінню коду stringCpvCode
  function filterSecondLevel(code) {
    const filteredSecondLevel = secondLevel.filter(
      (item) => item.Code.slice(0, 3) === code
    );
    // console.log("filteredSecondLevel: ", filteredSecondLevel);
    // console.log(item.Code.slice(0, 4));
    setFilteredSecondLevel(filteredSecondLevel);
  }

  const selectFirstLevel = async (id, code) => {
    // console.log("id: ", id);

    // Відкриття-закриття першого рівня
    if (selectedId === id) {
      // console.log("selectedId: ", selectedId, "=", id);
      setSelectedId(null);
    } else {
      // console.log("selectedId: ", selectedId, "!=", id);
      setSelectedId(id);
    }

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

    // фільтруємо firstLevel відповідно по співпадінню коду stringCpvCode
    filterSecondLevel(stringCpvCode);
  };

  return (
    <>
      <div onClick={selectCategory} className={css.categoryWrapper}>
        <div className={css.categoryCode}>{Code}</div>
        <div className={css.categoryDescription}>{DescriptionUA}</div>
      </div>
      <div>
        {/* Якщо категорія вибрана то рендеримо підкатегорії */}
        {isSelected && (
          <ul>
            {firstLevel.map((element) => (
              <li key={element._id}>
                <FirstLevel
                  selectFirstLevel={() =>
                    selectFirstLevel(element._id, element.Code)
                  }
                  element={element}
                  filteredSecondLevel={filteredSecondLevel}
                  isSelected={element._id === selectedId}
                  thirdLevel={thirdLevel}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Category;
