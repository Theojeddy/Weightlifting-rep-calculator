import HeaderLogo from "../Components/Header/HeaderLogo";
import Navbar from "../Components/NavBar/navbar";
import React, { useEffect } from "react";
import "../App/App.css";

import "bootstrap/dist/css/bootstrap.css";


export default function LandingPage({ title, setTitle }) {
  useEffect(() => {
    setTitle("Landing");
  }, [setTitle]);

  return (
    <div className="container-fluid vw4">
      <Navbar title={title} />

      <div className="row">
        <div className="col-2 mt-4 text-start d-flex flex-column">
          <div style={{ width: "15vw" }}>
            <HeaderLogo />
          </div>
          {/* Additional content for the left column */}
        </div>

        <div className="col-10 mt-5 text-start">
          <div className="row">
            <h1 className="Title">{title}</h1>
          </div>
          <div className="row mt-3 text-start pt-5">
            <h1>Welcome to Repwise!</h1>
            <h5>
              The Repwise is an app designed to help you Train Smart and
              Dominate Your Workout!
            </h5>
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-2"></div>

        <div className="col-10 mt-4 text-start">
          <h3>About the App</h3>
          <h5>
            Repwise has been designed and created by Theo Eddy to allow for
            optimal performance when it comes to fitness. Whether it be trying
            to find a gym, trying to work out what exercise to do, or trying to
            work out your optimal training range, Repwise accounts for all of
            your training needs.
          </h5>
        </div>
      </div>
      
            </div>
          
  );
}
