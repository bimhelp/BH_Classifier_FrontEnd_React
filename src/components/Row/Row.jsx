import React from "react";
import css from "./Row.module.css";

const Row = ({ element: { Code = "", DescriptionUA = "" } }) => {
  return (
    <div className={css.rowWrapper}>
      <div className={css.code}>{Code}</div>
      <div className={css.cell}>{DescriptionUA}</div>
    </div>
  );
};

export default Row;
