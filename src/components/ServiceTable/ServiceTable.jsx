import React, { useEffect, useState } from "react";
import ServiceList from "../ServiceList/ServiceList";
import { getServiceByLevel } from "../../services/api";
import { toast } from "react-toastify";
import { BarLoader } from "react-spinners";
import { ListWrapper } from "./ServiceTable.styled";

const ServiceTable = ({ byId }) => {
  const [mainCategory, setMainCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Запит по всі головні категорії при монтуванні компонента
  useEffect(() => {
    const controller = new AbortController();
    async function getCategory() {
      try {
        setIsLoading(true);
        const response = await getServiceByLevel(2, controller.signal);
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
        <BarLoader color="#125b56" width="100%" />
      ) : (
        <ListWrapper>
          <ServiceList
            items={mainCategory}
            style={{ padding: 0 }}
            byId={byId}
          />
        </ListWrapper>
      )}
    </>
  );
};

export default ServiceTable;
