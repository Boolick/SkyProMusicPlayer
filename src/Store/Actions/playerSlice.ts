import { createSlice } from "@reduxjs/toolkit";
import { Track } from "../../components/trackApi";

interface PlayerState {
  currentTrack: Track | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
}

const initialState: PlayerState = {
  currentTrack: null,
  isPlaying: false,
  currentTime: 0,
  duration: 0,
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    playTrack(state, action) {
      // Изменяем состояние воспроизведения только если текущий трек отличается от выбранного
      if (state.currentTrack?.id === action.payload.id) {
        state.isPlaying = false;
      }
      state.currentTrack = action.payload;
    },
    pauseTrack(state) {
      state.isPlaying = false;
    },
    resumeTrack(state) {
      state.isPlaying = true;
    },
    updateProgress(state, action) {
      state.currentTime = action.payload.currentTime;
      state.duration = action.payload.duration;
    },
  },
});

export const { playTrack, pauseTrack, resumeTrack, updateProgress } =
  playerSlice.actions;

export default playerSlice.reducer;
