import React, { useEffect, useState } from "react";
import { Track } from "../Request/Request";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./Item.module.css";

interface ItemProps {
  tracks: Track[];
}

const Item = ({ tracks }: ItemProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutLoading = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timeoutLoading);
  });

  return (
    <div>
      {tracks.map((track) => (
        <div key={track.id} className="playlist__item hid">
          <div className="playlist__track track">
            <div className="track__title">
              <div className="track__title-image">
                {loading ? (
                  <Skeleton
                    width={50}
                    height={50}
                    baseColor="#313131"
                    highlightColor="#181818"
                  />
                ) : (
                  <svg className="track__title-svg">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                )}
              </div>

              <div className="track__title-text">
                {loading ? (
                  <Skeleton
                    width={356}
                    height={19}
                    baseColor="#313131"
                    highlightColor="#181818"
                  />
                ) : (
                  <a className="track__title-link" href="http://">
                    {track.name} <span className="track__title-span"></span>
                  </a>
                )}
              </div>
            </div>
            <div className="track__author">
              {loading ? (
                <Skeleton
                  width={271}
                  height={19}
                  baseColor="#313131"
                  highlightColor="#181818"
                />
              ) : (
                <a className="track__author-link" href="http://">
                  {track.author}
                </a>
              )}
            </div>
            <div className="track__album">
              {loading ? (
                <Skeleton
                  width={305}
                  height={19}
                  baseColor="#313131"
                  highlightColor="#181818"
                />
              ) : (
                <a className="track__album-link" href="http://">
                  {track.album}
                </a>
              )}
            </div>
            <div className={styles.track__time}>
              <svg className="track__time-svg">
                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
              </svg>

              <span className="track__time-text">
                {track.duration_in_seconds}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Item;
