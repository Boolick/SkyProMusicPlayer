import { useSelector, useDispatch } from "react-redux";

import styles from "./Item/Item.module.css";
import { RootState } from "../Store/store";
import { Track } from "../components/trackApi";
import FavoriteTrack from "./FavoriteTrack";
import { selectFilteredTracks } from "../Store/Selectors/searchSelector";

function FavoriteTracks() {
  const favoriteTracks = useSelector(
    (state: RootState) => state.favorite.tracks
  );

  const filteredTracks = useSelector(selectFilteredTracks);

  return (
    <>
      <audio id="audio-player" style={{ display: "none" }} />
      <ul className={styles.playlist}>
        {filteredTracks.map((track: Track) => (
          <>
            <FavoriteTrack key={track.id} track={track} />
          </>
        ))}
      </ul>
    </>
  );
}

export default FavoriteTracks;
