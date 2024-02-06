import React, { useState, useEffect } from "react";
import { createLevel, cutCpvCode } from "../../services";
import { toast } from "react-toastify";
import {
  CategoryWrapper,
  CategoryCode,
  CategoryDescription,
  HilightDescription,
} from "./Category.styled";
import { hiLight, checkIsString } from "../../services";
import { CopyToClipboard } from "react-copy-to-clipboard";
// Компонент рендерить розмітку категорії і вкладені списки
const Category = React.forwardRef(
  (
    { element: { Code, DescriptionUA }, selectCategory, children, query },
    ref
  ) => {
    const [level, setLevel] = useState(null);

    useEffect(() => {
      const cutedCpvCode = cutCpvCode(Code);
      setLevel(createLevel(cutedCpvCode));
    }, [Code]);

    function handleClick(event) {
      if (checkIsString(event.target.textContent)) {
        // console.log(checkIsString(event.target.textContent));
        toast.info("Опис скопійовано в буфер омбіну");
      } else toast.info("Код скопійовано в буфер омбіну");

      selectCategory(event);
    }

    return (
      <>
        <CategoryWrapper level={level} onClick={handleClick} ref={ref}>
          <CopyToClipboard text={Code}>
            <CategoryCode level={level}>{Code}</CategoryCode>
          </CopyToClipboard>

          {query ? (
            <CopyToClipboard text={DescriptionUA}>
              <HilightDescription>
                {hiLight(query, DescriptionUA)}
              </HilightDescription>
            </CopyToClipboard>
          ) : (
            <CopyToClipboard text={DescriptionUA}>
              <CategoryDescription>{DescriptionUA}</CategoryDescription>
            </CopyToClipboard>
          )}
        </CategoryWrapper>
        <div>{children}</div>
      </>
    );
  }
);

export default Category;

// className={`${css.categoryCode} ${css[level]}`}
