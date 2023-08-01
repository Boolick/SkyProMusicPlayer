import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { useDispatch } from "react-redux";
import PlayButton from "./PlayButton";
import { resumeTrack } from "../../../Store/Actions/playerSlice";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

describe("PlayButton", () => {
  beforeEach(() => {
    (useDispatch as jest.Mock).mockClear();
  });

  it("should dispatch resumeTrack action when clicked", () => {
    const dispatchMock = jest.fn();
    (useDispatch as jest.Mock).mockReturnValue(dispatchMock);

    const { getByTestId } = render(<PlayButton />);
    const button = getByTestId("play-button");

    fireEvent.click(button);

    expect(dispatchMock).toHaveBeenCalledWith(resumeTrack());
  });
 
});
git 