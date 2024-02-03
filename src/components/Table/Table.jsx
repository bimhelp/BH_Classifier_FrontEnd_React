import React, { useEffect, useState } from "react";
import Categorylist from "../CategoryList/CategoryList";
// import css from "./Table.module.css";
import { getMainCategory } from "../../services/api";
import ShowError from "../ShowError/ShowError";
import { useLocalStorage } from "../../hooks/useLocalStorage";
// import { ErrorMessage } from "formik";
import ContentLoader from "react-content-loader";

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
      {isLoading && (
        <ContentLoader
          speed={2}
          width={1415}
          height={78}
          viewBox="0 0 1415 78"
          backgroundColor="#e3e3e3"
          foregroundColor="#c7c7c7"
        >
          <rect x="15" y="0" rx="5" ry="5" width="110" height="24" />
          <rect x="130" y="0" rx="5" ry="5" width="1285" height="24" />
          <rect x="15" y="27" rx="5" ry="5" width="110" height="24" />
          <rect x="130" y="27" rx="5" ry="5" width="1285" height="24" />
          <rect x="15" y="54" rx="5" ry="5" width="110" height="24" />
          <rect x="130" y="54" rx="5" ry="5" width="1285" height="24" />
        </ContentLoader>
      )}

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
