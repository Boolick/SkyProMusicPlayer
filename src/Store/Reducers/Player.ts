import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PlayerState {
  isPlaying: boolean;
 /*  currentTime: number;
  duration: number; */
}

/* const initialState: PlayerState = {
  isPlaying: false,
  currentTime: 0,
  duration: 0,
}; */

interface PlayerState {
  isPlaying: boolean;
}

const initialState: PlayerState = {
  isPlaying: false,
};

const playerReducer = (state = initialState, action: any): PlayerState => {
  switch (action.type) {
    case 'PLAY':
      return { ...state, isPlaying: true };
    case 'PAUSE':
      return { ...state, isPlaying: false };
    default:
      return state;
  }
};

export default playerReducer;





/* const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    play(state) {
      state.isPlaying = true;
    },
    stop(state) {
      state.isPlaying = false;
      state.currentTime = 0;
    },
  },
}); */

/* export const { play, stop } = playerSlice.actions;
export default playerSlice.reducer;
 */