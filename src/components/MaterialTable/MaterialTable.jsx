import React, { useEffect, useState } from "react";
import MaterialList from "../MaterialList/MaterialList";
import { getByParentCode } from "../../services/api";
import { toast } from "react-toastify";
import Loader from "../Loader/Loader";
import { ListWrapper } from "./MaterialTable.styled";
import ScrollToTopBtn from "../ScrollToTopBtn/ScrollToTopBtn";

const MaterialTable = () => {
  const [mainCategory, setMainCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Запит по всі головні категорії при монтуванні компонента
  useEffect(() => {
    const controller = new AbortController();
    async function getCategory() {
      try {
        setIsLoading(true);
        const response = await getByParentCode("materials", controller.signal);
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
        <ListWrapper>
          <MaterialList items={mainCategory} style={{ padding: 0 }} />
          <ScrollToTopBtn />
        </ListWrapper>
      )}
    </>
  );
};

export default MaterialTable;
