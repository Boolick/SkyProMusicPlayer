import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Track {
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

interface Selection {
  id: number;
  items: Track[];
}

export const trackApi = createApi({
  reducerPath: "trackApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://painassasin.online/catalog",
  }),
  endpoints: (builder) => ({
    getAllTracks: builder.query<Track[], void>({
      query: () => `track/all`,
    }),
    getTrackById: builder.query<Track, number>({
      query: (id) => `track/${id}`,
    }),
    getSelections: builder.query<Selection[], void>({
      query: () => "/selection/",
    }),
    getSelectionById: builder.query<Selection, number>({
      query: (id) => `/selection/${id}/`,
    }),
    deleteTrackFromSelection: builder.mutation<void, number>({
      query: (id) => ({
        url: `/track/${id}/delete/`,
        method: "DELETE",
      }),
    }),
    addTrackToSelection: builder.mutation<void, { id: number; track: Track }>({
      query: ({ id, track }) => ({
        url: `/${id}/update/`,
        method: "POST",
        body: track,
      }),
    }),
  }),
});

export const {
  useGetAllTracksQuery,
  useGetTrackByIdQuery,
  useGetSelectionsQuery,
  useGetSelectionByIdQuery,
  useDeleteTrackFromSelectionMutation,
  useAddTrackToSelectionMutation,
} = trackApi;
