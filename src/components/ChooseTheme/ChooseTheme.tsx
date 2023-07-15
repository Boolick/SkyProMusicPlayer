import * as React from "react";

import styles from "./ChooseTheme.module.css";
import { useTheme } from "../../Context/ThemeContext";

const ThemeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <svg className={styles.theme_button} onClick={toggleTheme}>
      {theme === "light" ? (
        <use
          className={styles.them_icon}
          xlinkHref="img/icon/sprite.svg#dark_theme"
        ></use>
      ) : (
        <use
          className={styles.them_icon}
          xlinkHref="img/icon/sprite.svg#light_theme"
        ></use>
      )}
    </svg>
  );
};

export default ThemeToggleButton;
