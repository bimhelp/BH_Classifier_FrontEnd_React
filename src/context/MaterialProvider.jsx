import React, { useState } from "react";
import { materialContext } from "./materialContext";
import { addMaterial } from "../services";
import { toast } from "react-toastify";

const MaterialProvider = ({ children }) => {
  const [newMaterial, setNewMaterial] = useState(null);

  // Головні матеріали
  // Поточні матеріали

  // Створення матеріалу
  function createMaterial(material) {
    const controller = new AbortController();
    async function createMaterial(newMaterial) {
      try {
        const response = await addMaterial(newMaterial, controller.signal);
        toast.success("Матеріал успішно створено");
        setNewMaterial(response.data);
      } catch (error) {
        toast.error("Не вдалось створити матеріал");
      }
    }
    createMaterial(material);
    return () => {
      controller.abort();
    };
  }

  // Видалення матеріалу
  // Дерево матеріалу
  const providerValue = {
    createMaterial,
    newMaterial,
  };
  return (
    <materialContext.Provider value={providerValue}>
      {children}
    </materialContext.Provider>
  );
};

export default MaterialProvider;
