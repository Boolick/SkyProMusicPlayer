import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";
import { useEffect } from "react";

import { RootState } from "../Store/store";
import {
  useGetAllTracksQuery,
  useAddFavoriteTrackByIdMutation,
  useGetAllFavoriteTracksQuery,
} from "../components/trackApi";
import { selectFilteredAndSearchedTracks } from "../Store/Selectors/indexSelector";
import styles from "./Item/Item.module.css";

import { useTrackPlayer } from "./PlayTrack";
import { setVolume, updateTracks } from "../Store/Actions/playerSlice";
import { secondsToMinutesAndSeconds } from "./ControlButton/Player";
import { setResetFilters } from "../Store/Reducers/filtersSlice";
import { setResetSearchTerm } from "../Store/Reducers/SearchSlice";
import Bar from "./Bar";

export const TrackAlbum = () => {
  const dispatch = useDispatch();
  const { handleSelectTrack } = useTrackPlayer();
  const { data, isLoading, isError } = useGetAllTracksQuery();
  const [addFavoriteTrack] = useAddFavoriteTrackByIdMutation();
  const token = useSelector((state: RootState) => state.auth.access);
  const currentTrack = useSelector(
    (state: RootState) => state.player.currentTrack
  );

  //Используем селектор треков по поиску
  const tracks = useSelector(selectFilteredAndSearchedTracks);

  const { data: favoriteTracks, refetch } = useGetAllFavoriteTracksQuery({
    token,
  });

  const handleAdd = (id: number, token: string) => {
    addFavoriteTrack({ id, token });
    refetch();
  };

  // Обновляем список треков и уровень громкости
  useEffect(() => {
    if (data && data.length > 0) {
      dispatch(setResetSearchTerm());
      dispatch(setResetFilters());
      dispatch(updateTracks(data));
      dispatch(setVolume(0.5)); //  0.5 это половина звука
    }
  }, [data]);

  if (isError) return <div>Error:{isError.toString()}</div>;

  return (
    <>
      <audio id="audio-player" style={{ display: "none" }} />
      <ul className={styles.playlist}>
        {tracks?.map((track) => (
          <>
            <li
              key={track.id}
              onClick={() => handleSelectTrack(track)}
              className={cn({
                [styles.active]: track === currentTrack,
                [styles.playlist__item]: true,
              })}
            >
              {isLoading ? (
                <>
                  <Skeleton
                    count={tracks.length}
                    height={50}
                    width={1000}
                    baseColor="var(--color-img)"
                    highlightColor="var(--color-background)"
                  ></Skeleton>
                </>
              ) : (
                <div
                  className={cn({
                    [styles.active]: track === currentTrack,
                    [styles.track__title_image]: true,
                  })}
                >
                  <svg className={styles.track__title_svg}>
                    <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
              )}

              <div className={styles.track__title_text}>
                <div
                  className={cn({
                    [styles.active]: track === currentTrack,
                    [styles.track__title_text]: true,
                  })}
                >
                  {track.name}
                </div>
              </div>
              <div className={styles.track__author}>
                <div
                  className={cn({
                    [styles.active]: track === currentTrack,
                    [styles.track__author_link]: true,
                  })}
                >
                  {track.author}
                </div>
              </div>
              <div className={styles.track__album}>
                <div
                  className={cn({
                    [styles.active]: track === currentTrack,
                    [styles.track__album_link]: true,
                  })}
                >
                  {track.album}
                </div>
              </div>
              <div className={styles.track__time}>
                <svg
                  onClick={() => handleAdd(track.id, `${token}`)}
                  className={cn(styles.track__heart, {
                    [styles.track__heart_favorite]: favoriteTracks?.some(
                      (t: { id: number }) => t.id === track.id
                    ),
                  })}
                >
                  <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
                </svg>

                <span className={styles.track__time_text}>
                  {secondsToMinutesAndSeconds(track.duration_in_seconds)}
                </span>
              </div>
            </li>
          </>
        ))}
      </ul>
      {tracks && <Bar tracks={tracks} />}
    </>
  );
};

export default TrackAlbum;
