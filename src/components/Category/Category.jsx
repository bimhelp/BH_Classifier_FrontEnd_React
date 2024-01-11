import React from "react";
import SubCategory from "../SubCategory/SubCategory";
import css from "./Category.module.css";

const Category = ({
  element: { Code = "", DescriptionUA = "" },
  selectCategory,
  isSelected,
  subCategory,
}) => {
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
            <li>
              {subCategory.map((element) => (
                <div key={element._id}>
                  <SubCategory
                    element={element}
                    selectCategory={selectCategory}
                  />
                </div>
              ))}
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default Category;
