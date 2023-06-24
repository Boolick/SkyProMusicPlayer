/* import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Track {
    id: number;
    name: string;
    author: string;
    release_date: string;
    genre: string; 
    duration_in_seconds: number;
    album: string;
    logo: null;
    track_file: string;
  }

interface TracksResponse {
  tracks: Track[];
}

export const tracksApi = createApi({
  reducerPath: "tracksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://painassasin.online/catalog/track/all",
  }),
  endpoints: (builder) => ({
    getTracks: builder.query<TracksResponse, void>({
      query: () => "/tracks",
    }),
  }),
});

export const { useGetTracksQuery } = tracksApi;


 */