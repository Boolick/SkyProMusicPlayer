import { createSlice } from "@reduxjs/toolkit";
import { Track } from "../../components/trackApi";

interface PlayerState {
  favorite: any;
  currentTrack: Track | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  isRepeat: boolean;
  tracks: Track[];
  volume: number;
}

const initialState: PlayerState = {
  currentTrack: null,
  isPlaying: false,
  currentTime: 0,
  duration: 0,
  isRepeat: false,
  tracks: [],
  volume: 0.5,
  favorite: undefined,
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    playTrack(state, action) {
      // Изменяем состояние воспроизведения только если текущий трек отличается от выбранного
      if (!action.payload) return;
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
    toggleIsRepeat(state) {
      state.isRepeat = !state.isRepeat;
    },
    toggleIsPLaying(state) {
      if (state.isPlaying === true) {
        state.isPlaying = false;
      }
    },
    updateTracks(state, action) {
      state.tracks = action.payload;
    },
    setVolume: (state, action) => {
      state.volume = action.payload;
    },
  },
});

export const {
  playTrack,
  pauseTrack,
  resumeTrack,
  updateProgress,
  toggleIsRepeat,
  toggleIsPLaying,
  updateTracks,
  setVolume,
} = playerSlice.actions;

export default playerSlice.reducer;
