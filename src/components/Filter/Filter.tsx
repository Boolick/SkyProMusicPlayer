import React, { useState } from "react";
import styles from "./Filter.module.css";
import cn from "classnames";
import Checkboxes from "./FilterButtons/Checkboxes";
import { Track } from "../Request/Request";
import TrackAuthor from "../TrackAuthor/TrackAuthor";
import Genres from "../Genres/Genres";

interface FilterProps {
  tracks: Track[];
}
const Filter: React.FC<FilterProps> = ({ tracks }) => {
  // Хук состояния для отслеживания текущего открытого всплывающего окна
  const [activePopup, setActivePopup] = useState<string | null>(null);

  // Функция для обработки клика по кнопке фильтра
  const handleFilterClick = (popupId: string) => {
    setActivePopup(activePopup === popupId ? null : popupId);
  };

  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>

      {/* Кнопки фильтров */}
      <div className={styles.filter_container}>
        <div
          onClick={() => handleFilterClick("artists-popup")}
          className={cn(styles.filter__button, {
            [styles.filter__button_active]: activePopup === "artists-popup",
          })}
        >
          исполнителю
        </div>
        <div
          id="artists-popup"
          className={cn(styles.popup, {
            [styles.popup__active]: activePopup === "artists-popup",
          })}
        >
          <div>
            <TrackAuthor />
          </div>
        </div>
      </div>

      <div className={styles.filter_container}>
        <div
          onClick={() => handleFilterClick("years-popup")}
          className={cn(styles.filter__button, {
            [styles.filter__button_active]: activePopup === "years-popup",
          })}
        >
          году
        </div>
        <div
          id="years-popup"
          className={cn(styles.popup, {
            [styles.popup__active]: activePopup === "years-popup",
          })}
        >
          <Checkboxes labels={["Более новые", "Более старые"]} />
        </div>
      </div>
      <div className={styles.filter_container}>
        <div
          onClick={() => handleFilterClick("genres-popup")}
          className="filter__button button-genre _btn-text"
        >
          жанру
        </div>
        <div
          id="genres-popup"
          className={cn(styles.popup, {
            [styles.popup__active]: activePopup === "genres-popup",
          })}
        >
          <Genres />
        </div>
      </div>
    </div>
  );
};

export default Filter;
