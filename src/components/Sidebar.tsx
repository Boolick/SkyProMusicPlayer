import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Sidebar() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  });

  return (
    <div className="main__sidebar sidebar">
      <div className="sidebar__personal">
        <p className="sidebar__personal-name">Sergey.Ivanov</p>
        <div className="sidebar__avatar"></div>
      </div>
      <div className="sidebar__block">
        <div className="sidebar__list">
          <div className="sidebar__item">
            {loading ? (
              <Skeleton
                width={250}
                height={150}
                baseColor="#313131"
                highlightColor="#181818"
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
                baseColor="#313131"
                highlightColor="#181818"
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
                baseColor="#313131"
                highlightColor="#181818"
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
