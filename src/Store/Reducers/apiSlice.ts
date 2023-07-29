import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface LoginResponse {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
}

interface SignupResponse {
  id: number;
  username: string;
  surname: string;
  email: string;
}
interface TokenResponse {
  access: any;
  token: any;
  isSuccess: boolean;
  isUninitialized: boolean;
}

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://painassasin.online/" }),
  endpoints: (builder) => ({
    signup: builder.mutation<
      SignupResponse,
      { username: string; surname: string; email: string; password: string }
    >({
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
    token: builder.mutation<TokenResponse, {  email: string; password: string }>({
      query: (credentials) => ({
        url: `user/token/`,
        method: "POST",
        body: credentials,
      }),
    }),
    refreshToken: builder.mutation<TokenResponse, void>({
      query: () => ({
        url: `user/token/refresh/`,
        method: "POST",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useTokenMutation,
  useSignupMutation,
  useRefreshTokenMutation,
} = api;
