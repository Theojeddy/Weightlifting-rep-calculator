import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import QWLegs from "../Components/QWLegs";

// Mock components that QWLegs depends on
jest.mock("../Components/Header/HeaderLogo", () => () => (
  <div data-testid="header-logo" />
));
jest.mock("../Components/NavBar/navbar", () => ({ title }) => (
  <div data-testid="navbar">{title}</div>
));
jest.mock("../Components/Workout call/WorkoutsCall", () => ({ QWSession }) => (
  <div data-testid="workout">{QWSession}</div>
));

describe("QWLegs Component", () => {
  let mockSetTitle, mockSetQWsession;

  beforeEach(() => {
    mockSetTitle = jest.fn();
    mockSetQWsession = jest.fn();
  });

  test('sets the title to "Quick Leg Workouts" on mount', () => {
    render(
      <QWLegs
        title=""
        setTitle={mockSetTitle}
        QWSession=""
        setQWsession={mockSetQWsession}
      />
    );

    expect(mockSetTitle).toHaveBeenCalledWith("Quick Leg Workouts");
  });

  test('sets the session to "legs" on mount', () => {
    render(
      <QWLegs
        title=""
        setTitle={mockSetTitle}
        QWSession=""
        setQWsession={mockSetQWsession}
      />
    );

    expect(mockSetQWsession).toHaveBeenCalledWith("legs");
  });

  test("renders the Navbar with the correct title", () => {
    const title = "Quick Leg Workouts";
    render(
      <QWLegs
        title={title}
        setTitle={mockSetTitle}
        QWSession=""
        setQWsession={mockSetQWsession}
      />
    );

    expect(screen.getByTestId("navbar")).toHaveTextContent(title);
  });

  test("renders the HeaderLogo component", () => {
    render(
      <QWLegs
        title=""
        setTitle={mockSetTitle}
        QWSession=""
        setQWsession={mockSetQWsession}
      />
    );

    expect(screen.getByTestId("header-logo")).toBeInTheDocument();
  });

  test("renders the Workout component with the correct session", () => {
    const session = "legs";
    render(
      <QWLegs
        title=""
        setTitle={mockSetTitle}
        QWSession={session}
        setQWsession={mockSetQWsession}
      />
    );

    expect(screen.getByTestId("workout")).toHaveTextContent(session);
  });
});
