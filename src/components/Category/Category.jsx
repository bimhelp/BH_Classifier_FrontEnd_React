import React, { useState, useEffect } from "react";
import { createLevel, cutCpvCode } from "../../services";
import {
  CategoryWrapper,
  CategoryCode,
  CategoryDescription,
  HilightDescription,
} from "./Category.styled";
import { hiLight } from "../../services";
import { CopyToClipboard } from "react-copy-to-clipboard";

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

  return (
    <>
      <CategoryWrapper onClick={selectCategory}>
        <CopyToClipboard text={Code}>
          <CategoryCode level={level}>{Code}</CategoryCode>
        </CopyToClipboard>

        {query ? (
          <HilightDescription>
            {hiLight(query, DescriptionUA)}
          </HilightDescription>
        ) : (
          <CopyToClipboard>
            <CategoryDescription text={DescriptionUA}>
              {DescriptionUA}
            </CategoryDescription>
          </CopyToClipboard>
        )}
      </CategoryWrapper>
      <div>{children}</div>
    </>
  );
};

export default Category;

// className={`${css.categoryCode} ${css[level]}`}
