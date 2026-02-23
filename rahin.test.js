// App.test.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./rahin.jsx";

describe("App component", () => {
  test("renders static headings and fruit list", () => {
    render(<App />);

    // Title
    expect(
      screen.getByRole("heading", { name: /React JSX Single File Example 🚀/i })
    ).toBeInTheDocument();

    // Counter heading
    expect(screen.getByRole("heading", { name: /Counter: 0/i })).toBeInTheDocument();

    // Fruit list heading
    expect(screen.getByRole("heading", { name: /Fruit List/i })).toBeInTheDocument();

    // Fruit items
    const fruitItems = screen.getAllByRole("listitem");
    expect(fruitItems).toHaveLength(3);
    expect(fruitItems.map(li => li.textContent)).toEqual([
      "Apple",
      "Banana",
      "Mango",
    ]);
  });

  test("updates greeting when name is entered", async () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/Enter your name/i);
    const greeting = screen.getByRole("heading", { level: 3 });

    // Initial greeting
    expect(greeting).toHaveTextContent("Hello Guest 👋");

    // Type a name
    await userEvent.type(input, "Alice");

    expect(greeting).toHaveTextContent("Hello Alice 👋");
  });

  test("counter buttons work correctly", async () => {
    render(<App />);

    const increaseBtn = screen.getByRole("button", { name: /Increase/i });
    const decreaseBtn = screen.getByRole("button", { name: /Decrease/i });
    const resetBtn = screen.getByRole("button", { name: /Reset/i });
    const counterHeading = screen.getByRole("heading", { name: /Counter: 0/i });

    // Increase
    await userEvent.click(increaseBtn);
    expect(counterHeading).toHaveTextContent("Counter: 1");

    // Decrease
    await userEvent.click(decreaseBtn);
    expect(counterHeading).toHaveTextContent("Counter: 0");

    // Decrease below zero
    await userEvent.click(decreaseBtn);
    expect(counterHeading).toHaveTextContent("Counter: -1");

    // Reset
    await userEvent.click(resetBtn);
    expect(counterHeading).toHaveTextContent("Counter: 0");
  });
});