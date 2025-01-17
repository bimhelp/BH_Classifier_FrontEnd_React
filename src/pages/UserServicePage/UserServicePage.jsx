import React, { useState, useEffect } from "react";
import Section from "../../components/Section/Section";
import { getServiceByUser } from "../../services";
import { toast } from "react-toastify";
import { BarLoader } from "react-spinners";
import ServiceList from "../../components/ServiceList/ServiceList";

const UserServicePage = () => {
  const [userServices, setUserServices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
  return (
    <>
      <Section>
        <p>Мої ослуги:</p>
        {isLoading ? (
          <BarLoader color="#125b56" width="100%" />
        ) : (
          <Section>
            {userServices.length < 1 && (
              <p>
                Тут будуть відображатись ваші послуги, створіть першу послугу
              </p>
            )}
            <ServiceList items={userServices} />
          </Section>
        )}
      </Section>
    </>
  );
};

export default UserServicePage;
