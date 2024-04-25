import React, { useState, useEffect } from "react";
import { getAll, searchMaterialByCode } from "../../services/api";
const Script = () => {
  const [materials, setMaterials] = useState([]);
  const [currentElement, setCurrentElement] = useState(null);

  useEffect(() => {
    console.log("currentElement", currentElement);
  }, [currentElement]);

  // тут повинні завантажитись всі матеріали

  useEffect(() => {
    async function getCategory() {
      try {
        const response = await getAll();
        console.log("response", response);

        setMaterials(response.data);
      } catch {
        console.log("Щось пішло не так, спробуйте перезавантажити сторінку");
      }
    }
    getCategory();
  }, [setMaterials]);

  async function getParent(code) {
    try {
      const response = await searchMaterialByCode(code);
      console.log("parentElementId", response.data[0]._id);
    } catch (error) {
      console.log(error);
    }
  }

  // потім в циклі потрібно оновити матеріали,
  for (let i = 0; i <= 20; i += 1) {
    //для цього зробити запит по парентКод,
    if (
      materials[i]?.CodeParentElement &&
      materials[i]?.CodeParentElement !== "materials"
    ) {
      console.log(materials[i]);

      getParent(materials[i].CodeParentElement);
    } else continue;
  }

  // отримати парент елемент і заповнити парент id

  return <div>script page</div>;
};

export default Script;
