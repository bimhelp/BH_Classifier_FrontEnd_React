import React from "react";
import css from "./FirstLevel.module.css";
import SecondLevel from "../SecondLevel/SecondLevel";

const FirstLevel = ({
  element,
  selectFirstLevel,
  filteredSecondLevel,
  isSelected,
}) => {
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
                  selectFirstLevel={() =>
                    selectFirstLevel(element._id, element.Code)
                  }
                  element={element}
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
