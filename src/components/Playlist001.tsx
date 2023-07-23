import React, { useState } from "react";
import { useGetSelectionByIdQuery, useGetSelectionsQuery } from "./trackApi"; // импортируйте хук из вашего API
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";

function SelectionsBar() {
  const [selectionId, setSelectionId] = useState(1); // состояние для хранения id текущей выбранной подборки
  const { data: selections, isLoading, isError } = useGetSelectionsQuery();
  const { data: selection } = useGetSelectionByIdQuery(selectionId);

  const images = [
    "img/playlist01.png",
    "img/playlist02.png",
    "img/playlist03.png",
  ];

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (isError) {
    return <div>Ошибка при загрузке данных</div>;
  }

  return (
    <div>
      <h1>Подборки</h1>
      <nav>
        <ul>
          {selections?.map((selection) => (
            <li key={selection.id}>
              <button onClick={() => setSelectionId(selection.id)}>
                <div className="sidebar__item">
                  {isLoading ? (
                    <Skeleton
                      width={250}
                      height={150}
                      baseColor="var(--color-img)"
                      highlightColor="var(--color-background)"
                    />
                  ) : (
                    <NavLink className="sidebar__link" to="/selections-page">
                      Главное
                      <img
                        className="sidebar__img"
                        src={images[selection.id % images.length]}
                        alt={`Подборка #${selection.id}`}
                      />
                    </NavLink>
                  )}
                </div>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <h2>Треки из подборки #{selectionId}</h2>
        {selection && (
          <ul>
            {selection.items.map((track) => (
              <li key={track.id}>
                {track.name} - {track.author}
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}

export default SelectionsBar;
