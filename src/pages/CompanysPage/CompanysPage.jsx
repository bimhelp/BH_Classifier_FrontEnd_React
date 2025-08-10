import React, { useEffect, useState } from "react";
import { deleteCompany, getAllCompanys, updateCompany } from "../../services";
import { Button } from "../../components/Button/Button";
import { toast } from "react-toastify";
import { BarLoader } from "react-spinners";
import { BsBuildingFillAdd } from "react-icons/bs";
import Confirm from "../../components/Confirm/Confirm";
import Section from "../../components/Section/Section";
import CompanyList from "../../components/CompanyList/CompanyList";
import { Modal } from "../../components/Modal/Modal";
import AddCompanyForm from "../../components/AddCompanyForm/AddCompanyForm";
import { addCompany } from "../../services";
import { ConfirmButtons } from "../../components/CompanyList/CompanyList.styled";
import { PulseLoader } from "react-spinners";

const CompanysPage = () => {
  const [companys, setCopanys] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [delitingCandidate, setDelitingCandidate] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

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
        console.log("status:", error.response?.status);
        console.log("message:", error.response?.data?.message);
        switch (error.response?.data?.message) {
          case "Controller: Email not found":
            toast.error(
              "Компанія не створена. Не вдалось знайти email керівника компанії"
            );
            break;
          case "Controller: Email used in other company":
            toast.error(
              "Компанія не створена. Email вже використовується в іншій компанії"
            );
            break;

          default:
            toast.error("Не вдалось створити компанію");
            break;
        }
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
    console.log("edit func id: ", id);
    console.log("company: ", company);
    const controller = new AbortController();
    async function editCompany(id, company) {
      console.log("edit function id: ", id);

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
        switch (error.response?.data?.message) {
          case "Controller: Email not found":
            toast.error(
              "Компанія не оновлена. Не вдалось знайти email керівника компанії"
            );
            break;
          case "Controller: Email used in other company":
            toast.error(
              "Компанія не оновлена. Email вже використовується в іншій компанії"
            );
            break;

          default:
            toast.error("Не вдалось оновити компанію");
            break;
        }
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
      setDeleteLoading(true);
      const response = await deleteCompany(id);
      if (response) {
        toast.info("Компанія успішно видалена");
        setCopanys(companys.filter((company) => company._id !== id));
        setConfirmOpen(false);
      }
    } catch (error) {
      toast.error("Не вдалось видалити компанію");
    } finally {
      setDeleteLoading(false);
    }
  }

  // Відкриття меню підтвердження
  const confirmDelete = (id) => {
    setDelitingCandidate(companys.filter((item) => item._id === id)[0]);

    setConfirmOpen(id);
  };

  // Тогл меню підтвердження
  const toggleConfirm = () => {
    setConfirmOpen(!confirmOpen);
  };

  return (
    <>
      <Section>
        {isLoading ? (
          <BarLoader color="#125b56" width="100%" />
        ) : (
          <CompanyList
            items={companys}
            edit={editCompany}
            handleDelete={confirmDelete}
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
      {confirmOpen && (
        <Confirm
          onClose={toggleConfirm}
          title="Ви хочете видалити компанію? "
          element={delitingCandidate.companyName}
        >
          <ConfirmButtons>
            <Button
              onClick={() => handleDeleteCompany(confirmOpen)}
              role="warning"
            >
              Видалити
              {deleteLoading && <PulseLoader color="#000000" size={5} />}
            </Button>
            <Button onClick={toggleConfirm}>Залишити</Button>
          </ConfirmButtons>
        </Confirm>
      )}
    </>
  );
};

export default CompanysPage;
