import React, { useContext } from "react";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
// Навігація
import { Button } from "../Button/Button";
import { NavLink } from "react-router-dom";
import css from "./LoginForm.module.css";
import { StyledForm, Input, InputWrapper } from "./LoginForm.styled";
import { validationColor } from "../../services/utility";
import { authContext as context } from "../../context/authContext";

const LoginForm = () => {
  const { onLogIn } = useContext(context);

  const initialValues = {
    email: "",
    password: "",
  };

  const loginSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Required"),
    password: yup
      .string()
      .required("No password provided.")
      .min(6, "Password is too short - should be 6 chars minimum."),
  });

  const handleSubmit = (values, actions) => {
    const { resetForm } = actions;

    console.log("values: ", values);
    onLogIn(values);
    // console.log("actions: ", actions);

    // Передача даних в батьківський компонент

    // Очистка форми
    resetForm();
    // console.log("форма очищена");
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        {(props) => (
          <StyledForm>
            <h2>LogIn</h2>
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
            <Button className={css.submitBtn} type="submit">
              LogIn
            </Button>
            <NavLink className={css.button} to={"/registration"}>
              Registration
            </NavLink>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
