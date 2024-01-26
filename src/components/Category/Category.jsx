import React, { useState, useEffect } from "react";
import { createLevel, cutCpvCode } from "../../services";
import {
  CategoryWrapper,
  CategoryCode,
  CategoryDescription,
  HilightDescription,
} from "./Category.styled";
import { hiLight } from "../../services";

// Компонент рендерить розмітку категорії і вкладені списки
const Category = ({
  element: { Code, DescriptionUA },
  selectCategory,
  children,
  query,
}) => {
  const [level, setLevel] = useState(null);

  useEffect(() => {
    const cutedCpvCode = cutCpvCode(Code);
    setLevel(createLevel(cutedCpvCode));
  }, [Code]);

  useEffect(() => {
    console.log("use Effect", query);
  }, [query]);

  return (
    <>
      <CategoryWrapper onClick={selectCategory}>
        <CategoryCode level={level}>{Code}</CategoryCode>
        {query ? (
          <HilightDescription>
            {hiLight(query, DescriptionUA)}
          </HilightDescription>
        ) : (
          <CategoryDescription>{DescriptionUA}</CategoryDescription>
        )}
      </CategoryWrapper>
      <div>{children}</div>
    </>
  );
};

export default Category;

// className={`${css.categoryCode} ${css[level]}`}
