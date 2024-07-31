import HeaderLogo from "../Components/Header/HeaderLogo";
import React, { useEffect } from "react";
import Navbar from "../Components/NavBar/navbar";
import Workout from "../Components/Workout call/WorkoutsCall";
import "../App/App.css";

export default function QWPush({ title, setTitle, QWSession, setQWsession }) {
  useEffect(() => {
    setTitle("Quick Push Workouts");
  }, [setTitle]);

  useEffect(() => {
    setQWsession("Push");
  }, [setQWsession]);

  return (
    <div className="custom-container">
      <Navbar title={title} />
      <div className="row">
        <div className="col mt-4 text-start">
          <div style={{ width: "15vw" }}>
            <HeaderLogo />
          </div>
        </div>

        <div className="col mt-4 text-center ">
          <h1 style={{ color: "var(--Title-orange)" }}>{title}</h1>
        </div>
        <div className="col mt-4 "></div>
      </div>
      <Workout QWSession={QWSession} setQWSession={setQWsession} />
    </div>
  );
}
