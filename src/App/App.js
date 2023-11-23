import Calculator from "../Pages/Calculator";
import Home from "../Pages/Home";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import GymLocator from "../Pages/Gym";
import ExerciseSearch from "../Pages/Exercise";
import QWLegs from "../Pages/QWLegs";
import QWPush from "../Pages/QWPush";
import QWPull from "../Pages/QWPull";
import TestPage from "../Pages/TestPage";
import LandingPage from "../Pages/LandingPage";
import SignUp from "../Pages/Signup";
import LoginPage from "../Pages/LoginPage";
import Navbar from "../Components/NavBar/navbar";

function App() {
  const [title, setTitle] = useState("Home");
  const [QWSession, setQWsession] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <div
      className="container-fluid custom-container"
      style={{ background: "var(--background-white)" }}
    >
      <div className="App">
        <BrowserRouter>
          {authenticated && (
            <div className="container-fluid vw4">
              <Navbar title={title} setTitle={setTitle} />
            </div>
          )}

          <Routes>
            <Route
              path="/Home"
              element={
                authenticated ? (
                  <div className="container-fluid vw4">
                    <Home title={title} setTitle={setTitle} />
                  </div>
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />
            <Route
              path="/Calculator"
              element={
                authenticated ? (
                  <Calculator title={title} setTitle={setTitle} />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />
            <Route
              path="/GymLocator"
              element={
                authenticated ? (
                  <GymLocator title={title} setTitle={setTitle} />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />
            <Route
              path="/ExerciseSearch"
              element={
                authenticated ? (
                  <ExerciseSearch title={title} setTitle={setTitle} />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />
            <Route
              path="/QWLegs"
              element={
                authenticated ? (
                  <QWLegs
                    title={title}
                    setTitle={setTitle}
                    QWSession={QWSession}
                    setQWsession={setQWsession}
                  />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />
            <Route
              path="/QWPush"
              element={
                authenticated ? (
                  <QWPush
                    title={title}
                    setTitle={setTitle}
                    QWSession={QWSession}
                    setQWsession={setQWsession}
                  />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />
            <Route
              path="/QWPull"
              element={
                authenticated ? (
                  <QWPull
                    title={title}
                    setTitle={setTitle}
                    QWSession={QWSession}
                    setQWsession={setQWsession}
                  />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />
            <Route
              path="/TestPage"
              element={
                authenticated ? (
                  <TestPage title={title} setTitle={setTitle} />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />
            <Route
              path="/"
              element={<LandingPage title={title} setTitle={setTitle} />}
            />
            <Route
              path="/Signup"
              element={<SignUp title={title} setTitle={setTitle} />}
            />
            <Route
              path="/LoginPage"
              element={
                <LoginPage
                  title={title}
                  setTitle={setTitle}
                  authenticated={authenticated}
                  setAuthenticated={setAuthenticated}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
