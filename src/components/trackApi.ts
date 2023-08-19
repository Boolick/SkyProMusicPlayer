import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "../Store/Reducers/baseQueryWithReauth ";

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
    baseUrl: "https://painassasin.online/",
  }),

  endpoints: (builder) => ({
    getAllTracks: builder.query<Track[], void>({
      query: () => ({
        url: `catalog/track/all`,
        method: "GET",
      }),
    }),
    getTrackById: builder.query<Track, number>({
      query: (id) => ({
        url: `catalog/track/${id}`,
        method: "GET",
      }),
    }),
    getSelections: builder.query<Selection[], void>({
      query: () => ({
        url: "catalog/selection/",
        method: "GET",
      }),
    }),

    getSelectionById: builder.query<Selection, number>({
      query: (id) => ({
        url: `catalog/selection/${id}/`,
        method: "GET",
      }),
    }),
    deleteTrackFromSelection: builder.mutation<void, number>({
      query: (id) => ({
        url: `catalog/track/${id}/delete/`,
        method: "DELETE",
      }),
    }),

    addTrackToSelection: builder.mutation<void, { id: number; track: Track }>({
      query: ({ id, track }) => ({
        url: `catalog/${id}/update/`,
        method: "POST",
        body: track,
      }),
    }),

    getFavoriteTrackById: builder.query<Track, number>({
      query: (id) => ({
        url: `catalog/track/${id}`,
        method: "GET",
      }),
    }),

    getAllFavoriteTracks: builder.query<Track[], { token: string | null }>({
      query: ({ token }) => ({
        url: `catalog/track/favorite/all`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),

    deleteFavoriteTrackById: builder.mutation<
      void,
      { id: number; token: string | null }
    >({
      query: ({ id, token }) => ({
        url: `catalog/track/${id}/favorite/`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),

    addFavoriteTrackById: builder.mutation<
      void,
      { id: number; token: string | null }
    >({
      query: ({ id, token }) => ({
        url: `catalog/track/${id}/favorite/`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    addMultipleFavoriteTracksByIds: builder.mutation<
      void,
      { ids: number[]; token: string }
    >({
      query: ({ ids, token }) => ({
        url: `catalog/track/favorite/?id=${ids.join(",")}`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
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
  useGetAllFavoriteTracksQuery,
  useGetFavoriteTrackByIdQuery,
  useAddFavoriteTrackByIdMutation,
  useDeleteFavoriteTrackByIdMutation,
  useAddMultipleFavoriteTracksByIdsMutation,
} = trackApi;
