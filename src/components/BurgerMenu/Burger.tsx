import { useContext, useState } from "react";
import cn from "classnames";

import styles from "./BurgerMenu.module.css";
import NavBar from "../NavBar";
import { ThemeContext } from "../../Context/ThemeContext";

const [isOpened, setIsOpened] = useState<boolean>(false);
const { theme } = useContext(ThemeContext);

function Burger() {
  return (
    <nav className={styles.main__nav}>
      <svg className="nav__logo logo">
        {theme === "light" ? (
          <use
            className="logo__image"
            xlinkHref="img/icon/sprite.svg#light_logo"
          ></use>
        ) : (
          <use
            className="logo__image"
            xlinkHref="img/icon/sprite.svg#dark_logo"
          ></use>
        )}
      </svg>
      <button onClick={() => setIsOpened(true)} className={styles.button}>
        <span className={styles.burger__line}></span>
        <span className={styles.burger__line}></span>
        <span className={styles.burger__line}></span>
      </button>

      <div
        onClick={() => setIsOpened(false)}
        className={cn(styles.cover, { [styles.coverShow]: isOpened })}
      >
        <div
          className={cn(styles.main__nav_activ, {
            [styles.main__nav]: isOpened,
          })}
        >
          <svg className="nav__logo logo">
            {theme === "light" ? (
              <use
                className="logo__image"
                xlinkHref="img/icon/sprite.svg#light_logo"
              ></use>
            ) : (
              <use
                className="logo__image"
                xlinkHref="img/icon/sprite.svg#dark_logo"
              ></use>
            )}
          </svg>
          <NavBar />
        </div>
      </div>
    </nav>
  );
}

export default Burger;
