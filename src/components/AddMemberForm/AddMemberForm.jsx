import React, { useState } from "react";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import { validationColor } from "../../services/utility";
import { Button } from "../Button/Button";
import { toast } from "react-toastify";
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
import { searchByEmail } from "../../services";
import MemberList from "../MemberList/MemberList";

const AddMemberForm = ({ company: { companyName } }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [active, setIsActive] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [user, setUser] = useState(null);

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

  const searchUser = (email) => {
    async function search(email) {
      setSearchResult([]);
      try {
        const response = await searchByEmail(email);
        console.log("response: ", response.data);
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
      }
    }
    search(email);
  };

  const handleSubmit = async (values, actions) => {
    // console.log("values: ", values);
    // console.log("actions: ", actions);
    const { resetForm } = actions;
    try {
      setIsLoading(true);

      // пошук співробітника
      searchUser(values.email);

      // resetForm();
      // onClose();
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
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
      {searchResult.length > 0 && (
        <MemberList
          title="Результати пошуку:"
          memders={searchResult}
          variant="search"
        ></MemberList>
      )}
    </div>
  );
};

export default AddMemberForm;
