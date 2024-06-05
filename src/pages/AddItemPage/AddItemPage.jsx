import React, { useState, useEffect } from "react";
import Section from "../../components/Section/Section";
import AddMaterialForm from "../../components/AddMaterialForm/AddMaterialForm";
import MaterialTable from "../../components/MaterialTable/MaterialTable";
import { IconButton } from "../../components/Button/Button";
import { Layout, Content } from "./AddItemPage.styled";
import { TbLayoutSidebarLeftExpandFilled } from "react-icons/tb";
import { TbLayoutSidebarRightExpandFilled } from "react-icons/tb";
import { toast } from "react-toastify";
import { addMaterial } from "../../services";
import MaterialList from "../../components/MaterialList/MaterialList";
import { getByUser } from "../../services";

const AddItemPage = () => {
  const [isVisibleMaterials, setIsVisibleMaterials] = useState(false);
  const [userMaterials, setUserMaterials] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [newMaterial, setNewMaterial] = useState("");

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
  }, [newMaterial]);

  function toggleStructure() {
    setIsVisibleMaterials(!isVisibleMaterials);
  }

  function icon() {
    if (isVisibleMaterials) {
      return TbLayoutSidebarRightExpandFilled;
    }
    return TbLayoutSidebarLeftExpandFilled;
  }

  // Створення матеріалу
  function createMaterial(material) {
    const controller = new AbortController();
    async function createMaterial(newMaterial) {
      try {
        const material = await addMaterial(newMaterial, controller.signal);
        setNewMaterial(material);
        toast.success("Матеріал успішно створено");
      } catch (error) {
        toast.error("Не вдалось створити матеріал");
      }
    }
    createMaterial(material);
    return () => {
      controller.abort();
    };
  }

  return (
    <>
      <Section>
        <IconButton
          onClick={toggleStructure}
          variant="dark"
          tooltip="Матеріали"
          icon={icon()}
        ></IconButton>
        <Layout>
          {isVisibleMaterials && <MaterialTable></MaterialTable>}
          <Content>
            <AddMaterialForm create={createMaterial}></AddMaterialForm>
            {!isLoading && (
              <Section>
                {userMaterials.length > 0 && (
                  <MaterialList items={userMaterials} />
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
