import React, { useState } from "react";
import Section from "../../components/Section/Section";
import AddMaterialForm from "../../components/AddMaterialForm/AddMaterialForm";
import MaterialTable from "../../components/MaterialTable/MaterialTable";
import { IconButton } from "../../components/Button/Button";
import { Layout, Content } from "./AddItemPage.styled";
import { TbLayoutSidebarLeftExpandFilled } from "react-icons/tb";
import { TbLayoutSidebarRightExpandFilled } from "react-icons/tb";
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
            <AddMaterialForm></AddMaterialForm>
          </Content>
        </Layout>
        <p>Список доданих матеріалів</p>
        <p>(на елементах дві кнопки, редагувати і видалити)</p>
      </Section>
    </>
  );
};

export default AddItemPage;
