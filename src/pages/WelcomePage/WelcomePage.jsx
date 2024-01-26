import React from "react";
// Навігація
import { NavLink } from "react-router-dom";
// Компоненти
import Section from "../../components/Section/Section";
// import Button from "../../components/Button/Button";
// import { IoMdRadioButtonOn } from "react-icons/io";
// import { GiFastForwardButton } from "react-icons/gi";

// Стилі
import css from "./WelcomePage.module.css";

const WelcomePage = () => {
  return (
    <Section title={"Welcome"}>
      {/* <Button icon={IoMdRadioButtonOn}>Test</Button>
      <Button icon={GiFastForwardButton}>Test2</Button>
      <Button type="submit" disabled>
        Test Submit
      </Button> */}
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
