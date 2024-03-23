import React, { useEffect, useState } from "react";
import Categorylist from "../MaterialList/MaterialList";
import { getByParentCode } from "../../services/api";
import { toast } from "react-toastify";
import Loader from "../Loader/Loader";

const MaterialTable = () => {
  const [mainCategory, setMainCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Запит по всі головні категорії при монтуванні компонента
  useEffect(() => {
    const controller = new AbortController();
    async function getCategory() {
      try {
        setIsLoading(true);
        const response = await getByParentCode("47000000-6", controller.signal);
        setMainCategory(response.data);
      } catch {
        toast.error("Щось пішло не так, спробуйте перезавантажити сторінку");
      } finally {
        setIsLoading(false);
      }
    }
    getCategory();
    return () => {
      setMainCategory([]);
      controller.abort();
    };
  }, [setMainCategory]);

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

export default MaterialTable;
