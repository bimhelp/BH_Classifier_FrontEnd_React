import React, { useState, useEffect, useMemo } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getProjectById } from "../../services";
import { toast } from "react-toastify";
import ProjectMaterial from "../ProjectMaterial/ProjectMaterial";
import Section from "../Section/Section";
import { BackLink, List, Item } from "./ProjectDetails.styled";
import { IoMdArrowRoundBack } from "react-icons/io";

const ProjectDetails = () => {
  const { id } = useParams();

  const [project, setProject] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const location = useLocation();
  const tableHeader = {
    Code: "Код",
    DescriptionUA: "Опис",
    Price: "Ціна",
    UserPrice: "Ціна",
    Consumption: "Витрата",
    UserConsumption: "Витрата",
    Unit: "Одиниці",
  };

  useEffect(() => {
    const controller = new AbortController();
    async function getProject(id) {
      try {
        setisLoading(true);
        const response = await getProjectById(id, controller.signal);
        // console.log("response effect: ", response.data);
        setProject(response.data);
      } catch (error) {
        toast.error("Не вдалось завантажити проект");
      } finally {
        setisLoading(false);
      }
    }

    getProject(id);

    return () => {
      setProject(null);
      controller.abort();
    };
  }, [id]);

  const totalPrice = useMemo(() => {
    return project?.Materials.reduce((total, material) => {
      return total + material.UserPrice;
    }, 0);
  }, [project]);

  return (
    <Section>
      {isLoading && <p>Loading project details...</p>}
      {project && (
        <>
          <BackLink to={location.state.from}>
            <IoMdArrowRoundBack />
            Back
          </BackLink>

          <h2>{project.Title}</h2>
          {project.Materials.length > 0 ? (
            <>
              <div
                style={{
                  marginLeft: 16,
                }}
              >
                <ProjectMaterial material={tableHeader} />
              </div>
              <List>
                {project.Materials.map((material) => (
                  <Item key={material._id}>
                    <ProjectMaterial material={material} />
                  </Item>
                ))}
              </List>
              {project?.Materials.length > 0 && (
                <div>
                  <p>
                    Кількість матеріалів:
                    <span>{project.Materials.length}</span>
                  </p>
                  <p>
                    Загальна вартість: <span>{totalPrice} &#8372;</span>
                  </p>
                </div>
              )}
            </>
          ) : (
            <p>У вашому проекті немає матеріалів</p>
          )}
        </>
      )}
    </Section>
  );
};

export default ProjectDetails;
