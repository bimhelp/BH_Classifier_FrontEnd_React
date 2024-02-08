import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getProjectById } from "../../services";
import { toast } from "react-toastify";
import Material from "../Material/Material";
import Section from "../Section/Section";
import { BackLink, List, Item } from "./ProjectDetails.styled";
import { IoMdArrowRoundBack } from "react-icons/io";

const ProjectDetails = () => {
  const { id } = useParams();

  const [project, setProject] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const location = useLocation();

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

  return (
    <Section>
      {isLoading && <p>Loading project details...</p>}
      {project && (
        <>
          <BackLink to={location.state.from}>
            <IoMdArrowRoundBack />
            Back
          </BackLink>

          <h2>{project.title}</h2>
          {project.materials.length > 0 && (
            <>
              <p>Materials:</p>
              <List>
                {project.materials.map((material) => (
                  <Item key={material._id._id}>
                    <Material
                      material={material._id}
                      userPrice={material.userPrice}
                    />
                  </Item>
                ))}
              </List>
            </>
          )}
        </>
      )}
    </Section>
  );
};

export default ProjectDetails;
