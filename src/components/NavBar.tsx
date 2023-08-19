import React from "react";
import { NavLink } from "react-router-dom";
import cn from "classnames";

import ThemeToggleButton from "./ChooseTheme/ChooseTheme";
import { useSelector } from "react-redux";
import { RootState } from "../Store/store";

function NavBar() {
  const token = useSelector((state: RootState) => state.auth.access);
  const activeClassName = "link_active";

  return (
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
          to="/my-playlist"
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
          to="/login-page"
          className={({ isActive }) =>
            cn("menu__link", {
              [activeClassName]: isActive,
            })
          }
        >
          {token ? "Выйти" : "Войти"}
        </NavLink>
      </li>

      <ThemeToggleButton />
    </ul>
  );
}

export default NavBar;
