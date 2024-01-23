import React from "react";
import Material from "../Material/Material";
import css from "./MaterialList.module.css";

const MaterialList = ({ materials }) => {
  return (
    <ul className={css.materialList}>
      {materials.map((item) => (
        <li key={item._id} className={css.materialItem}>
          <Material material={item} />
        </li>
      ))}
    </ul>
  );
};

export default MaterialList;
