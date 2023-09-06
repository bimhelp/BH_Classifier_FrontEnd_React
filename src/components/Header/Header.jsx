import React from "react";
import css from "./Header.module.css";
import Container from "../Container/Container";
// import logo from "../../images/Triangle.svg";
import Menu from "../Menu/Menu";

const Header = () => {
  return (
    <div className={css.headerWrapper}>
      <Container>
        <div className={css.header}>
          {/* <img src={logo} className={css.headerLogo} alt="logo" /> */}
          <Menu />
        </div>
      </Container>
    </div>
  );
};

export default Header;
