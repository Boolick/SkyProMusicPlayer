import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Item/Item.module.css";
import { RootState } from "../Store/store";
import { removeTrack } from "../Store/Reducers/favoriteSlice";
import { useTrackPlayer } from "./PlayTrack";
import { Track } from "../components/trackApi";
import FavoriteTrack from "./FavoriteTrack";
import Controls from "./ControlButton/Controls";

function FavoriteTracks() {
  const dispatch = useDispatch();
  const favoriteTracks = useSelector(
    (state: RootState) => state.favorite.tracks
  );
  const currentTrack = useSelector(
    (state: RootState) => state.player.currentTrack
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
