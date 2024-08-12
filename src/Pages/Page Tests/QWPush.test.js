import React from "react";
import { render, screen } from "@testing-library/react";
import QWPush from "../QWPush";

// Mock components that QWPush depends on
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

describe("QWPush Component", () => {
  let mockSetTitle, mockSetQWsession;

  beforeEach(() => {
    mockSetTitle = jest.fn();
    mockSetQWsession = jest.fn();
  });

  test('sets the title to "Quick Push Workouts" on mount', () => {
    render(
      <QWPush
        title=""
        setTitle={mockSetTitle}
        QWSession=""
        setQWsession={mockSetQWsession}
      />
    );

    // Check that setTitle was called with the correct argument
    expect(mockSetTitle).toHaveBeenCalledWith("Quick Push Workouts");
    expect(mockSetTitle).toHaveBeenCalledTimes(1);
  });

  test('sets the session to "Push" on mount', () => {
    render(
      <QWPush
        title=""
        setTitle={mockSetTitle}
        QWSession=""
        setQWsession={mockSetQWsession}
      />
    );

    // Check that setQWsession was called with the correct argument
    expect(mockSetQWsession).toHaveBeenCalledWith("Push");
    expect(mockSetQWsession).toHaveBeenCalledTimes(1);
  });

  test("renders the Navbar with the correct title", () => {
    const title = "Quick Push Workouts";
    render(
      <QWPush
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
      <QWPush
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
    const session = "Push";
    render(
      <QWPush
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
