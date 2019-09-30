import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <ul>
        <li className={s.item}>
          <NavLink to="/profile" activeClassName={s.activeLink}>
            Profile
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/dialogs" activeClassName={s.activeLink}>
            Dialogs
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/test1" activeClassName={s.activeLink}>
            test1
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/test2" activeClassName={s.activeLink}>
            test2
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/test3" activeClassName={s.activeLink}>
            test3
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
