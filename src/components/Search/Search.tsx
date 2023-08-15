import { useContext, useState } from "react";
import { setSearchTerm } from "../../Store/Actions/SearchSlice";
import styles from "./Search.module.css";

import { ThemeContext } from "../../Context/ThemeContext";
import { useDispatch } from "react-redux";

function Search() {
  const [id, setId] = useState("");
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setId(value);
    dispatch(setSearchTerm(value));
  };

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
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default Search;
