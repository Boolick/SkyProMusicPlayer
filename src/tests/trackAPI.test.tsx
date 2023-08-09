import axios from "axios";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import { trackApi } from "../components/trackApi";

const tracks = [
  {
    id: 1,
    name: "Test Track 1",
    author: "Test Author",
    release_date: "2023-01-01",
    genre: "Test Genre",
    duration_in_seconds: 180,
    album: "Test Album",
    logo: null,
    track_file: "test-file.mp3",
  },
  {
    id: 2,
    name: "Test Track 2",
    author: "Test Author",
    release_date: "2023-01-01",
    genre: "Test Genre",
    duration_in_seconds: 180,
    album: "Test Album",
    logo: null,
    track_file: "test-file.mp3",
  },
];

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
mockedAxios.get.mockResolvedValue({ tracks: tracks });

const store = configureStore({
  reducer: {
    [trackApi.reducerPath]: trackApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(trackApi.middleware),
});

function TestComponent() {
  const { data } = trackApi.endpoints.getAllTracks.useQuery();
  return (
    <ul>
      {data?.map((track) => (
        <li key={track.id}>{track.name}</li>
      ))}
    </ul>
  );
}

test("renders tracks", async () => {
  render(
    <Provider store={store}>
      <TestComponent />
    </Provider>
  );
  const items = await screen.findAllByRole("list");
  expect(items).toHaveLength(2);
});
