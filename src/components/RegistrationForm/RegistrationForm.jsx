import React, { useContext } from "react";
import { authContext as context } from "../../context/authContext";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import { validationColor } from "../../services/utility";
import { Button } from "../Button/Button";
import css from "./RegistrationForm.module.css";
import {
  StyledForm,
  Input,
  InputWrapper,
  StyledLink,
  ErrorMessageStyled,
  FormButtonWrapper,
} from "./RegisterForm.styled";

const RegistrationForm = () => {
  const { onRegister } = useContext(context);

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const registerSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
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
    email: yup.string().email("Invalid email").required("Required"),
    phone: yup
      .string()
      .matches(/^\d+$/, "Invalid phone number") // Перевірка на наявність тільки цифр
      .min(10, "Too short phone number") // Мінімальна довжина номера
      .max(15, "Too long phone number") // Максимальна довжина номера
      .required("Required"), // Обов'язкове поле
    password: yup
      .string()
      .min(6, "Your password is short")
      .max(16, "Your password is to long")
      .matches(/[1-9]/, "Your password is little secure. Add a number!")
      .matches(
        /[a-zа-яA-ZА-ЯіїЇІєЄ]/,
        "Your password is little secure. Add a letter!"
      )
      .matches(/^[a-zа-яA-ZА-ЯіїЇІЄє1-9]/, "Enter a valid Password*")
      .required("Enter a Password*"),
  });

  const handleSubmit = (values, actions) => {
    // console.log("actions: ", actions);
    // console.log("values: ", values);
    const { resetForm } = actions;

    // Передача даних в контекст (глобальний стейт)
    onRegister(values);

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
            <h2>Registration</h2>
            <InputWrapper>
              <label htmlFor="name" className={css.label}>
                Name
              </label>
              <Input
                name="name"
                type="text"
                id="name"
                autoFocus
                bordercolor={validationColor(
                  props.errors.name,
                  props.values.name,
                  "rgb(0, 0, 0)"
                )}
              />
              <ErrorMessage
                name="name"
                render={(msg) => <ErrorMessageStyled>{msg}</ErrorMessageStyled>}
              />
            </InputWrapper>
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
            <InputWrapper>
              <label htmlFor="email" className={css.label}>
                Email
              </label>
              <Input
                name="email"
                type="email"
                id="email"
                bordercolor={validationColor(
                  props.errors.email,
                  props.values.email,
                  "rgb(0, 0, 0)"
                )}
              />
              <ErrorMessage
                name="email"
                render={(msg) => <ErrorMessageStyled>{msg}</ErrorMessageStyled>}
              />
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="password" className={css.label}>
                Password
              </label>
              <Input
                name="password"
                type="password"
                id="password"
                bordercolor={validationColor(
                  props.errors.password,
                  props.values.password,
                  "rgb(0, 0, 0)"
                )}
              />
              <ErrorMessage
                name="password"
                render={(msg) => <ErrorMessageStyled>{msg}</ErrorMessageStyled>}
              />
            </InputWrapper>
            <FormButtonWrapper>
              <Button type="submit">Send</Button>
              <StyledLink to={"/login"}>LogIn</StyledLink>
            </FormButtonWrapper>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};

export default RegistrationForm;
