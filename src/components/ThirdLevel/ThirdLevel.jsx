import React, { useState, useEffect } from "react";
import css from "./ThirdLevel.module.css";
import { searchMaterials } from "../../services/api";
import Material from "../Material/Material";

const ThirdLevel = ({ element }) => {
  const [materials, setMaterials] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [stringCpvCode, SetStirngCpvCode] = useState(null);

  const selectCategory = async (id, code) => {
    // console.log("id: ", id);
    const cpvCode = [];

    for (let index = 0; index < code.length; index++) {
      if (code[index] === "0" && index !== 0) {
        break;
      } else {
        cpvCode.push(code[index]);
        // console.log(code[index]);
      }
    }

    // console.log("cpvCode: ", cpvCode);
    const stringCpvCode = cpvCode.join("");
    console.log("stringCpvCode: ", stringCpvCode);
    SetStirngCpvCode(stringCpvCode);

    // Відкриття-закриття основної категорії
    if (selectedId === id) {
      // console.log("selectedId: ", selectedId, "=", id);
      setSelectedId(null);
    } else {
      // console.log("selectedId: ", selectedId, "!=", id);
      setSelectedId(id);
    }

    async function getMaterials() {
      setIsLoading(true);
      try {
        const response = await searchMaterials(stringCpvCode);
        console.log("response: ", response.data);

        setMaterials(response.data.slice(1));
      } catch (error) {
        setError("error");
      } finally {
        setIsLoading(false);
      }
    }

    getMaterials();
  };

  return (
    <>
      <div
        onClick={() => selectCategory(element._id, element.Code)}
        className={css.thirdLevelWrapper}
      >
        <div className={css.thirdLevelCode}> {element.Code}</div>
        <div>{element.DescriptionUA}</div>
      </div>
      <div>
        {materials && (
          <ul className={css.materialList}>
            {materials.map((material) => (
              <li key={material._id} className={css.materialItem}>
                <Material material={material} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default ThirdLevel;
