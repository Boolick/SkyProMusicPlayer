import { useContext, useState } from "react";

import styles from "./Search.module.css";
import { ThemeContext } from "../../Context/ThemeContext";

function Search() {
  const [id, setId] = useState("");
  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles.centerblock__search}>
      <svg className={styles.search__svg}>
        {theme === "light" ? (
          <use xlinkHref="img/icon/sprite.svg#icon-search-black"></use>
        ) : (
          <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
        )}
      </svg>

      <input
        data-testid={"input-search"}
        className={styles.search__text}
        type="search"
        placeholder="Поиск"
        name="search"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
    </div>
  );
}

export default Search;
