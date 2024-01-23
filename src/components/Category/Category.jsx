import React from "react";
import css from "./Category.module.css";

const Category = ({ element: { Code, DescriptionUA }, selectCategory }) => {
  return (
    <div onClick={selectCategory} className={css.categoryWrapper}>
      <div className={css.categoryCode}>{Code}</div>
      <div className={css.categoryDescription}>{DescriptionUA}</div>
    </div>
  );
};

export default Category;
