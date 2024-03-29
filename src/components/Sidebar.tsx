import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { NavLink } from "react-router-dom";

import { useGetSelectionsQuery } from "./trackApi";
import "react-loading-skeleton/dist/skeleton.css";
import { ThemeContext } from "../Context/ThemeContext";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useTrackPlayer } from "./PlayTrack";
import { RootState } from "../Store/store";

function Sidebar() {
  const { theme } = React.useContext(ThemeContext);
  const [selectionId, setSelectionId] = useState(1); // состояние для хранения id текущей выбранной подборки
  const { data: selections, isLoading, error } = useGetSelectionsQuery();
  const userName = useSelector((state: RootState) => state.auth.email);
  console.log(userName);

  if (isLoading) {
    return <SkeletonTheme />;
  }

  if (error) return <div>Error:{error.toString()}</div>;

  return (
    <div className="main__sidebar sidebar">
      <div className="sidebar__personal">
        <p className="sidebar__personal-name">{userName}</p>
        <svg className="sidebar__avatar">
          {theme === "light" ? (
            <use
              className="sidebar__avatar"
              xlinkHref="/img/icon/sprite.svg#icon_avatar_light"
            ></use>
          ) : (
            <use
              className="sidebar__avatar"
              xlinkHref="/img/icon/sprite.svg#icon_avatar_dark"
            ></use>
          )}
        </svg>
      </div>

      <nav className="sidebar__block">
        <ul className="sidebar__list">
          {selections?.map((selection) => (
            <li key={selection.id} className="sidebar__item">
              <div onClick={() => setSelectionId(selection.id)}>
                <NavLink
                  className="sidebar__link"
                  to={`/selections-page/${selection.id}`}
                >
                  {isLoading ? (
                    <Skeleton
                      count={1}
                      width={250}
                      height={150}
                      baseColor="var(--color-img)"
                      highlightColor="var(--color-background)"
                    />
                  ) : (
                    <img
                      className="sidebar__img"
                      src={`/img/playlist0${selection.id}.png`}
                      alt={`Подборка #${selection.id}`}
                    />
                  )}
                </NavLink>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
