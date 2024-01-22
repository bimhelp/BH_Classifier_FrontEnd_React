import React from "react";
import css from "./SecondLevel.module.css";
import ThirdLevel from "../ThirdLevel/ThirdLevel";

const SecondLevel = ({
  element,
  selectSecondLevel,
  isSelected,
  filteredThirdLevel,
}) => {
  return (
    <>
      <div onClick={selectSecondLevel} className={css.secondLevelWrapper}>
        <div className={css.secondLevelCode}> {element.Code}</div>
        <div>{element.DescriptionUA}</div>
      </div>

      <div>
        {/* Якщо категорія вибрана то рендеримо підкатегорії */}
        {isSelected && (
          <ul>
            {filteredThirdLevel.map((element) => (
              <li key={element._id}>
                <ThirdLevel element={element} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default SecondLevel;
