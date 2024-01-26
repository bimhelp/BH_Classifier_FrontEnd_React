import React, { useEffect, useState } from "react";
import Categorylist from "../CategoryList/CategoryList";
// import css from "./Table.module.css";
import { getMainCategory } from "../../services/api";

const Table = ({ category, materials, clear }) => {
  const [mainCategory, setMainCategory] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Запит по всі головні категорії при монтуванні компонента
  useEffect(() => {
    async function getCategory() {
      setIsLoading(true);
      try {
        const response = await getMainCategory();
        setMainCategory(response.data);
      } catch {
        setError("error");
      } finally {
        setIsLoading(false);
      }
    }
    getCategory();
  }, []);

  return (
    <>
      {/* якщо є результати пошуку */}
      {category.length > 0 ? (
        <>
          <Categorylist items={category} />
          <Categorylist items={materials} />
        </>
      ) : (
        <Categorylist items={mainCategory} />
      )}
      {/* {isLoading ? <p>Loading...</p> : <Categorylist items={mainCategory} />} */}
      {error && <p>{error}</p>}
    </>
  );
};

export default Table;
