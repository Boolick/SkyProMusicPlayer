import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { Track } from "../../components/trackApi";

const selectTracks = (state: RootState) => state.player.tracks;
const selectSearchTerm = (state: RootState) => state.search.searchTerm;

export const foundTracks = createSelector(
  [selectTracks, selectSearchTerm],
  (tracks: Track[], searchTerm: string) => {
    let foundTracks = tracks;

    if (searchTerm) {
      foundTracks = foundTracks.filter((track) =>
        track.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return foundTracks;
  }
);
