import React from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li className={classes.item}>
          <NavLink to="/profile" activeClassName={classes.activeLink}>
            Profile
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink to="/dialogs" activeClassName={classes.activeLink}>
            Dialogs
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink to="/test1" activeClassName={classes.activeLink}>
            test1
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink to="/test2" activeClassName={classes.activeLink}>
            test2
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink to="/test3" activeClassName={classes.activeLink}>
            test3
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
