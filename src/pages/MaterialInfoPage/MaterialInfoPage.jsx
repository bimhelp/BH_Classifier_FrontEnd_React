import React, { useEffect, useState } from "react";
import { useParams, useLocation, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { IoMdBackspace } from "react-icons/io";
import Section from "../../components/Section/Section";
import { getMaterialById } from "../../services/api";
import Category from "../../components/Category/Category";
import { BarLoader } from "react-spinners";

const MaterialInfoPage = () => {
  const { id } = useParams();
  const [material, setMaterial] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";
  const [isLoading, setIsLoading] = useState(true);

  // Отримати по id
  useEffect(() => {
    const controller = new AbortController();
    async function getMaterial(id) {
      try {
        setIsLoading(true);
        const response = await getMaterialById(id, controller.signal);
        // console.log("response: ", response.data);

        setMaterial(response.data);
      } catch {
        toast.error("Не вдалось отримати матеріал");
      } finally {
        setIsLoading(false);
      }
    }
    getMaterial(id);
    return () => {
      controller.abort();
    };
  }, [id]);

  return (
    <>
      <Section>
        <NavLink to={backLinkHref}>
          <IoMdBackspace size={40} />
        </NavLink>
        {isLoading ? (
          <BarLoader color="#125b56" width="100%" />
        ) : (
          <Category element={material} />
        )}
        {/* {material && <Category element={material} />} */}
      </Section>
    </>
  );
};

export default MaterialInfoPage;
