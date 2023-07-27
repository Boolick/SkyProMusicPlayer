import { useDispatch } from "react-redux";
import styles from "./Item/Item.module.css";

import { useTrackPlayer } from "./PlayTrack";
import {
  Track,
  useGetFavoriteTrackByIdQuery,
  useDeleteFavoriteTrackByIdMutation,
} from "../components/trackApi";

function FavoriteTrack({ track }: { track: Track }) {
  const { data, error, isLoading } = useGetFavoriteTrackByIdQuery(track.id);
  const dispatch = useDispatch();
  const { handleSelectTrack } = useTrackPlayer();
  const [deleteFavoriteTrack] = useDeleteFavoriteTrackByIdMutation();

  const handleDelete = (id:number) => {
    deleteFavoriteTrack(track.id);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }

  return (
    <li className={styles.playlist__item}>
      <div
        onClick={() => handleSelectTrack(track)}
        className={styles.track__title_image}
      >
        <svg className={styles.track__title_svg}>
          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
        </svg>
      </div>

      <div className={styles.track__title_text}>
        <a className={styles.track__title_link} href="http://">
          {data?.name}
        </a>
      </div>
      <div className={styles.track__author}>
        <a className={styles.track__author_link} href="http://">
          {data?.author}
        </a>
      </div>
      <div className={styles.track__album}>
        <a className={styles.track__album_link} href="http://">
          {data?.album}
        </a>
      </div>
      <div className={styles.track__time}>
        <svg onClick={() => handleDelete(track.id)} className={styles.track__heart}>
          <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
        </svg>
        <span className={styles.track__time_text}>
          {data?.duration_in_seconds}
        </span>
      </div>
    </li>
  );
}

export default FavoriteTrack;
