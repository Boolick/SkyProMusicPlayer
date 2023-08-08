import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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

export const trackApi = createApi({
  reducerPath: "trackApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://painassasin.online/catalog/track",
  }),
  endpoints: (builder) => ({
    getAllTracks: builder.query<Track[], void>({
      query: () => `/all`,
    }),
    getTrackById: builder.query<Track, string>({
      query: (id) => `/${id}`,
    }),
  }),
});

export const { useGetAllTracksQuery, useGetTrackByIdQuery } = trackApi;

