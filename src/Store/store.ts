import { AnyAction, configureStore } from "@reduxjs/toolkit";

import { api } from "./Reducers/apiSlice";
import { trackApi } from "../components/trackApi";
import playerReducer from "./Actions/playerSlice";
import searchReducer from "./Actions/SearchSlice";
import favoriteReducer from "./Reducers/favoriteSlice";
import authReducer from "./Reducers/AuthSlice";
import filterReducer from "./Reducers/filtersSlice";

export const store = configureStore({
  reducer: {
    // Добавление редьюсеров  в хранилище
    [api.reducerPath]: api.reducer,
    auth: authReducer,
    [trackApi.reducerPath]: trackApi.reducer,
    player: playerReducer,
    favorite: favoriteReducer,
    search: searchReducer,
    filter: filterReducer,
  },
  // Добавление middleware trackApi в хранилище

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(trackApi.middleware).concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type Appdispatch = typeof store.dispatch;
