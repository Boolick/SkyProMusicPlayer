import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  token: string | null;
  email: string;
  password:string;
}

const initialState: AuthState = {
  token: null,
  email: "",
  password: "",
  
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
      
    },
    setCredentials(state, action) {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

export const { setToken,setCredentials } = authSlice.actions;

export default authSlice.reducer;

/* import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, token: null },
  reducers: {
    setCredentials: (state, action) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.token = accessToken;
    },
    logOut: (state, action) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;
 */
