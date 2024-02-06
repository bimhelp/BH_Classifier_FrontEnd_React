import React, { useContext } from "react";
import { authContext as context } from "../../context/authContext";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import { StyledForm, Input, InputWrapper } from "./RegisterForm.styled";
import { Button } from "../Button/Button";
import { validationColor } from "../../services/utility";

// Навігація
import { NavLink } from "react-router-dom";
import css from "./RegistrationForm.module.css";

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
    email: yup.string().email("Invalid email").required("Required"),
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
          <StyledForm className={css.form}>
            <h2>Registration</h2>
            <InputWrapper>
              <label htmlFor="name" className={css.label}>
                Name
              </label>
              <Input
                name="name"
                type="text"
                id="name"
                bordercolor={validationColor(
                  props.errors.name,
                  props.values.name,
                  "rgb(0, 0, 0)"
                )}
              />
              <ErrorMessage name="name" />
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
              <ErrorMessage name="email" />
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
              <ErrorMessage name="password" />
            </InputWrapper>
            <Button type="submit">Send</Button>
            <NavLink className={css.loginBtn} to={"/login"}>
              LogIn
            </NavLink>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};

export default RegistrationForm;
