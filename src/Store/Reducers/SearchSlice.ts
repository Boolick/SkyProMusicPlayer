import { createSlice } from "@reduxjs/toolkit";

interface SearchState {
  searchTerm: string;
}

const initialState: SearchState = {
  searchTerm: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    setResetSearchTerm(state) {
      state.searchTerm = "";
    },
  },
});

export const { setSearchTerm, setResetSearchTerm } = searchSlice.actions;
export default searchSlice.reducer;
