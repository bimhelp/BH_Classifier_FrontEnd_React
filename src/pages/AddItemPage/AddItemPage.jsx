import React, { useState, useEffect } from "react";
import Section from "../../components/Section/Section";
// import AddMaterialForm from "../../components/AddMaterialForm/AddMaterialForm";
// import MaterialTable from "../../components/MaterialTable/MaterialTable";
import { IconButton } from "../../components/Button/Button";
import { Layout, Content, Menu } from "./AddItemPage.styled";
// import { TbLayoutSidebarLeftExpandFilled } from "react-icons/tb";
// import { TbLayoutSidebarRightExpandFilled } from "react-icons/tb";
import { toast } from "react-toastify";
import MaterialList from "../../components/MaterialList/MaterialList";
import { getByUser, getMaterialById } from "../../services";
import { IoMdBackspace } from "react-icons/io";

const AddItemPage = () => {
  // const [isVisibleMaterials, setIsVisibleMaterials] = useState(false);
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
        const response = await getByUser(selectedId, controller.signal);
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

  // function toggleStructure() {
  //   setIsVisibleMaterials(!isVisibleMaterials);
  // }

  // function icon() {
  //   if (isVisibleMaterials) {
  //     return TbLayoutSidebarRightExpandFilled;
  //   }
  //   return TbLayoutSidebarLeftExpandFilled;
  // }

  // Отримати по id
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
          {/* <IconButton
            onClick={toggleStructure}
            variant="dark"
            tooltip="Матеріали"
            icon={icon()}
            size={40}
          ></IconButton> */}
          {status === "material" && (
            <IconButton
              onClick={backToUserMaterials}
              variant="dark"
              tooltip="Повернутись"
              icon={IoMdBackspace}
              size={40}
            ></IconButton>
          )}
        </Menu>
        <Layout>
          {/* {isVisibleMaterials && <MaterialTable></MaterialTable>} */}
          <Content>
            {!isLoading && (
              <Section>
                {userMaterials.length < 0 && (
                  <p>Ви ще не створили жодного матеріалу</p>
                )}

                {status === "userMaterials" && (
                  <MaterialList items={userMaterials} byId={materialById} />
                )}

                {status === "material" && (
                  <MaterialList items={material} byId={materialById} />
                )}
              </Section>
            )}
          </Content>
        </Layout>
      </Section>
    </>
  );
};

export default AddItemPage;
