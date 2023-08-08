import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css";
import { ThemeContext } from "../Context/ThemeContext";

function Sidebar() {
  const { theme } = React.useContext(ThemeContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  });

  return (
    <div className="main__sidebar sidebar">
      <div className="sidebar__personal">
        <svg className="sidebar__avatar">
          {theme === "light" ? (
            <use
              className="sidebar__avatar"
              xlinkHref="img/icon/sprite.svg#icon_avatar_light"
            ></use>
          ) : (
            <use
              className="sidebar__avatar"
              xlinkHref="img/icon/sprite.svg#icon_avatar_dark"
            ></use>
          )}
        </svg>
      </div>

      <div className="sidebar__block">
        <div className="sidebar__list">
          <div className="sidebar__item">
            {loading ? (
              <Skeleton
                width={250}
                height={150}
                baseColor="var(--color-img)"
                highlightColor="var(--color-background)"
              />
            ) : (
              <a className="sidebar__link" href="#">
                <img
                  className="sidebar__img"
                  src="img/playlist01.png"
                  alt="day's playlist"
                />
              </a>
            )}
          </div>
          <div className="sidebar__item">
            {loading ? (
              <Skeleton
                width={250}
                height={150}
                baseColor="var(--color-img)"
                highlightColor="var(--color-background)"
              />
            ) : (
              <a className="sidebar__link" href="#">
                <img
                  className="sidebar__img"
                  src="img/playlist02.png"
                  alt="day's playlist"
                />
              </a>
            )}
          </div>
          <div className="sidebar__item">
            {loading ? (
              <Skeleton
                width={250}
                height={150}
                baseColor="var(--color-img)"
                highlightColor="var(--color-background)"
              />
            ) : (
              <a className="sidebar__link" href="#">
                <img
                  className="sidebar__img"
                  src="img/playlist03.png"
                  alt="day's playlist"
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
