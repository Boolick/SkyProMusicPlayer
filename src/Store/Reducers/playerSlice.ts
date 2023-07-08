import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PlayerState {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
}

const initialState: PlayerState = {
  isPlaying: false,
  currentTime: 0,
  duration: 0,
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    play: (state) => {
      state.isPlaying = true;
    },
    pause: (state) => {
      state.isPlaying = false;
    },
    updateProgress: (
      state,
      action: PayloadAction<{ currentTime: number; duration: number }>
    ) => {
      state.currentTime = action.payload.currentTime;
      state.duration = action.payload.duration;
    },
  },
});

export default playerSlice;
