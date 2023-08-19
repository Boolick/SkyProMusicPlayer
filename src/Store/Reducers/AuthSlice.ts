import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  access: string | null;
  refresh: string | null;
  email: string;
  password: string;
}

const initialState: AuthState = {
  access: "",
  refresh: "",
  email: "",
  password: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccess(state, action) {
      console.log("setToken called with payload:", action.payload);
      state.access = action.payload;
    },
    setRefresh(state, action) {
      state.refresh = action.payload;
    },

    setCredentials(state, action) {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

export const { setAccess, setRefresh, setCredentials } = authSlice.actions;

export default authSlice.reducer;
