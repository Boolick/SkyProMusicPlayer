import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Track } from "../../components/trackApi";

interface FavoriteState {
  tracks: Track[];
  track: Track| undefined;
}

const initialState: FavoriteState = {
  tracks: [],
  track: undefined
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addTrack: (state, action: PayloadAction<Track>) => {
      state.tracks.push(action.payload);
    },
    removeTrack: (state, action: PayloadAction<Number>) => {
      state.tracks = state.tracks.filter(
        (track: { id: Number }) => track.id !== action.payload
      );
    },
    updateFavoriteTracks: (state, action: PayloadAction<Track[]>) => {
      state.tracks = action.payload;
    },
    updateFavoriteTrack: (state, action: PayloadAction<Track>) => {
      state.track = action.payload;
    },
  },
});
export const { addTrack, removeTrack, updateFavoriteTracks, updateFavoriteTrack } =
  favoriteSlice.actions;
export default favoriteSlice.reducer;
