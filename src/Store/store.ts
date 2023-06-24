import { configureStore } from "@reduxjs/toolkit";

import { trackApi } from "../components/trackApi";

export const store = configureStore({
  reducer: {
    // Добавление редьюсера trackApi в хранилище
    [trackApi.reducerPath]: trackApi.reducer,
  },
  // Добавление middleware trackApi в хранилище
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(trackApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
