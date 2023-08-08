/* import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { setCredentials, logOut } from "./AuthSlice";

export const baseQuery = fetchBaseQuery({
  baseUrl: "https://painassasin.online/user/signup/",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set("authorization", "Bearer ${token}");
    }
    return headers;
  },
});
 */