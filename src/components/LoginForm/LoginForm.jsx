import React, { useState } from "react";
// Навігація
import { NavLink } from "react-router-dom";
import css from "./LoginForm.module.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleInputChange = (event) => {
    // console.log(event.target.value);
    const { name, value } = event.target;
    // console.log("input name: ", name);

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit:", email, password);

    // Передача даних в батьківський компонент
    // addStiker(title, email);

    // Очистка форми
    setEmail("");
    setPassword("");
    // console.log("форма очищена");
  };
  return (
    <div className={css.formWrapper}>
      <h2>LogIn</h2>
      <form onSubmit={handleSubmit} className={css.form}>
        <div className={css.inputWrapper}>
          <label htmlFor="email" className={css.label}>
            Email
          </label>
          <input
            name="email"
            type="text"
            value={email}
            onChange={handleInputChange}
            className={css.input}
            id="email"
          />
        </div>
        <div className={css.inputWrapper}>
          <label htmlFor="password" className={css.label}>
            Password
          </label>
          <input
            name="password"
            type="text"
            value={password}
            onChange={handleInputChange}
            className={css.input}
            id="password"
          />
        </div>
      </form>
      <button className={css.submitBtn} type="submit">
        Send
      </button>
      <NavLink className={css.button} to={"/registration"}>
        Registration
      </NavLink>
    </div>
  );
};

export default LoginForm;
