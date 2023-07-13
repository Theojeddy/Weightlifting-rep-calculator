//import components dropdowns, header and calculations

import Dropdowns from "../Components/Dropdowns/Dropdown";
import Header from "../Components/Header/Header";
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
    <div>
      <Header />
      <h1>{title}</h1>
      {/* pass down props of completed form and handle form submit */}
      <Dropdowns
        completed={completedForm}
        setCompletedForm={handleFormSubmit}
      />
      {/* pass down the updated props of completed form */}
      <Calculations
      completed={completedForm}/>
    </div>
  );
}
