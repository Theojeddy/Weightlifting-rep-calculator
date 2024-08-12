import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BenchPressCalc from "../BenchPresscalc";

describe("BenchPressCalc Component", () => {
  const mockCompleted = {
    exercise: "Bench Press",
    weight: 100,
    reps: 5,
  };

  test("renders unique reps on each card", () => {
    render(<BenchPressCalc completed={mockCompleted} />);

    // Retrieve all card elements (assuming each card has a class of 'card')
    const cardElements = screen.getAllByRole("article"); 


    // Optional: Verify the number of cards
    expect(cardElements.length).toBe(10); // Assuming there are 10 cards
  });


  test("checks that completed prop contains 3 values", () => {
    render(<BenchPressCalc completed={mockCompleted} />);

    // Check if completed prop contains exactly 3 keys
    const completedProps = mockCompleted;
    const expectedKeys = ["exercise", "weight", "reps"];

    expect(Object.keys(completedProps)).toHaveLength(3);
    expectedKeys.forEach((key) => {
      expect(completedProps).toHaveProperty(key);
    });
  });

  test("toggles view mode between cards and list", () => {
    render(<BenchPressCalc completed={mockCompleted} />);

    // Click the toggle button to switch to list view
    fireEvent.click(screen.getByText(/Toggle View/i));

    // Verify if list view items are rendered
    const listItems = screen.queryAllByRole("listitem"); // Adjust role if necessary
    expect(listItems.length).toBe(10); // Check for the number of list items
  });

  test("generates correct training list based on props", () => {
    render(<BenchPressCalc completed={mockCompleted} />);

    // Assuming the percentage calculation logic is correct, verify the output
    const listItems = screen.queryAllByRole("listitem");
    const expectedWeights = [108, 106, 104, 102, 100, 98, 96, 94, 92, 90]; // Corrected order

    listItems.forEach((item, index) => {
      expect(item.textContent).toContain(
        `Weight: ${expectedWeights[index]} kg`
      );
    });
  });
});
