import { AnyAction, configureStore } from "@reduxjs/toolkit";

import { trackApi } from "../components/trackApi";
import playerReducer from "./Reducers/playerSlice";
import AuthSlice from "./Reducers/AuthSlice";
import favoriteReducer from "./Reducers/favoriteSlice";

export const store = configureStore({
  reducer: {
    // Добавление редьюсеров trackApi и player в хранилище
    [trackApi.reducerPath]: trackApi.reducer,
    player: playerReducer,
    favorite: favoriteReducer,
  },
  // Добавление middleware trackApi в хранилище
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(trackApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type Appdispatch = typeof store.dispatch;
