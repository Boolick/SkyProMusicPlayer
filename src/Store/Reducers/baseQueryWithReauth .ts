import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BaseQueryApi, FetchArgs } from "@reduxjs/toolkit/query";

import { setAccess } from "./AuthSlice";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://painassasin.online/",
});
export const baseQueryWithReauth = async (
  args: FetchArgs,
  api: BaseQueryApi,
  extraOptions: any
) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    const refreshToken = useSelector((state: RootState) => state.auth.refresh);
    const email = useSelector((state: RootState) => state.auth.email);
    const password = useSelector((state: RootState) => state.auth.password);
    // попытка получить новый токен
    const refreshResult = await baseQuery(
      {
        url: "user/token/refresh/",
        method: "POST",
        body: {
          refresh: refreshToken,
        },
      },
      api,
      extraOptions
    );
    if (refreshResult.data) {
      // сохранение нового токена
      api.dispatch(setAccess(refreshResult.data));
      // повтор исходного запроса
      result = await baseQuery(
        {
          url: "user/token/",
          method: "POST",
          body: {
            email: email,
            password: password,
          },
        },
        api,
        extraOptions
      );
    } else {
      // обработка ошибки обновления токена
      alert("Токен устарел");
    }
  }
  return result;
};
