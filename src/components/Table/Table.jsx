import React, { useEffect, useState } from "react";
import Categorylist from "../CategoryList/CategoryList";
import { getMainCategory } from "../../services/api";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { toast } from "react-toastify";
import Loader from "../Loader/Loader";

const Table = ({ category, materials, query }) => {
  const [mainCategory, setMainCategory] = useLocalStorage("main", []);

  const [isLoading, setIsLoading] = useState(false);

  // Запит по всі головні категорії при монтуванні компонента
  useEffect(() => {
    async function getCategory() {
      setIsLoading(true);
      try {
        const response = await getMainCategory();
        setMainCategory(response.data);
      } catch {
        toast.error("Щось пішло не так, спробуйте перезавантажити сторінку", {
          autoClose: false,
        });
      } finally {
        setIsLoading(false);
      }
    }
    getCategory();
  }, [setMainCategory]);

  return (
    <>
      {isLoading && <Loader />}

      {/* якщо є результати пошуку */}
      {category.length > 0 || materials.length > 0 ? (
        <>
          <Categorylist items={category} query={query} />
          <Categorylist items={materials} query={query} />
        </>
      ) : (
        <Categorylist items={mainCategory} style={{ padding: 0 }} />
      )}
    </>
  );
};

export default Table;
