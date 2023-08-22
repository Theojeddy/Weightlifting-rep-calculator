import Calculator from "../Pages/Calculator";
import Home from "../Pages/Home";
import QuickWorkouts from "../Pages/QuickWorkouts";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import GymLocator from "../Pages/Gym";
import ExerciseSearch from "../Pages/Exercise";



function App() {
  const [title, setTitle] = useState("Home")

  
  return (
    <div className="container-fluid custom-container">
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Home title={title} setTitle={setTitle} />}
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
              path="/QuickWorkouts"
              element={<QuickWorkouts title={title} setTitle={setTitle} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
