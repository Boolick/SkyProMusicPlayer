import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { Track } from "../../components/trackApi";

const selectTracks = (state: RootState) => state.player.tracks;
const selectFavoriteTracks = (state: RootState) => state.favorite.tracks;
const selectSelections = (state: RootState) => state.trackApi.queries;
const selectSearchTerm = (state: RootState) => state.search.searchTerm;

export const selectFilteredTracks = createSelector(
  [selectTracks, selectSearchTerm, selectFavoriteTracks, selectSelections],
  (tracks: Track[], searchTerm) =>
    tracks.filter((track) =>
      track.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
);
