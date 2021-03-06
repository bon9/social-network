import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = ({ isAuth, login, logoutThunk }) => {
  return (
    <header className={classes.header}>
      <img
        src="https://p7.hiclipart.com/preview/968/321/102/telegram-computer-icons-apple-icon-image-format-telegram-icon-enkel-iconset-froyoshark.jpg"
        alt=""
      />
      <div className={classes.loginBlock}>
        {isAuth ? (
          <div>
            {`${login} - `}
            <button onClick={logoutThunk}>Logout</button>
          </div>
        ) : (
          <NavLink to={`/login`}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
