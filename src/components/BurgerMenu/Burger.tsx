import { useState } from "react";
import cn from "classnames";

import styles from "./BurgerMenu.module.css";
import NavBar from "../NavBar";

const [isOpened, setIsOpened] = useState<boolean>(false);
const activeClassName = "underline";

function Burger() {
  return (
    <nav className={styles.main__nav}>
      <div className="nav__logo logo">
        <img className="logo__image" src="img/logo.png" alt="logo" />
      </div>
      <button onClick={() => setIsOpened(true)} className={styles.button}>
        <span className={styles.burger__line}></span>
        <span className={styles.burger__line}></span>
        <span className={styles.burger__line}></span>
      </button>
      <div
        onClick={() => setIsOpened(false)}
        className={cn(styles.cover, { [styles.coverShow]: isOpened })}
      >
        <div className={cn(styles.main__nav, { [styles.main__nav]: isOpened })}>
          <div className="nav__logo logo">
            <img className="logo__image" src="img/logo.png" alt="logo" />
          </div>
          <NavBar />
        </div>
      </div>
    </nav>
  );
}

export default Burger;
