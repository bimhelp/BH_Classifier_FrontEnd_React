import React, { useEffect, useState } from "react";
import Categorylist from "../CategoryList/CategoryList";
// import css from "./Table.module.css";
import { getMainCategory } from "../../services/api";

const Table = ({ category, materials, query }) => {
  const [mainCategory, setMainCategory] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // console.log("table use Effect", query);
  }, [query]);

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
          <Categorylist items={category} query={query} />
          <Categorylist items={materials} query={query} />
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
