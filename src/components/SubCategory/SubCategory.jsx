import React from "react";
import css from "./SubCategory.module.css";

const SubCategory = ({ element }) => {
  return (
    <>
      <div className={css.subCategoryWrapper}>
        <div className={css.subCategoryCode}> {element.Code}</div>
        <div>{element.DescriptionUA}</div>
      </div>
    </>
  );
};

export default SubCategory;
