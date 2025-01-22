import React, { useState, useEffect } from "react";
import Section from "../../components/Section/Section";
import { getServiceByUser, getServiceById } from "../../services";
import { toast } from "react-toastify";
import { BarLoader } from "react-spinners";
import ServiceList from "../../components/ServiceList/ServiceList";
import { Menu, Content, Layout } from "./UserServicePage.styled";
import { IconButton } from "../../components/Button/Button";
import { IoMdBackspace } from "react-icons/io";

const UserServicePage = () => {
  const [userServices, setUserServices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("userServices");
  const [service, setService] = useState([]);

  // Запит по матеріали користувача
  useEffect(() => {
    const controller = new AbortController();

    async function userServices() {
      setIsLoading(true);
      try {
        const response = await getServiceByUser(controller.signal);
        setUserServices(response.data);
      } catch (error) {
        toast.error("Не вдалось завантажити послуги");
      } finally {
        setIsLoading(false);
      }
    }
    userServices();
  }, []);

  // Отримати по id

  const serviceById = (id) => {
    setStatus("service");
    const controller = new AbortController();
    async function getService(id) {
      try {
        const response = await getServiceById(id, controller.signal);
        setService([response.data]);
      } catch {
        toast.error("Не вдалось отримати послугу");
      }
    }
    getService(id);
    return () => {
      controller.abort();
    };
  };

  const backToUserServices = () => {
    setStatus("userServices");
  };

  return (
    <>
      <Section>
        <Menu>
          {status === "service" && (
            <IconButton
              onClick={backToUserServices}
              variant="dark"
              tooltip="Повернутись"
              icon={IoMdBackspace}
              iconSize="40px"
            ></IconButton>
          )}
        </Menu>
        <Layout>
          <Content>
            <p>Мої послуги:</p>
            {isLoading ? (
              <BarLoader color="#125b56" width="100%" />
            ) : (
              <Section>
                {userServices.length < 1 && (
                  <p>
                    Тут будуть відображатись ваші послуги, створіть першу
                    послугу
                  </p>
                )}

                {status === "userServices" && (
                  <ServiceList items={userServices} byId={serviceById} />
                )}

                {status === "service" && (
                  <ServiceList items={service} byId={serviceById} />
                )}
              </Section>
            )}
          </Content>
        </Layout>
      </Section>
    </>
  );
};

export default UserServicePage;
