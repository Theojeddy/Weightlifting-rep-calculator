import Calculator from "../Pages/Calculator";
import Home from "../Pages/Home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import GymLocator from "../Pages/Gym";
import ExerciseSearch from "../Pages/Exercise";
import QWLegs from "../Pages/QWLegs";
import QWPush from "../Pages/QWPush";
import QWPull from "../Pages/QWPull";
import TestPage from "../Pages/TestPage";
import BMRCalculator from "../Pages/NutritionCalculator";
import AboutUs from "../Pages/AboutUs";


//Main App
function App() {
  const [title, setTitle] = useState("Home")
  const [QWSession, setQWsession] = useState("Loading...");

  
  return (
    <div
      className="custom-container"
      style={{ background: "var(--background-white)", height: "100%" }}
    >
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Home title={title} setTitle={setTitle} />}
            />
            <Route
              path="/AboutUs"
              element={<AboutUs title={title} setTitle={setTitle} />}
            />
            <Route
              path="/Calculator"
              element={<Calculator title={title} setTitle={setTitle} />}
            />
            <Route
              path="/GymLocator"
              element={<GymLocator title={title} setTitle={setTitle} />}
            />
            <Route
              path="/ExerciseSearch"
              element={<ExerciseSearch title={title} setTitle={setTitle} />}
            />
            <Route
              path="/QWLegs"
              element={
                <QWLegs
                  title={title}
                  setTitle={setTitle}
                  QWSession={QWSession}
                  setQWsession={setQWsession}
                />
              }
            />
            <Route
              path="/QWPush"
              element={
                <QWPush
                  title={title}
                  setTitle={setTitle}
                  QWSession={QWSession}
                  setQWsession={setQWsession}
                />
              }
            />
            <Route
              path="/QWPull"
              element={
                <QWPull
                  title={title}
                  setTitle={setTitle}
                  QWSession={QWSession}
                  setQWsession={setQWsession}
                />
              }
            />
            <Route
              path="/BMRCalculator"
              element={<BMRCalculator title={title} setTitle={setTitle} />}
            />
            <Route
              path="/TestPage"
              element={<TestPage title={title} setTitle={setTitle} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
