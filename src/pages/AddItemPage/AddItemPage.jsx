import React, { useState } from "react";
import Section from "../../components/Section/Section";
import AddMaterialForm from "../../components/AddMaterialForm/AddMaterialForm";
import MaterialTable from "../../components/MaterialTable/MaterialTable";
import { IconButton } from "../../components/Button/Button";
import { Layout, Content } from "./AddItemPage.styled";
import { TbLayoutSidebarLeftExpandFilled } from "react-icons/tb";
import { TbLayoutSidebarRightExpandFilled } from "react-icons/tb";
import { toast } from "react-toastify";
import { addMaterial } from "../../services";
const AddItemPage = () => {
  const [isVisibleMaterials, setIsVisibleMaterials] = useState(false);

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
        const response = await addMaterial(newMaterial, controller.signal);
        console.log("response: ", response.data);
        toast.success("Матеріал успішно створено");
        // setNewMaterial(response.data);
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
          </Content>
        </Layout>
        <p>Список доданих матеріалів</p>
        <p>(на елементах дві кнопки, редагувати і видалити)</p>
      </Section>
    </>
  );
};

export default AddItemPage;
