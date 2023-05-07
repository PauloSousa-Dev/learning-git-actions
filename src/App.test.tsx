import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";
describe("My Component", () => {
  it("Test pass", () => {
    render(<App />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should show the help area after clicking the button", async () => {
    render(<App />);

    const button = screen.getByRole("button");
    await userEvent.click(button);
    expect(screen.getByTestId("my-count")).toBeInTheDocument();
  });
});
