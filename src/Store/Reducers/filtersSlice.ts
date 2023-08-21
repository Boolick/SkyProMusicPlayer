import { createSlice } from "@reduxjs/toolkit";

interface FiltersState {
  sortByReleaseDate: string;
  selectedAuthor: string ;
  selectedGenre: string ;
}

const initialState: FiltersState = {
  sortByReleaseDate: "asc",
  selectedAuthor: "",
  selectedGenre: "",
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSortByReleaseDate: (state, action) => {
      state.sortByReleaseDate = action.payload;
    },
    setSelectedAuthor: (state, action) => {
      state.selectedAuthor = action.payload;
    },
    setSelectedGenre: (state, action) => {
      state.selectedGenre = action.payload;
    },
  },
});

export const { setSortByReleaseDate, setSelectedAuthor, setSelectedGenre } =
  filtersSlice.actions;

export default filtersSlice.reducer;
