import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { Track } from "../../components/trackApi";

const selectTracks = (state: RootState) => state.player.tracks;
const selectSearchTerm = (state: RootState) => state.search.searchTerm;
const selectSelectedAuthor = (state: RootState) => state.filter.selectedAuthor;
const selectSortByReleaseDate = (state: RootState) =>
  state.filter.sortByReleaseDate;
const selectSelectedGenre = (state: RootState) => state.filter.selectedGenre;

export const selectFilteredTracks = createSelector(
  [
    selectTracks,
    selectSearchTerm,
    selectSelectedAuthor,
    selectSortByReleaseDate,
    selectSelectedGenre,
  ],
  (
    tracks: Track[],
    searchTerm: string,
    selectedAuthor: string | null,
    sortByReleaseDate: string,
    selectedGenre: string | null
  ) => {
    let filteredTracks = tracks;

    if (searchTerm) {
      filteredTracks = filteredTracks.filter((track) =>
        track.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedAuthor) {
      filteredTracks = filteredTracks.filter(
        (track) => track.author === selectedAuthor
      );
    }

    if (selectedGenre) {
      filteredTracks = filteredTracks.filter(
        (track) => track.genre === selectedGenre
      );
    }

    if (sortByReleaseDate) {
      filteredTracks = filteredTracks.slice().sort((a, b) => {
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
