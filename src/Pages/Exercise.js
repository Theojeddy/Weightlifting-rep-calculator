//import components dropdowns, header and calculations

import HeaderLogo from "../Components/Header/HeaderLogo";
import HeaderHomeButton from "../Components/Header/HomeButton";

// import useEffect and useState
import React, { useEffect } from "react";

export default function ExerciseSearch({ title, setTitle }) {
  //set up useEffect to change the title to calculator
  useEffect(() => {
    setTitle("Exercise search");
  }, [setTitle]);

  return (
    <div className="container-fluid vw4">
      <div className="row">
        <div className="col mt-4 text-start">
          <div style={{ width: "15vw" }}>
            <HeaderLogo />
          </div>
        </div>
        <div
          className="col mt-4
         text-center "
        >
          <h1>{title}</h1>
        </div>
        <div className="col mt-4 text-end">
          <HeaderHomeButton />
        </div>
      </div>
      <div className="row text-center">
        <div className="col text-center">
          <h1> This page is currently under maintainance</h1>
          <HeaderHomeButton />
        </div>
      </div>
    </div>
  );
}
