import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { setCredentials, logOut } from "./AuthSlice";

export const baseQuery = fetchBaseQuery({
  baseUrl: "https://painassasin.online/user/signup/",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as RootState;
    const token = state.auth.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
     
    return headers;
  },
});
