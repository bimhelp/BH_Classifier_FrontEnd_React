import React, { useState, useEffect } from "react";
import css from "./Category.module.css";

// Компонент рендерить розмітку категорії і вкладені списки
const Category = ({
  element: { Code, DescriptionUA },
  selectCategory,
  children,
}) => {
  const [cssClass, setCssClass] = useState(null);

  // Функція створює css клас в залежності від довжини cpvКоду
  function createCssClass(code) {
    console.log("code: ", code);

    var cssClass = "";
    switch (code.length) {
      case 2:
        cssClass = "main";
        break;
      case 3:
        cssClass = "first";
        break;
      case 4:
        cssClass = "second";
        break;
      case 5:
        cssClass = "third";
        break;
      default:
        cssClass = "default";
        break;
    }
    setCssClass(cssClass);
    console.log("cssClass: ", cssClass);
  }
  useEffect(() => {
    const cutedCpvCode = cutCpvCode(Code);
    createCssClass(cutedCpvCode);
    console.log("createColor");
  }, [Code]);

  // Функція отримує код вибраного елемента обрізає нулі і записує в стейт
  const cutCpvCode = (code) => {
    const cpvCode = [];

    for (let index = 0; index < code.length; index++) {
      if (code[index] === "0" && index !== 0) {
        break;
      } else {
        cpvCode.push(code[index]);
      }
    }

    const stringCpvCode = cpvCode.join("");
    console.log("stringCpvCode: ", stringCpvCode);
    return stringCpvCode;
  };

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
