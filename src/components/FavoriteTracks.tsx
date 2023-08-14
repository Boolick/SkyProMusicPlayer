import { useSelector, useDispatch } from "react-redux";
import styles from "./Item/Item.module.css";
import { RootState } from "../Store/store";
import { Track } from "../components/trackApi";
import FavoriteTrack from "./FavoriteTrack";

function FavoriteTracks() {
  const favoriteTracks = useSelector(
    (state: RootState) => state.favorite.tracks
  );

  return (
    <>
      <audio id="audio-player" style={{ display: "none" }} />
      <ul className={styles.playlist}>
        {favoriteTracks.map((track: Track) => (
          <>
            <FavoriteTrack key={track.id} track={track} />
          </>
        ))}
      </ul>
    </>
  );
}

export default FavoriteTracks;
