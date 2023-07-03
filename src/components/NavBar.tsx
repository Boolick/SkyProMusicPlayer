import { NavLink } from "react-router-dom";
import cn from "classnames";

function NavBar() {
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
          Войти
        </NavLink>
      </li>
    </ul>
  );
}

export default NavBar;
