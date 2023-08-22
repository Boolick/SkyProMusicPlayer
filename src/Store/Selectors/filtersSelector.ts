import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { Track } from "../../components/trackApi";

const selectTracks = (state: RootState) => state.player.tracks;
const selectSelectedAuthor = (state: RootState) => state.filter.selectedAuthor;
const selectSortByReleaseDate = (state: RootState) =>
  state.filter.sortByReleaseDate;
const selectSelectedGenre = (state: RootState) => state.filter.selectedGenre;

export const selectFilteredTracks = createSelector(
  [
    selectTracks,
    selectSelectedAuthor,
    selectSortByReleaseDate,
    selectSelectedGenre,
  ],
  (
    tracks: Track[] | undefined,
    selectedAuthor: string | null,
    sortByReleaseDate: string,
    selectedGenre: string | null
  ) => {
    let filteredTracks = tracks;

    if (selectedAuthor) {
      filteredTracks = filteredTracks?.filter(
        (track) => track.author === selectedAuthor
      );
    }

    if (selectedGenre) {
      filteredTracks = filteredTracks?.filter(
        (track) => track.genre === selectedGenre
      );
    }

    if (sortByReleaseDate) {
      filteredTracks = filteredTracks?.slice().sort((a, b) => {
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
      });
    }

    return filteredTracks;
  }
);
