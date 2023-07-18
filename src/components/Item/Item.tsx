import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

import { Track } from "../Request/Request";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./Item.module.css";

interface ItemProps {
  tracks: Track[];
}

const Item: React.FC<ItemProps> = ({ tracks }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  });

  return (
    <div>
      {tracks.map((track) => (
        <div key={track.id} className="playlist__item hid">
          <div className="playlist__track track">
            <div className="track__title">
              <div className={styles.track__title_image}>
                {loading ? (
                  <Skeleton
                    width={51}
                    height={51}
                    baseColor="var(--color-img)"
                    highlightColor="var(--color-background)"
                  />
                ) : (
                  <svg className={styles.track__title_svg}>
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                )}
              </div>

              <div className={styles.track__title_text}>
                {loading ? (
                  <Skeleton
                    baseColor="var(--color-img)"
                    highlightColor="var(--color-background)"
                  />
                ) : (
                  <a className={styles.track__title_link} href="http://">
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
                  baseColor="var(--color-img)"
                  highlightColor="var(--color-background)"
                />
              ) : (
                <a className="track__author-link" href="http://">
                  {track.author}
                </a>
              )}
            </div>
            <div className={styles.track__album}>
              {loading ? (
                <Skeleton
                  width={320}
                  height={19}
                  baseColor="var(--color-img)"
                  highlightColor="var(--color-background)"
                />
              ) : (
                <a className={styles.track__album_link} href="http://">
                  {track.album}
                </a>
              )}
            </div>
            <div className={styles.track__time}>
              <svg className={styles.track__time_svg}>
                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
              </svg>

              <span className={styles.track__time_text}>
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
