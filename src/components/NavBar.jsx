import React from "react";
import { NavLink } from "react-router-dom";
import cn from "classnames";

function NavBar() {
  const activeClassName = "underline";

  return (
    <div className="nav__menu menu">
      <ul className="menu__list">
        <li className="menu__item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              cn("menu__link", {
                [activeClassName]: isActive,
              })
            }
          >
            Главное
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink
            to="/Myplaylist"
            className={({ isActive }) =>
              cn("menu__link", {
                [activeClassName]: isActive,
              })
            }
          >
            Мой плейлист
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink
            to="/Login"
            className={({ isActive }) =>
              cn("menu__link", {
                [activeClassName]: isActive,
              })
            }
          >
            Войти
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
