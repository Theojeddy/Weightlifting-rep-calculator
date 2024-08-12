//import components dropdowns, header and calculations

import BMRDropdowns from "../Components/Dropdowns/BMRDropdowns";
import HeaderLogo from "../Components/Header/HeaderLogo";
import BMRCalc from "../Components/Calculations/BMRCalculations";
// import useEffect and useState
import React, { useEffect, useState } from "react";
import Navbar from "../Components/NavBar/navbar";
import "../App/App.css";

export default function BMRCalculator({ title, setTitle }) {
  // set up useState of completed form
  const [completedForm, setCompletedForm] = useState({});
  //set up useEffect to change the title to calculator
  useEffect(() => {
    setTitle("BMR Calculator");
  }, [setTitle]);
  // handle submit to update the value of completed form
  const handleFormSubmit = (formData) => {
    setCompletedForm(formData);
  };
  console.log(completedForm);

  return (
    <div className="custom-container ">
      <Navbar title={title} />
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
          <h1 style={{ color: "var(--Title-orange)" }}>{title}</h1>
        </div>
        <div className="col mt-4 text-end"></div>
      </div>
      <div className="text-center">
        <h5>
          This Calculator uses the formula from Basal Metabolic Rate, Mifflin St
          Jeor Equation
        </h5>
        <h6>
          Pawlik, K. and Mucha, M. and Rain, R. BMR Calculator (Basal Metabolic
          Rate, Mifflin St Jeor Equation). Available at:
          https://www.omnicalculator.com/health/bmr. Accessed: Jul 31, 2024.
        </h6>
      </div>

      <BMRDropdowns
        completed={completedForm}
        setCompletedForm={handleFormSubmit}
      />
      {/* pass down the updated props of completed form */}
      <BMRCalc completed={completedForm} />
    </div>
  );
}
