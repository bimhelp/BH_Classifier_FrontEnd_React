import React, { useEffect, useContext } from "react";
import { useParams, useLocation } from "react-router-dom";
import { authContext as context } from "../../context/authContext";
import { token } from "../../services/api";

import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import { validationColor } from "../../services/utility";
import { Button } from "../Button/Button";
import css from "../RegistrationForm/RegistrationForm.module.css";
import {
  StyledForm,
  Input,
  InputWrapper,
  ErrorMessageStyled,
  FormButtonWrapper,
} from "../RegistrationForm/RegisterForm.styled";

const CompleteRegistrationForm = () => {
  // const [token, setTokenState] = useState(null);
  const { onCompleteRegistration, setToken } = useContext(context);
  const { userId } = useParams();
  const location = useLocation();

  const initialValues = {
    lastName: "",
    company: "",
    jobRole: "",
    phone: "",
  };

  const registerSchema = yup.object().shape({
    lastName: yup
      .string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    company: yup
      .string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    jobRole: yup
      .string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    phone: yup
      .string()
      .matches(/^\d+$/, "Invalid phone number") // Перевірка на наявність тільки цифр
      .min(10, "Too short phone number") // Мінімальна довжина номера
      .max(15, "Too long phone number") // Максимальна довжина номера
      .required("Required"), // Обов'язкове поле
  });

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tokenParam = searchParams.get("token");
    console.log("tokenParam: ", tokenParam);

    if (tokenParam) {
      setToken(tokenParam);
      token.set(tokenParam);
      // setTokenState(tokenParam);
    }
  }, [location, setToken]);

  const handleSubmit = (values, actions) => {
    // console.log("actions: ", actions);
    // console.log("values: ", values);
    const { resetForm } = actions;

    const userCredentials = {
      userId: userId,
      ...values,
    };

    // Передача даних в контекст (глобальний стейт)
    onCompleteRegistration(userCredentials);

    // Очистка форми
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={handleSubmit}
      >
        {(props) => (
          <StyledForm>
            <h2>Complete registration</h2>

            <InputWrapper>
              <label htmlFor="lastName" className={css.label}>
                Last Name
              </label>
              <Input
                name="lastName"
                type="text"
                id="lastName"
                // autoFocus
                bordercolor={validationColor(
                  props.errors.lastName,
                  props.values.lastName,
                  "rgb(0, 0, 0)"
                )}
              />
              <ErrorMessage
                name="lastName"
                render={(msg) => <ErrorMessageStyled>{msg}</ErrorMessageStyled>}
              />
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="company" className={css.label}>
                Company
              </label>
              <Input
                name="company"
                type="text"
                id="company"
                // autoFocus
                bordercolor={validationColor(
                  props.errors.company,
                  props.values.company,
                  "rgb(0, 0, 0)"
                )}
              />
              <ErrorMessage
                name="company"
                render={(msg) => <ErrorMessageStyled>{msg}</ErrorMessageStyled>}
              />
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="jobRole" className={css.label}>
                Job Role
              </label>
              <Input
                name="jobRole"
                type="text"
                id="jobRole"
                // autoFocus
                bordercolor={validationColor(
                  props.errors.jobRole,
                  props.values.jobRole,
                  "rgb(0, 0, 0)"
                )}
              />
              <ErrorMessage
                name="jobRole"
                render={(msg) => <ErrorMessageStyled>{msg}</ErrorMessageStyled>}
              />
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="phone" className={css.label}>
                Phone
              </label>
              <Input
                name="phone"
                type="phone"
                id="phone"
                bordercolor={validationColor(
                  props.errors.phone,
                  props.values.phone,
                  "rgb(0, 0, 0)"
                )}
              />
              <ErrorMessage
                name="phone"
                render={(msg) => <ErrorMessageStyled>{msg}</ErrorMessageStyled>}
              />
            </InputWrapper>

            <FormButtonWrapper>
              <Button type="submit">Send</Button>
            </FormButtonWrapper>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};

export default CompleteRegistrationForm;
