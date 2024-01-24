import React, { useState, useEffect } from "react";
import { createCssClass, cutCpvCode } from "../../services";
import {
  CategoryWrapper,
  CategoryCode,
  CategoryDescription,
} from "./Category.styled";

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
      <CategoryWrapper onClick={selectCategory}>
        <CategoryCode cssClass={cssClass}>{Code}</CategoryCode>
        <CategoryDescription>{DescriptionUA}</CategoryDescription>
      </CategoryWrapper>
      <div>{children}</div>
    </>
  );
};

export default Category;

// className={`${css.categoryCode} ${css[cssClass]}`}
