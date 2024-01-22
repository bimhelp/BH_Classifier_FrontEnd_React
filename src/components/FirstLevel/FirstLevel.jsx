import React, { useState } from "react";
import css from "./FirstLevel.module.css";
import SecondLevel from "../SecondLevel/SecondLevel";

const FirstLevel = ({
  element,
  selectFirstLevel,
  filteredSecondLevel,
  isSelected,
  thirdLevel,
}) => {
  const [selectedId, setSelectedId] = useState(null);
  const [filteredThirdLevel, setFilteredThirdLevel] = useState([]);

  // Фільтруємо secondLevel відповідно по співпадінню коду stringCpvcode
  function filterThirdLevel(code) {
    const filteredThirdLevel = thirdLevel.filter(
      (item) => item.Code.slice(0, 4) === code
    );
    // console.log("filteredThirdLevel: ", filteredThirdLevel);
    setFilteredThirdLevel(filteredThirdLevel);
  }

  const selectSecondLevel = async (id, code) => {
    // console.log("id: ", id);
    // Відкриття-закриття другого рівня
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
    filterThirdLevel(stringCpvCode);
  };

  return (
    <>
      <div onClick={selectFirstLevel} className={css.subCategoryWrapper}>
        <div className={css.subCategoryCode}> {element.Code}</div>
        <div>{element.DescriptionUA}</div>
      </div>
      <div>
        {/* Якщо категорія вибрана то рендеримо підкатегорії */}
        {isSelected && (
          <ul>
            {filteredSecondLevel.map((element) => (
              <li key={element._id}>
                <SecondLevel
                  selectSecondLevel={() =>
                    selectSecondLevel(element._id, element.Code)
                  }
                  element={element}
                  filteredThirdLevel={filteredThirdLevel}
                  isSelected={element._id === selectedId}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default FirstLevel;
