import { useState } from "react";

import styles from "./Search.module.css";
import { useGetTracksByIdQuery } from "../trackApi";

function Search() {
  const [id, setId] = useState("");
  const { data: tracks, isLoading } = useGetTracksByIdQuery(id);

  return (
    <div className={styles.centerblock__search}>
      <svg className={styles.search__svg}>
        <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
      </svg>
      <input
        className={styles.search__text}
        type="search"
        placeholder="Поиск"
        name="search"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      {/* Отображение результатов поиска */}
      {/* {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {tracks?.map((track) => (
            <li key={track.id}>{track.author}</li>
          ))}
        </ul>
      )} */}
    </div>
  );
}

export default Search;
