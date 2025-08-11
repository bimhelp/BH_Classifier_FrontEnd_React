import React, { useState, useEffect } from "react";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import { validationColor } from "../../services/utility";
import { Button } from "../Button/Button";
import { BarLoader } from "react-spinners";
import { toast } from "react-toastify";
import { addCompanyMember, removeCompanyMember } from "../../services";
import {
  StyledForm,
  FormTitle,
  InputWrapper,
  MessageVrapper,
  Input,
  TextArea,
  ErrorMessageStyled,
  ButtonWrapper,
} from "../CommonFormStyles/CommonFormStyles.styled";
import { PulseLoader } from "react-spinners";
import { getAllCompanyTeam, searchByEmail } from "../../services";
import MemberList from "../MemberList/MemberList";

const AddMemberForm = ({ company: { _id: companyId, companyName } }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [active, setIsActive] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [team, setTeam] = useState([]);
  const [user, setUser] = useState(null);

  // Запит по користувачів компанії
  useEffect(() => {
    const controller = new AbortController();
    async function getTeam(companyId) {
      setIsLoading(true);
      try {
        const response = await getAllCompanyTeam(companyId, controller.signal);

        setTeam(response.data);
      } catch (error) {
        toast.error("Не вдалось завантажити список співробітників");
      } finally {
        setIsLoading(false);
      }
    }
    getTeam(companyId);
    return () => {
      controller.abort();
    };
  }, []);

  let initialValues = {
    email: "",
  };

  // Схема валідації
  const addMemberSchema = yup.object().shape({
    email: yup
      .string()
      .email("Invalid email")
      .required("Це обов'язкове поле, введіть email співробітника"),
  });

  // Функція пошуку користувача по email для додавання до компанії
  const searchUser = (email) => {
    async function search(email) {
      setSearchResult([]);
      setIsLoading(true);
      try {
        const response = await searchByEmail(email);
        // console.log("response: ", response.data);
        if (response.data.length > 0) {
          setSearchResult(response.data);
          toast.success(`Знайдено ${response.data.length} користувачів`, {
            autoClose: 3000,
          });
        } else {
          toast.error(`Не вдалось знайти жодного користувача`, {
            autoClose: 3000,
          });
        }
      } catch (error) {
        toast.error(`Не вдалось знайти ${email}`, { autoClose: 3000 });
      } finally {
        setIsLoading(false);
      }
    }
    search(email);
  };

  // Функція запуску пошуку
  const handleSubmit = async (values, actions) => {
    // console.log("values: ", values);
    // console.log("actions: ", actions);
    const { resetForm } = actions;
    try {
      setIsLoading(true);

      // пошук співробітника
      searchUser(values.email);

      resetForm();
      // onClose();
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  // Функція додавання користувача до компанії
  const addMemberToCompany = (id, email) => {
    // зробити запит приєднання до компанії
    async function addMember(companyId, email) {
      try {
        const result = await addCompanyMember(companyId, email);
        const newMember = {
          _id: result.data._id,
          name: result.data.name,
          lastName: result.data.lastName,
          email: result.data.email,
        };

        // додати в список команди
        setTeam([...team, newMember]);
      } catch (error) {
        toast.error(`Не вдалось додати користувача ${email} до компанії`, {
          autoClose: 3000,
        });
      }
    }

    // очистити список пошуку
    setSearchResult([]);

    addMember(id, email);
  };

  // Функція видалення користувача з компанії
  const removeMemberFromCompany = (id, email) => {
    // зробити запит видалення з компанії
    async function removeMember(companyId, email) {
      try {
        const result = await removeCompanyMember(companyId, email);

        // видалити зі  списоку команди
        setTeam(team.filter((member) => member.email !== result.data.email));
      } catch (error) {
        toast.error(`Не вдалось видалити користувача ${email} з компанії`, {
          autoClose: 3000,
        });
      }
    }

    removeMember(id, email);
  };

  return (
    <div>
      <FormTitle>
        Додати співробітника до компанії{" "}
        <span style={{ background: "yellow" }}>"{companyName}"</span>
      </FormTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={addMemberSchema}
        onSubmit={handleSubmit}
      >
        {(props) => (
          <StyledForm>
            <InputWrapper>
              <MessageVrapper>
                <label htmlFor="email">Знайти співробітника</label>
                <ErrorMessage
                  name="email"
                  render={(msg) => (
                    <ErrorMessageStyled>{msg}</ErrorMessageStyled>
                  )}
                ></ErrorMessage>
              </MessageVrapper>
              <TextArea
                name="email"
                id="email"
                placeholder="Введіть email співробітника"
                type="email"
                bordercolor={validationColor(
                  props.errors.email,
                  props.values.email
                )}
              ></TextArea>
            </InputWrapper>

            <ButtonWrapper>
              <Button
                type="submit"
                disabled={Object.keys(props.errors).length > 0}
                isLoading={true}
              >
                Знайти
                {isLoading && <PulseLoader color="#ffffff" size={5} />}
              </Button>
            </ButtonWrapper>
          </StyledForm>
        )}
      </Formik>
      {isLoading ? (
        <BarLoader color="#125b56" width="100%" />
      ) : (
        searchResult.length > 0 && (
          <>
            <MemberList
              title="Результати пошуку:"
              members={searchResult}
              companyId={companyId}
              add={addMemberToCompany}
              remove={removeMemberFromCompany}
              variant="search"
            ></MemberList>
          </>
        )
      )}
      {isLoading ? (
        <BarLoader color="#125b56" width="100%" />
      ) : (
        <MemberList
          title="Список співробітників"
          members={team}
          companyId={companyId}
          add={addMemberToCompany}
          remove={removeMemberFromCompany}
        ></MemberList>
      )}
    </div>
  );
};

export default AddMemberForm;
