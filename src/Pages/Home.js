import HeaderLogo from "../Components/Header/HeaderLogo";
import Navbar from "../Components/NavBar/navbar";
import React, { useEffect } from "react";
import "../App/App.css";

import "bootstrap/dist/css/bootstrap.css";
import TheoProfile from "../Components/Team pictures/TheoProfile";

export default function Home({ title, setTitle }) {
  useEffect(() => {
    setTitle("Home");
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
          <h1 style={{ color: "var(--secondary-blue)" }}>{title}</h1>
        </div>
        <div className="row mt-3 text-start pt-5">
          <h1>Welcome to Repwise!</h1>
          <h5>
            The Repwise is an app designed to help you Train Smart and Dominate Your Workout!
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
          optimal performance when it comes to fitness. Whether it be trying to
          find a gym, trying to work out what exercise to do, or trying to work
          out your optimal training range, Repwise accounts for all of your
          training needs.
        </h5>
      </div>
    </div>

    <div className="row mt-4 pt-5"></div>
    <div className="row mt-1 pt5">
      <div className="col-2"></div>
      <div className="col-10 mt-4 text-start">
        <h3>Checkout the Team!</h3>
      </div>
    </div>

    <div className="row mt-4">
      <div className="col-2"></div>

      <div className="col-10">
        <div className="row">
          <div className="col-6" style={{ width: "20vw" }}>
            <TheoProfile />
          </div>
          <div className="col-6 text-start">
            <h4>Hi, I'm Theo!</h4>
            <p>
              I'm a professional American footballer who plays across Europe. I
              created RepWise because when I'm traveling and need to train, I
              always seem to have a few problems: Trying to find a gym, trying
              to figure out what exercises I should do, and the weights I
              should be pushing myself to.
            </p>
            <p>So I created Repwise, where all of these challenges can be overcome!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)};