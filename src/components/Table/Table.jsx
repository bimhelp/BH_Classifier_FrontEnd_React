import React, { useEffect, useState } from "react";
import Categorylist from "../CategoryList/CategoryList";
// import css from "./Table.module.css";
import { getMainCategory } from "../../services/api";
import ShowError from "../ShowError/ShowError";
import { useLocalStorage } from "../../hooks/useLocalStorage";
// import { ErrorMessage } from "formik";

const Table = ({ category, materials, query }) => {
  const [mainCategory, setMainCategory] = useLocalStorage("main", []);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Запит по всі головні категорії при монтуванні компонента
  useEffect(() => {
    async function getCategory() {
      setIsLoading(true);
      try {
        const response = await getMainCategory();
        setMainCategory(response.data);
        setError(null);
      } catch {
        setError("Щось пішло не так, спробуйте перезавантажити сторінку");
      } finally {
        setIsLoading(false);
      }
    }
    getCategory();
  }, [setMainCategory]);

  return (
    <>
      {error !== null && <ShowError>{error}</ShowError>}
      {isLoading && <p>Loading Main Category...</p>}

      {/* якщо є результати пошуку */}
      {category.length > 0 || materials.length > 0 ? (
        <>
          <Categorylist items={category} query={query} />
          <Categorylist items={materials} query={query} />
        </>
      ) : (
        <Categorylist items={mainCategory} style={{ padding: 0 }} />
      )}
      {/* {isLoading ? <p>Loading...</p> : <Categorylist items={mainCategory} />} */}
    </>
  );
};

export default Table;
