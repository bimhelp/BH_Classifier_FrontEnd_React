import React, { useState, useEffect, useMemo } from "react";

// functions
import { addMaterial, getByParentId, removeMaterial } from "../../services";
import { createLevel } from "../../services";
// components
import Category from "../Category/Category";
import { List, Item } from "./MaterialList.styled";
import { toast } from "react-toastify";
import { BarLoader } from "react-spinners";

const MaterialList = ({ items, query }) => {
  const [subCategories, setSubCategories] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [newMaterial, setNewMaterial] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    console.log("Mouting phase: Material List");
  }, []);

  // Запит по під категорії
  useEffect(() => {
    const controller = new AbortController();
    async function subCategory(selectedId) {
      // console.log("get subcategory effect");
      setIsLoading(true);
      try {
        const response = await getByParentId(selectedId, controller.signal);
        // console.log("response: ", response.data);

        setSubCategories(response.data);
      } catch (error) {
        toast.error("Не вдалось завантажити підкагеторії");
      } finally {
        // console.log("finish loading");
        setIsLoading(false);
      }
    }

    if (!selectedId) {
      console.log("return");
      return;
    }
    subCategory(selectedId);

    return () => {
      controller.abort();
    };
  }, [selectedId, newMaterial, setSubCategories, isDeleted]);

  // Створення класів для кольорів
  const level = useMemo(() => {
    if (items.length > 0) {
      return createLevel(items[0].ElementNestingLevel);
    }
    return null;
  }, [items]);

  // Функція  тоглить відкриття категорії
  const selectCategory = async (event, id) => {
    if (event.target.tagName !== "path" && event.target.tagName !== "svg") {
      toggleCategory(id);
    }
  };

  // Відкриття-закриття категорії
  function toggleCategory(id) {
    if (selectedId === id) {
      setSelectedId(null);
    } else {
      setSelectedId(id);
    }
  }

  // Додавання матеріалу
  function createMaterial(material) {
    const controller = new AbortController();
    async function createMaterial(newMaterial) {
      try {
        const response = await addMaterial(newMaterial, controller.signal);
        // console.log("new material: ", response.data);
        setNewMaterial(response.data);
      } catch (error) {
        toast.error("Не вдалось додати матеріал");
      }
    }
    createMaterial(material);
    return () => {
      controller.abort();
    };

    // setMaterialCandidate(material);
  }
  // Видалення матеріалу
  async function handleDelete(id) {
    try {
      const result = await removeMaterial(id);
      console.log("result: ", result.data);
      if (result) {
        toast.info("Матеріал успішно видалений");
        setIsDeleted(true);
      }
    } catch (error) {
      toast.error("Не вдалось видалити  матеріал");
      setIsDeleted(false);
    }
  }

  return (
    <>
      <div>
        <List level={level}>
          {items.map((item) => (
            <Item key={item._id}>
              {/* якщо вибраний елемент */}
              {selectedId === item._id ? (
                <Category
                  element={item}
                  selectCategory={(event) => selectCategory(event, item._id)}
                  query={query}
                  isSelected={selectedId === item._id}
                  handleDelete={handleDelete}
                  createMaterial={createMaterial}
                >
                  {isLoading ? (
                    <BarLoader color="#125b56" width="100%" />
                  ) : (
                    <MaterialList items={subCategories} query={query} />
                  )}
                </Category>
              ) : (
                <Category
                  element={item}
                  selectCategory={(event) => selectCategory(event, item._id)}
                  query={query}
                  handleDelete={handleDelete}
                  createMaterial={createMaterial}
                ></Category>
              )}
            </Item>
          ))}
        </List>
      </div>
    </>
  );
};

export default MaterialList;

// import React, { useState, useMemo } from "react";
// import { getByParentId, removeMaterial } from "../../services";
// import { createLevel } from "../../services";
// import Category from "../Category/Category";
// import { List, Item } from "./MaterialList.styled";
// import { toast } from "react-toastify";
// import { BarLoader } from "react-spinners";
// import { useEffect } from "react";

// const MaterialList = ({ items, query }) => {
//   const [subCategories, setSubCategories] = useState([]);
//   const [selectedId, setSelectedId] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     console.log("Mouting phase: same when componentDidMount runs");
//   }, []);

//   // Створення класів для кольорів
//   const level = useMemo(() => {
//     if (items.length > 0) {
//       return createLevel(items[0].ElementNestingLevel);
//     }
//     return null;
//   }, [items]);

//   // Обробник події кліку на елементі списку
//   const handleItemClick = async (id) => {
//     if (id === selectedId) {
//       // Закриття відкритого елемента
//       setSelectedId(null);
//       setSubCategories([]);
//     } else {
//       // Відкриття нового елемента
//       setSelectedId(id);
//       setIsLoading(true);
//       try {
//         const response = await getByParentId(id);
//         setSubCategories(response.data);
//       } catch (error) {
//         toast.error("Не вдалось завантажити підкагеторії");
//       } finally {
//         setIsLoading(false);
//       }
//     }
//   };

//   // Видалення матеріалу
//   const handleDelete = async (id) => {
//     try {
//       const result = await removeMaterial(id);
//       if (result) {
//         // Оновлення списку після видалення
//         setSubCategories(subCategories.filter((element) => element._id !== id));
//       }
//     } catch (error) {
//       toast.error("Не вдалось видалити матеріал");
//     }
//   };

//   return (
//     <List level={level}>
//       {items.map((item) => (
//         <Item key={item._id}>
//           <Category
//             element={item}
//             isSelected={selectedId === item._id}
//             handleItemClick={() => handleItemClick(item._id)}
//             query={query}
//             handleDelete={() => handleDelete(item._id)}
//           >
//             {isLoading ? <BarLoader color="#125b56" width="100%" /> : null}
//             {selectedId === item._id ? (
//               <MaterialList items={subCategories} query={query} />
//             ) : null}
//           </Category>
//         </Item>
//       ))}
//     </List>
//   );
// };

// export default MaterialList;
