import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface LoginResponse {
  token: string;
}

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://painassasin.online/" }),
  endpoints: (builder) => ({
    signup: builder.mutation<void, { username: string; surname:string; email: string; password: string }>({
      query: (credentials) => ({
        url: `user/signup/`,
        method: "POST",
        body: credentials,
      }),
    }),
    login: builder.mutation<LoginResponse, { email: string; password: string }>(
      {
        query: (credentials) => ({
          url: `user/login/`,
          method: "POST",
          body: credentials,
        }),
      }
    ),
    token: builder.mutation<LoginResponse, { email: string; password: string }>(
      {
        query: (credentials) => ({
          url: `user/token/`,
          method: "POST",
          body: credentials,
        }),
      }
    ),
    refreshToken: builder.mutation<LoginResponse, void>({
      query: () => ({
        url: `user/token/refresh/`,
        method: "POST",
      }),
    }),
  }),
});

export const { useLoginMutation, useTokenMutation, useSignupMutation } = api;
