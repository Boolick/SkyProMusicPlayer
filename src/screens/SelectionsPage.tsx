import React from "react";

import styles from "../components/Item/Item.module.css";
import Burger from "../components/BurgerMenu/Burger";
import Bar from "../components/Bar";

import { useGetSelectionByIdQuery } from "../components/trackApi"; // импортируйте хук из вашего API
import Search from "../components/Search/Search";

interface SelectionsPageProps {
  selectionId: number;
}

function SelectionsPage({ selectionId }: SelectionsPageProps) {
  const {
    data: selection,
    isLoading,
    isError,
  } = useGetSelectionByIdQuery(selectionId);

  return (
    <>
      <Burger />
      <div className="main__centerblock centerblock">
        <Search />
        <h2 className="centerblock__h2">Треки из подборки #{selectionId}</h2>
        <main>
          {selection && (
            <ul className={styles.playlist}>
              {selection.items.map((track) => (
                <li key={track.id} className={styles.playlist__item}>
                  <div className={styles.track__title_image}>
                    <svg className={styles.track__title_svg}>
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div className={styles.track__title_text}>
                    <a className={styles.track__title_link} href="http://">
                      {track.name}
                    </a>
                  </div>
                  <div className={styles.track__author}>
                    <a className={styles.track__author_link} href="http://">
                      {track.author}
                    </a>
                  </div>
                  <div className={styles.track__album}>
                    <a className={styles.track__album_link} href="http://">
                      {track.album}
                    </a>
                  </div>
                  <div className={styles.track__time}>
                    <svg className={styles.track__heart}>
                      <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                    </svg>

                    <span className={styles.track__time_text}>
                      {track.duration_in_seconds}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </main>
      </div>
      <Bar />
    </>
  );
}

export default SelectionsPage;
