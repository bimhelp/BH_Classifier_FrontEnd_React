import React from "react";
// Навігація
import { NavLink } from "react-router-dom";
// Компоненти
import Section from "../../components/Section/Section";
// Стилі
import css from "./WelcomePage.module.css";

const WelcomePage = () => {
  return (
    <Section title={"Welcome"}>
      <div className={css.buttonsWrapper}>
        <NavLink className={css.button} to={"/registration"}>
          Registration
        </NavLink>
        <NavLink className={css.button} to={"/login"}>
          LogIn
        </NavLink>
      </div>
    </Section>
  );
};

export default WelcomePage;
