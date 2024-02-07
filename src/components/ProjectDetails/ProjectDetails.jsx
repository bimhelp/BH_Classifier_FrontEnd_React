import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProjectById } from "../../services";
import { toast } from "react-toastify";
import Material from "../Material/Material";
const ProjectDetails = () => {
  const { id } = useParams();

  const [project, setProject] = useState(null);
  const [isLoading, setisLoading] = useState(false);

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
    <div>
      {isLoading && <p>Loading project details...</p>}
      {project && (
        <>
          <p>Project title:</p>
          <h2>{project.title}</h2>
          {project.materials.length > 0 && (
            <>
              <p>Materials:</p>
              <ul>
                {project.materials.map((material) => (
                  <li key={material._id}>
                    <Material material={material} />
                  </li>
                ))}
              </ul>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ProjectDetails;
