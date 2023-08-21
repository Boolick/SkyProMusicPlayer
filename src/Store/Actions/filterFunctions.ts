import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { Track } from "../../components/trackApi";

const selectTracks = (state: RootState) => state.player.tracks;
const selectSortByReleaseDate = (state: RootState) =>
  state.filter.sortByReleaseDate;

export const selectTracksSortedByReleaseDate = createSelector(
  [selectTracks, selectSortByReleaseDate],
  (tracks: Track[], sortByReleaseDate: string) =>
    tracks.sort((a, b) => {
      if (sortByReleaseDate === "asc") {
        return (
          new Date(a.release_date).getTime() -
          new Date(b.release_date).getTime()
        );
      } else {
        return (
          new Date(b.release_date).getTime() -
          new Date(a.release_date).getTime()
        );
      }
    })
);
