import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";
import { RootState } from "../Store/store";
import {
  Track,
  useAddFavoriteTrackByIdMutation,
  useDeleteFavoriteTrackByIdMutation,
  useGetAllFavoriteTracksQuery,
} from "./trackApi";
import { secondsToMinutesAndSeconds } from "./ControlButton/Player";

function TrackPlay() {
  // Определяем текущий трек
  const currentTrack = useSelector(
    (state: RootState) => state.player.currentTrack
  );
  const token = useSelector((state: RootState) => state.auth.access);
  const {
    data: favoriteTraks,
    error,
    refetch,
  } = useGetAllFavoriteTracksQuery({
    token,
  });
  const [addFavoriteTrack] = useAddFavoriteTrackByIdMutation();
  const [deleteFavoriteTrack] = useDeleteFavoriteTrackByIdMutation();
  //Обновление времени
  const currentTime = useSelector(
    (state: RootState) => state.player.currentTime
  );
  const duration = useSelector((state: RootState) => state.player.duration);
  const timeLeft = Math.round(duration - currentTime);

  const handleAdd = (id: number, token: string) => {
    addFavoriteTrack({ id, token });
    refetch();
  };

  const handleDelete = (id: number, token: string) => {
    deleteFavoriteTrack({ id, token });
    refetch();
  };

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="player__track-play track-play">
      <div className="track-play__contain">
        <div className="track-play__image">
          {isLoading ? (
            <Skeleton
              width={51}
              height={51}
              baseColor="var(--color-img)"
              highlightColor="var(--color-background)"
            />
          ) : (
            <svg className="track-play__svg" /*  alt="music" */>
              <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
            </svg>
          )}
        </div>
        {isLoading ? (
          <Skeleton
            width={59}
            height={15}
            baseColor="var(--color-img)"
            highlightColor="var(--color-background)"
          />
        ) : (
          <div className="track-play__author">
            <a className="track-play__author-link" href="http://">
              {currentTrack?.author}
            </a>
          </div>
        )}
        {isLoading ? (
          <Skeleton
            width={59}
            height={15}
            baseColor="var(--color-img)"
            highlightColor="var(--color-background)"
          />
        ) : (
          <div className="track-play__album">
            <a className="track-play__album-link" href="http://">
              {currentTrack?.album}
            </a>
          </div>
        )}
      </div>
      <div className="track-play__album">
        <p>
          Time:{" "}
          {isNaN(timeLeft)
            ? "Loading..."
            : secondsToMinutesAndSeconds(timeLeft)}
        </p>
      </div>
      <div className="track-play__like-dis">
        <div className="track-play__like _btn-icon">
          <svg
            onClick={() => {
              if (currentTrack?.id) {
                handleAdd(currentTrack.id, `${token}`);
              }
            }}
            className="track-play__like-svg" /* alt="like" */
          >
            <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
          </svg>
        </div>
        <div className="track-play__dislike _btn-icon">
          <svg
            onClick={() => {
              if (currentTrack?.id) {
                handleDelete(currentTrack.id, `${token}`);
              }
            }}
            className="track-play__dislike-svg" /* alt="dislike" */
          >
            <use xlinkHref="/img/icon/sprite.svg#icon-dislike"></use>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default TrackPlay;
