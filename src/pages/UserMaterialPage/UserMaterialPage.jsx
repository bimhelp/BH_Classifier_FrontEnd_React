import React, { useState, useEffect } from "react";
import Section from "../../components/Section/Section";
import MaterialList from "../../components/MaterialList/MaterialList";
import { IconButton } from "../../components/Button/Button";
import { Layout, Content, Menu } from "./UserMaterialPage.styled";
import { toast } from "react-toastify";
import {
  getMaterialByUser,
  getMaterialById,
  // getSubMaterialByUser,
  // getMainMaterialByUser,
} from "../../services";
import { IoMdBackspace } from "react-icons/io";
import { BarLoader } from "react-spinners";

const UserMaterialPage = () => {
  const [userMaterials, setUserMaterials] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("userMaterials");
  const [material, setMaterial] = useState([]);

  // Запит по матеріали користувача
  useEffect(() => {
    const controller = new AbortController();

    async function userMaterials(selectedId) {
      setIsLoading(true);
      try {
        const response = await getMaterialByUser(selectedId, controller.signal);
        setUserMaterials(response.data);
      } catch (error) {
        toast.error("Не вдалось завантажити матеріали");
      } finally {
        setIsLoading(false);
      }
    }

    userMaterials();

    return () => {
      controller.abort();
    };
  }, []);

  // Отримати матеріал по id коли натискаємо на дереві
  const materialById = (id) => {
    setStatus("material");
    const controller = new AbortController();
    async function getMaterial(id) {
      try {
        //  setIsLoading(true);
        const response = await getMaterialById(id, controller.signal);

        setMaterial([response.data]);
      } catch {
        toast.error("Не вдалось отримати матеріал");
      } finally {
        //  setIsLoading(false);
      }
    }
    getMaterial(id);
    return () => {
      controller.abort();
    };
  };

  const backToUserMaterials = () => {
    setStatus("userMaterials");
  };
  return (
    <>
      <Section>
        <Menu>
          {status === "material" && (
            <IconButton
              onClick={backToUserMaterials}
              variant="dark"
              tooltip="Повернутись"
              icon={IoMdBackspace}
              iconSize="40px"
            ></IconButton>
          )}
        </Menu>
        <Layout>
          <Content>
            <p>Мої матеріали:</p>
            {isLoading ? (
              <BarLoader color="#125b56" width="100%" />
            ) : (
              <Section>
                {userMaterials.length < 1 && (
                  <p>
                    Тут будуть відображатись ваші матеріали, створіть перший
                    матеріал
                  </p>
                )}

                {status === "userMaterials" && (
                  <>
                    <p>user</p>
                    <MaterialList
                      items={userMaterials}
                      byId={materialById}
                      querryType="userSubMaterials"
                    />
                  </>
                )}

                {status === "material" && (
                  <>
                    <p>material</p>
                    <MaterialList items={material} byId={materialById} />
                  </>
                )}
              </Section>
            )}
          </Content>
        </Layout>
      </Section>
    </>
  );
};

export default UserMaterialPage;
