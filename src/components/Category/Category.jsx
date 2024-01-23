import React from "react";
import css from "./Category.module.css";

// Компонент рендерить розмітку категорії і вкладені списки
const Category = ({
  element: { Code, DescriptionUA },
  selectCategory,
  children,
}) => {
  return (
    <>
      <div onClick={selectCategory} className={css.categoryWrapper}>
        <p className={css.categoryCode}>{Code}</p>
        <p className={css.categoryDescription}>{DescriptionUA}</p>
      </div>
      <div>{children}</div>
    </>
  );
};

export default Category;
