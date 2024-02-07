import React, { useState, useEffect } from "react";
import { getProjects } from "../../services";
import { toast } from "react-toastify";
import ProjectList from "../../components/ProjectList/ProjectList";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    async function projects() {
      try {
        // console.log("set true");
        setIsLoading(true);
        const response = await getProjects(controller.signal);
        // console.log("response effect: ", response);
        setProjects(response.data);
      } catch (error) {
        toast.error(
          "Не вдалось завантажити проекти, спробуйте перезавантажити сторінку"
        );
      } finally {
        setIsLoading(false);
      }
    }
    projects();

    return () => {
      setProjects([]);
      controller.abort();
    };
  }, []);

  useEffect(() => {
    // console.log("isLoading", isLoading);
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <p>Loaging projects...</p>
      ) : (
        <ProjectList items={projects}></ProjectList>
      )}
    </>
  );
};

export default ProjectsPage;
