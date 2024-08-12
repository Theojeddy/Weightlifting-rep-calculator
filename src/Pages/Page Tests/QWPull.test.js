import React from "react";
import { render, screen } from "@testing-library/react";
import QWPull from "../QWPull";

// Mock components that QWPull depends on
jest.mock("../../Components/Header/HeaderLogo", () => () => (
  <div data-testid="header-logo" />
));
jest.mock("../../Components/NavBar/navbar", () => ({ title }) => (
  <div data-testid="navbar">{title}</div>
));
jest.mock(
  "../../Components/Workout call/WorkoutsCall",
  () =>
    ({ QWSession }) =>
      <div data-testid="workout">{QWSession}</div>
);

describe("QWPull Component", () => {
  let mockSetTitle, mockSetQWsession;

  beforeEach(() => {
    mockSetTitle = jest.fn();
    mockSetQWsession = jest.fn();
  });

  test('sets the title to "Quick Pull Workouts" on mount', () => {
    render(
      <QWPull
        title=""
        setTitle={mockSetTitle}
        QWSession=""
        setQWsession={mockSetQWsession}
      />
    );

    // Check that setTitle was called with the correct argument
    expect(mockSetTitle).toHaveBeenCalledWith("Quick Pull Workouts");
    expect(mockSetTitle).toHaveBeenCalledTimes(1);
  });

  test('sets the session to "Pull" on mount', () => {
    render(
      <QWPull
        title=""
        setTitle={mockSetTitle}
        QWSession=""
        setQWsession={mockSetQWsession}
      />
    );

    // Check that setQWsession was called with the correct argument
    expect(mockSetQWsession).toHaveBeenCalledWith("Pull");
    expect(mockSetQWsession).toHaveBeenCalledTimes(1);
  });

  test("renders the Navbar with the correct title", () => {
    const title = "Quick Pull Workouts";
    render(
      <QWPull
        title={title}
        setTitle={mockSetTitle}
        QWSession=""
        setQWsession={mockSetQWsession}
      />
    );

    // Check that Navbar is rendered with the correct title
    expect(screen.getByTestId("navbar")).toHaveTextContent(title);
  });

  test("renders the HeaderLogo component", () => {
    render(
      <QWPull
        title=""
        setTitle={mockSetTitle}
        QWSession=""
        setQWsession={mockSetQWsession}
      />
    );

    // Check that HeaderLogo is rendered
    expect(screen.getByTestId("header-logo")).toBeInTheDocument();
  });

  test("renders the Workout component with the correct session", () => {
    const session = "Pull";
    render(
      <QWPull
        title=""
        setTitle={mockSetTitle}
        QWSession={session}
        setQWsession={mockSetQWsession}
      />
    );

    // Check that Workout is rendered with the correct session
    expect(screen.getByTestId("workout")).toHaveTextContent(session);
  });
});
