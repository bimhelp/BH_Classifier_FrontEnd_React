import React from "react";
import css from "./SecondLevel.module.css";

const SecondLevel = ({ element }) => {
  return (
    <div className={css.secondLevelWrapper}>
      <div className={css.secondLevelCode}> {element.Code}</div>
      <div>{element.DescriptionUA}</div>
    </div>
  );
};

export default SecondLevel;
