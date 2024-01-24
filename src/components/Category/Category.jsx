import React, { useState, useEffect } from "react";
import css from "./Category.module.css";
import { createCssClass, cutCpvCode } from "../../services";

// Компонент рендерить розмітку категорії і вкладені списки
const Category = ({
  element: { Code, DescriptionUA },
  selectCategory,
  children,
}) => {
  const [cssClass, setCssClass] = useState(null);

  useEffect(() => {
    const cutedCpvCode = cutCpvCode(Code);
    setCssClass(createCssClass(cutedCpvCode));
  }, [Code]);

  return (
    <>
      <div onClick={selectCategory} className={css.categoryWrapper}>
        <p className={`${css.categoryCode} ${css[cssClass]}`}>{Code}</p>
        <p className={css.categoryDescription}>{DescriptionUA}</p>
      </div>
      <div>{children}</div>
    </>
  );
};

export default Category;
