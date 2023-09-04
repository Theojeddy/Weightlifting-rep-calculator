import HeaderLogo from "../Components/Header/HeaderLogo";
import React, { useEffect } from "react";
import Navbar from "../Components/NavBar/navbar";
import Workout from "../Components/Workout call/WorkoutsCall";
import "../App/App.css";

export default function QWLegs({ title, setTitle, QWSession, setQWsession }) {
  useEffect(() => {
    setTitle("Quick Leg Workouts");
  }, [setTitle]);

useEffect(() =>{
    setQWsession("legs");
},[setQWsession] );

  return (
    <div className="container-fluid vw4">
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
