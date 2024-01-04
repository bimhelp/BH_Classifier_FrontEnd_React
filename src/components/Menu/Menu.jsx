import React from "react";
import css from "./Menu.module.css";
// Навігація по сайту
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav className={css.navigation}>
      <NavLink to="table" className={css.menuItem}>
        00000000-0
      </NavLink>

      {/* <NavLink to="add" className={css.menuItem}>
        Add Item
      </NavLink>
      <NavLink to="cabinet" className={css.menuItem}>
        Cabinet
      </NavLink> */}
    </nav>
  );
};

export default Menu;
