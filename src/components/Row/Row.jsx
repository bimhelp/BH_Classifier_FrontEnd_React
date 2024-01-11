import React from "react";
import css from "./Row.module.css";

const Row = ({
  element: { Code = "", DescriptionUA = "" },
  selectCategory,
  isSelected,
  subCategory,
}) => {
  return (
    <>
      <div className={css.rowWrapper} onClick={selectCategory}>
        {/* {isSelected && <p>Вибрана категорія</p>} */}
        <div className={css.code}>{Code}</div>
        <div className={css.cell}>{DescriptionUA}</div>
      </div>
      <div>
        {isSelected && (
          <ul>
            <li>
              {subCategory.map((element) => (
                <div key={element._id} className={css.row}>
                  <Row element={element} selectCategory={selectCategory} />
                </div>
              ))}
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default Row;
