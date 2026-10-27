import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";
import "@testing-library/jest-dom/vitest";

describe("ButtonToggle", () => {

  it("text is hidden first", () => {
    render(<Button />);

    expect(screen.queryByText("Hello World!")).not.toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent("Show Message");
  });

  it("text toggle", async () => {
    const user = userEvent.setup();

    render(<Button />);

    const button = screen.getByRole("button", {
      name: "Show Message",
    });

    await user.click(button);

    expect(screen.getByText("Hello World!")).toBeInTheDocument();
    expect(button).toHaveTextContent("Hide Message");

    await user.click(button);

    expect(screen.queryByText("Hello World!")).not.toBeInTheDocument();
    expect(button).toHaveTextContent("Show Message");
  });
});
