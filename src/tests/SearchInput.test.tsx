import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Search from "../components/Search/Search";

describe("<Search/>", () => {
  it("input has attrubutes type, placeholder, name", () => {
    const { getByTestId } = render(<Search />);

    const input = getByTestId("input-search");

    expect(screen.getByTestId("input-search")).toHaveAttribute(
      "type",
      "search"
    );
    expect(input).toHaveAttribute("placeholder", "Поиск");
    expect(input).toHaveAttribute("name", "search");
  });
  it("updates the input value when the user types", () => {
    const { getByTestId } = render(<Search />);
    const input = getByTestId("input-search");

    expect(input).toHaveValue("");

    fireEvent.change(input, { target: { value: "test" } });
    expect(input).toHaveValue("test");
  });
});
