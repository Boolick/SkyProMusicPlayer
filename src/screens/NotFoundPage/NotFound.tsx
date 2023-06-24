import cn from "classnames";

import styles from "./NotFound.module.css";
import Burger from "../../components/BurgerMenu/Burger";
import Search from "../../components/Search/Search";
import Bar from "../../components/Bar";
import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <>
      <Burger />
      <div className={styles.search}>
        <Search />
      </div>
      <div className={cn(styles.container)}>
        <div className={cn(styles.notFound)}>
          <h1>404</h1>
          <div className={cn(styles.block)}>
            <h2>Страница не найдена</h2>
            <div>
              <img src="/smile_crying.svg" alt="sad" />
            </div>
          </div>
          <p>
            Возможно, она была удалена <br /> или перенесена на другой адрес
          </p>

          <div className="menu__item">
            <NavLink to="/" className={styles.button}>
              <button className={styles.button}>Вернуться на главную</button>
            </NavLink>
          </div>
        </div>
      </div>
      <Bar loading={false} />
    </>
  );
}

export default NotFound;
