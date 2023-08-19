import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./baseQueryWithReauth ";

export interface LoginResponse {
  username: string;
  password: string;
}

interface SignupResponse {
  id: number;
  username: string;
  surname: string;
  email: string;
  password: string;
  repeatPassword: string;
}
interface TokenResponse {
  email(email: any): unknown;
  access: string;
  refresh: string;
}

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    signup: builder.mutation<
      SignupResponse,
      {
        username: string;
        surname: string;
        email: string;
        password: string;
        repeatPassword: string;
      }
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
    token: builder.mutation<TokenResponse, { email: string; password: string }>(
      {
        query: (credentials) => ({
          url: `user/token/`,
          method: "POST",
          body: credentials,
        }),
      }
    ),
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
