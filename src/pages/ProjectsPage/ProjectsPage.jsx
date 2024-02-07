import React, { useState, useEffect } from "react";
import { getProjects } from "../../services";
import { toast } from "react-toastify";
import ProjectList from "../../components/ProjectList/ProjectList";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function projects() {
      setisLoading(true);
      try {
        const response = await getProjects(controller.signal);
        console.log("response effect: ", response);
        setProjects(response.data);
      } catch (error) {
        toast.error(
          "Не вдалось завантажити проекти, спробуйте перезавантажити сторінку"
        );
      } finally {
        setisLoading(false);
      }
    }

    projects();

    return () => {
      setProjects([]);
      controller.abort();
    };
  }, []);

  return (
    <>
      {projects && <ProjectList items={projects}></ProjectList>}

      {isLoading && <p>Loaging projects...</p>}
    </>
  );
};

export default ProjectsPage;
