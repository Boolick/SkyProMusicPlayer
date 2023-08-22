import { createSelector } from "@reduxjs/toolkit";

import { selectFilteredTracks } from "./filtersSelector";
import { foundTracks } from "./searchSelector";
import { Track } from "../../components/trackApi";

export const selectFilteredAndSearchedTracks = createSelector(
  [selectFilteredTracks, foundTracks],
  (
    filteredTracks: Track[] | undefined,
    searchedTracks: Track[] | undefined
  ) => {
    return filteredTracks?.filter((track) =>
      searchedTracks?.some((searchedTrack) => searchedTrack.id === track.id)
    );
  }
);
