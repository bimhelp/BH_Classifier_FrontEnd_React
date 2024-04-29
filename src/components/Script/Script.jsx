import React, { useState, useEffect } from "react";
import { getAll, getAllServices } from "../../services/api";
import { updateParentId, updateServiceParentId } from "../../services/api";

const Script = () => {
  const [materials, setMaterials] = useState([]);
  const [services, setServices] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);

  // тут повинні завантажитись всі матеріали
  // Отримання матеріалів
  useEffect(() => {
    const controller = new AbortController();
    async function getCategory() {
      try {
        const response = await getAll(controller.signal);
        // console.log("response", response);

        setMaterials(response.data);
      } catch {
        console.log("Щось пішло не так, спробуйте перезавантажити сторінку");
      }
    }
    getCategory();
    return () => {
      controller.abort();
    };
  }, [setMaterials]);

  // фільтрація матеріалів
  useEffect(() => {
    const result = materials.filter(
      (item) => !item.hasOwnProperty("ParentElementId")
    );
    setFiltered(result);
  }, [materials]);

  // Отримання сервісів
  useEffect(() => {
    const controller = new AbortController();
    async function getServices() {
      try {
        const response = await getAllServices(controller.signal);
        // console.log("response", response);
        setServices(response.data);
      } catch {
        console.log("Щось пішло не так, спробуйте перезавантажити сторінку");
      }
    }
    getServices();
    return () => {
      controller.abort();
    };
  }, []);

  // фільтрація сервісів
  useEffect(() => {
    const result = services.filter(
      (item) => !item.hasOwnProperty("ParentElementId")
    );
    setFilteredServices(result);
  }, [services]);

  // Оновити матеріали
  function handleUpdate() {
    // потім в циклі потрібно оновити матеріали,
    // for (let i = 0; i <= filtered.length; i += 1) {
    for (let i = 0; i < filtered.length; i += 1) {
      if (
        filtered[i]?.CodeParentElement &&
        filtered[i]?.CodeParentElement !== "materials"
      ) {
        console.log(filtered[i]._id);
        updateParentId(filtered[i]._id);
      } else continue;
    }
  }

  // Оновити Сервіси
  function handleServiceUpdate() {
    // потім в циклі потрібно оновити сервіси,
    for (let i = 0; i < filteredServices.length; i += 1) {
      // for (let i = 0; i < 20; i += 1) {
      if (
        filteredServices[i]?.CodeParentElement &&
        filteredServices[i]?.CodeParentElement !== "services"
      ) {
        console.log(filteredServices[i]._id);
        updateServiceParentId(filteredServices[i]._id);
      } else continue;
    }
  }

  // отримати парент елемент і заповнити парент id

  return (
    <div>
      <div>
        <h2>Materials without parentId</h2>
        <p>{filtered.length}</p>
        <button onClick={handleUpdate}>Update Materials</button>
        <ul>
          {filtered.map((material) => (
            <li key={material._id} style={{ display: "flex" }}>
              <p>{material._id}</p>
              <p style={{ paddingLeft: "20px" }}>{material.DescriptionUA}</p>
            </li>
          ))}
        </ul>
      </div>
      <h2>Services without parentId</h2>

      <div>
        <p>{filteredServices.length}</p>
        <button onClick={handleServiceUpdate}>Update Services</button>
        <ul>
          {filteredServices.map((service) => (
            <li key={service._id} style={{ display: "flex" }}>
              <p>{service._id}</p>
              <p style={{ paddingLeft: "20px" }}>{service.DescriptionUA}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Script;
