import React from "react";
import css from "./Row.module.css";

const Row = ({
  element: { Code = "", DescriptionUA = "", Price = "0", Unit = "" },
}) => {
  return (
    <>
      <td className={css.cell}>{Code}</td>
      <td className={css.cell}>{DescriptionUA}</td>
      <td className={css.cell}>{Price}</td>
      <td className={css.cell}>{Unit}</td>
    </>
  );
};

export default Row;
