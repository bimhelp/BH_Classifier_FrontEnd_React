import React from "react";
import Section from "../../components/Section/Section";
import AddMaterialForm from "../../components/AddMaterialForm/AddMaterialForm";

const AddItemPage = () => {
  return (
    <Section>
      <AddMaterialForm></AddMaterialForm>
      <p>(Вибір категорії як на олх)</p>
      <p>Список доданих матеріалів</p>
      <p>(на елементах дві кнопки, редагувати і видалити)</p>
    </Section>
  );
};

export default AddItemPage;
