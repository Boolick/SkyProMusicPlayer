import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

export const authorization = createAsyncThunk(
  "auth/registerUser",
  async (userData: { username: string; password: string }, thunkAPI) => {
    try {
      const response = await axios.post(
        "https://painassasin.online/user/signup/",
        userData
      );
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        // Обработка ошибки, когда есть ответ от сервера
        return thunkAPI.rejectWithValue(axiosError.response.data);
      } else {
        // Обработка ошибки, когда нет ответа от сервера
        return thunkAPI.rejectWithValue({ message: "Network error" });
      }
    }
  }
);
