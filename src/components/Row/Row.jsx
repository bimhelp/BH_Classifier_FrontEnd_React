import React from "react";
import css from "./Row.module.css";

const Row = ({
  element: {
    price = "0",
    unit = "",
    unitcode = "",
    description = "",
    level = "",
    code = "",
  },
}) => {
  return (
    <>
      <td className={css.cell}>{description}</td>
      <td className={css.cell}>{code}</td>
      <td className={css.cell}>{price}</td>
      <td className={css.cell}>{unitcode}</td>
      <td className={css.cell}>{level}</td>
      <td className={css.cell}>{unit}</td>
    </>
  );
};

export default Row;
