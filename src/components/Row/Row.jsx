import React from "react";
import css from "./Row.module.css";

const Row = ({
  element: { Code = "", DescriptionUA = "", Price = "0", Unit = "" },
}) => {
  return (
    <div className={css.rowWrapper}>
      <div className={css.code}>{Code}</div>
      <div className={css.cell}>{DescriptionUA}</div>
      <div className={css.cell}>{Price}</div>
      <div className={css.cell}>{Unit}</div>
    </div>
  );
};

export default Row;
