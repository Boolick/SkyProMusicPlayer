import { createSlice } from "@reduxjs/toolkit";
import { Track } from "../../components/trackApi";

interface PlayerState {
  currentTrack: Track | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  isRepeat: boolean;
}

const initialState: PlayerState = {
  currentTrack: null,
  isPlaying: false,
  currentTime: 0,
  duration: 0,
  isRepeat: false,
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    playTrack(state, action) {
      // Изменяем состояние воспроизведения только если текущий трек отличается от выбранного
      if (state.currentTrack?.id === action.payload.id) {
        state.isPlaying = true;
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
    toggleRepeat(state) {
      state.isRepeat = !state.isRepeat;
    },
  },
});

export const { playTrack, pauseTrack, resumeTrack, updateProgress, toggleRepeat } =
  playerSlice.actions;

export default playerSlice.reducer;
