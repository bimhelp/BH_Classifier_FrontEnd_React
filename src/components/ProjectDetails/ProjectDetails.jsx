import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getProjectById } from "../../services";
import { toast } from "react-toastify";
import Section from "../Section/Section";
import { BarLoader } from "react-spinners";
import {
  Table,
  BackLink,
  Code,
  MaterialRow,
  SubMaterialRow,
  ServiceRow,
} from "./ProjectDetails.styled";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoHammer } from "react-icons/io5";
import { FaTrowelBricks } from "react-icons/fa6";
import { GoSquareFill } from "react-icons/go";

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

  // const totalMaterialPrice = useMemo(() => {
  //   return project?.Materials.reduce((total, material) => {
  //     return total + material.PriceInProject;
  //   }, 0);
  // }, [project]);

  // const totalServicePrice = useMemo(() => {
  //   return project?.Services.reduce((total, service) => {
  //     return total + service.PriceInProject;
  //   }, 0);
  // }, [project]);

  //   if (project.Services.Materials.length > 0) {
  //     const totalServiceMaterialPrice =
  //       project?.Services?.Materials.reduce((total, material) => {
  //         return total + material.PriceInProject;
  //       }, 0);
  //     return totalServiceMaterialPrice;
  //   }
  // };

  // функція зміни ціни матеріалу або сервісу в даному проекті
  // function handleChange() {
  //   console.log("handle change");
  // }

  return (
    <Section>
      {isLoading && <BarLoader color="#125b56" width="100%" />}
      {project && (
        <>
          <BackLink to={location.state.from}>
            <IoMdArrowRoundBack />
            До проектів
          </BackLink>

          <h2>{project.Title}</h2>

          <div>
            <Table>
              <caption>матеріали і послуги даного проекту</caption>
              <thead>
                <tr>
                  <th></th>
                  <th>Код</th>
                  <th>Опис</th>
                  <th>Ціна ринкова</th>
                  <th>Ціна в даному проекті</th>
                  <th>Одиниці</th>
                  <th>Витрата</th>
                  <th>Витрата в даному проекті</th>
                </tr>
              </thead>
              <tbody>
                {project.Services &&
                  project.Services.map((service) => {
                    return (
                      <>
                        <ServiceRow key={service._id}>
                          <td>
                            <IoHammer />
                          </td>
                          <Code>{service.Code}</Code>
                          <td>{service.DescriptionUA}</td>
                          <td>{service.PriceUAH}</td>

                          {/* <td>
                            <input
                              type="text"
                              value={service.PriceInProject}
                              onChange={handleChange}
                            />
                          </td> */}
                          <td>{service.PriceInProject}</td>

                          <td>{service.Unit}</td>
                          <td>{service.Consumption}</td>
                          <td>{service.ConsumptionInProject}</td>
                        </ServiceRow>

                        {service.Materials?.length > 0 &&
                          service.Materials.map((material) => {
                            return (
                              <SubMaterialRow key={material._id}>
                                <td>
                                  <GoSquareFill />
                                </td>
                                <td>{material.Code}</td>
                                <td>{material.DescriptionUA}</td>
                                <td>{material.PriceUAH}</td>
                                <td>{material.PriceInProject}</td>
                                <td>{material.Unit}</td>
                                <td>{material.Consumption}</td>
                                <td>{material.ConsumptionInProject}</td>
                              </SubMaterialRow>
                            );
                          })}
                      </>
                    );
                  })}

                {project.Materials &&
                  project.Materials.map((material) => {
                    return (
                      <MaterialRow key={material._id}>
                        <td>
                          <FaTrowelBricks />
                        </td>
                        <Code>{material.Code}</Code>
                        <td>{material.DescriptionUA}</td>
                        <td>{material.PriceUAH}</td>
                        <td>{material.PriceInProject}</td>
                        <td>{material.Unit}</td>
                        <td>{material.Consumption}</td>
                        <td>{material.ConsumptionInProject}</td>
                      </MaterialRow>
                    );
                  })}
              </tbody>
            </Table>
          </div>
        </>
      )}
    </Section>
  );
};

export default ProjectDetails;
