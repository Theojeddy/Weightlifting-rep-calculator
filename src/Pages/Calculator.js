//import components dropdowns, header and calculations

import Dropdowns from "../Components/Dropdowns/Dropdown";
import HeaderLogo from "../Components/Header/HeaderLogo";
import HeaderHomeButton from "../Components/Header/HomeButton";
import Calculations from "../Components/Calculations/Calculations";
// import useEffect and useState
import React, { useEffect, useState } from "react";

export default function Calculator({ title, setTitle }) {
  // set up useState of completed form
  const [completedForm, setCompletedForm] = useState({})
   //set up useEffect to change the title to calculator
  useEffect(() => {
    setTitle("Calculator");
  }, [setTitle]);
// handle submit to update the value of completed form
  const handleFormSubmit = (formData) => {
    setCompletedForm(formData);
  };
console.log(completedForm);
  
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
      {/* end for header row */}


      {/* start of page content */}
      {/* pass down props of completed form and handle form submit */}

      <Dropdowns
        completed={completedForm}
        setCompletedForm={handleFormSubmit}
      />
      {/* pass down the updated props of completed form */}
      <Calculations completed={completedForm} />
    </div>
  );
}
