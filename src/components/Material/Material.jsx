import React from "react";
import css from "./Material.module.css";
const Material = ({ material }) => {
  return (
    <div className={css.materialWrapper}>
      <p className={css.materialCode}> {material.Code}</p>
      <p>{material.DescriptionUA}</p>
    </div>
  );
};

export default Material;
