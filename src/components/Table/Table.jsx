import React, { useEffect, useState } from "react";
import Categorylist from "../CategoryList/CategoryList";
import { getMainCategory } from "../../services/api";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { toast } from "react-toastify";
import Loader from "../Loader/Loader";

const Table = () => {
  const [mainCategory, setMainCategory] = useLocalStorage("main", []);

  const [isLoading, setIsLoading] = useState(false);

  // Запит по всі головні категорії при монтуванні компонента
  useEffect(() => {
    // console.log("effect main");
    async function getCategory() {
      setIsLoading(true);
      try {
        const response = await getMainCategory();
        setMainCategory(response.data);
      } catch {
        toast.error("Щось пішло не так, спробуйте перезавантажити сторінку");
      } finally {
        setIsLoading(false);
      }
    }
    getCategory();
    return () => {
      // console.log("main unmount");
      setMainCategory([]);
    };
  }, [setMainCategory]);

  useEffect(() => {
    // console.log("main", mainCategory);
  }, [mainCategory]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Categorylist items={mainCategory} style={{ padding: 0 }} />
      )}
    </>
  );
};

export default Table;
