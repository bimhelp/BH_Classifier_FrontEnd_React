import React, { useEffect, useState } from "react";
import { deleteCompany, getAllCompanys, updateCompany } from "../../services";
import { Button } from "../../components/Button/Button";
import { toast } from "react-toastify";
import { BarLoader } from "react-spinners";
import { BsBuildingFillAdd } from "react-icons/bs";

import Section from "../../components/Section/Section";
import CompanyList from "../../components/CompanyList/CompanyList";
import { Modal } from "../../components/Modal/Modal";
import AddCompanyForm from "../../components/AddCompanyForm/AddCompanyForm";
import { addCompany } from "../../services";

const CompanysPage = () => {
  const [companys, setCopanys] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  // const [deleteLoading, setDeleteLoading] = useState(false);

  // Запит по компанії
  useEffect(() => {
    const controller = new AbortController();

    async function allCompanys() {
      try {
        setIsLoading(true);

        const response = await getAllCompanys(controller.signal);
        setCopanys(response.data);
      } catch (error) {
        toast.error("Не вдалось завантажити компанії");
      } finally {
        setIsLoading(false);
      }
    }
    allCompanys();
  }, []);

  // Створення компанії
  function createCompany(company) {
    const controller = new AbortController();
    async function createCompany(newCompany) {
      try {
        const response = await addCompany(newCompany, controller.signal);
        setCopanys([...companys, response.data]);
        toast.success("Компанію успішно створено");
      } catch (error) {
        toast.error("Не вдалось створити компанію");
      }
    }
    createCompany(company);
    return () => {
      controller.abort();
    };
  }

  // Відкриття форми додавання
  const addCompanyToggle = () => {
    setModalOpen(!modalOpen);
  };

  // Редагування компанії
  function editCompany(id, company) {
    const controller = new AbortController();
    async function editCompany(id, company) {
      try {
        const response = await updateCompany(id, company, controller.signal);
        // якщо id співпадають то замінюємо елемент тим що повернув бекенд, в іншому випадку залишаємо старий елемент
        setCopanys(
          companys.map((company) =>
            company._id === id ? response.data : company
          )
        );
        toast.success("Компанію успішно оновлено");
      } catch (error) {
        toast.error("Не вдалось оновити компанію");
      }
    }
    editCompany(id, company);
    return () => {
      controller.abort();
    };
  }

  // Видалення компанії
  async function handleDeleteCompany(id) {
    try {
      // setDeleteLoading(true);
      const response = await deleteCompany(id);
      if (response) {
        toast.info("Компанія успішно видалена");
        setCopanys(companys.filter((company) => company._id !== id));
      }
    } catch (error) {
      toast.error("Не вдалось видалити компанію");
    } finally {
      // setDeleteLoading(false);
    }
  }

  return (
    <Section>
      {isLoading ? (
        <BarLoader color="#125b56" width="100%" />
      ) : (
        <CompanyList
          items={companys}
          edit={editCompany}
          handleDelete={handleDeleteCompany}
        />
      )}

      <Button icon={BsBuildingFillAdd} onClick={addCompanyToggle}>
        Додати компанію
      </Button>

      {modalOpen && (
        <Modal onClose={addCompanyToggle}>
          <AddCompanyForm onClose={addCompanyToggle} create={createCompany} />
        </Modal>
      )}
    </Section>
  );
};

export default CompanysPage;
