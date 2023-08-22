import HeaderLogo from "../Components/Header/HeaderLogo";
import Navbar from "../Components/NavBar/navbar";
import React, { useEffect } from "react";

import "bootstrap/dist/css/bootstrap.css";

export default function Home({ title, setTitle }) {
  useEffect(() => {
    setTitle("Home");
  }, [setTitle]);

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
          <h1>{title}</h1>
        </div>
        <div className="col mt-4 "></div>
      </div>

      <div className="row mt-3">
        <h1>Welcome to Repwise!</h1>
        <h5>
          {" "}
          The Repwise is an app designed to help you Train Smart and Dominate
          Your Workout!
        </h5>
        <div className="col mt-4 text-center">
          <h3>Checkout the Team!</h3>
        </div>
        <div className="col mt-4 text-center">
          <h3>About the App</h3>
          <h5>
            Repwise has been designed and created by Theo Eddy to allow for
            optimal performance when it comes to fintess. wether it be trying to
            find a gym, trying to work out what exercise to do or trying to work
            out your optimal training range, Repwise accounts for all of your
            training needs.
          </h5>
        </div>
      </div>
    </div>
  );
}
