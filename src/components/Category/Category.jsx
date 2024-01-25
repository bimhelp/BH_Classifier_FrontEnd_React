import React, { useState, useEffect } from "react";
import { createLevel, cutCpvCode } from "../../services";
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
  const [level, setLevel] = useState(null);

  useEffect(() => {
    const cutedCpvCode = cutCpvCode(Code);
    setLevel(createLevel(cutedCpvCode));
  }, [Code]);

  return (
    <>
      <CategoryWrapper onClick={selectCategory}>
        <CategoryCode level={level}>{Code}</CategoryCode>
        <CategoryDescription>{DescriptionUA}</CategoryDescription>
      </CategoryWrapper>
      <div>{children}</div>
    </>
  );
};

export default Category;

// className={`${css.categoryCode} ${css[level]}`}
