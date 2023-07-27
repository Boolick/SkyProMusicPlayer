import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Item/Item.module.css";
import { RootState } from "../Store/store";
import { removeTrack } from "../Store/Reducers/favoriteSlice";
import { useTrackPlayer } from "./PlayTrack";
import { useGetFavoriteTrackByIdQuery } from "../components/trackApi";
import FavoriteTrack from "./FavoriteTrack";

function FavoriteTracks() {
  const favoriteTracks = useSelector(
    (state: RootState) => state.favorite.tracks
  );
  const currentTrack = useSelector(
    (state: RootState) => state.player.currentTrack
  );

  const { handleSelectTrack } = useTrackPlayer();
  const dispatch = useDispatch();

  return (
    <>
      <audio id="audio-player" style={{ display: "none" }} />
      <ul className={styles.playlist}>
        {favoriteTracks.map((track) => (
          <FavoriteTrack key={track.id} track={track} />
        ))}
      </ul>
    </>
  );
}

export default FavoriteTracks;
