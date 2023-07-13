//import components dropdowns, header and calculations
import Calculations from "../Components/Calculations/Calculations";
import Dropdowns from "../Components/Dropdowns/Dropdown";
import Header from "../Components/Header/Header";

import React, { useEffect, useState } from "react";

export default function Calculator({ title, setTitle }) {
  const [completedForm, setCompletedForm] = useState({})
   
  useEffect(() => {
    setTitle("Calculator");
  }, [setTitle]);

  const handleFormSubmit = (formData) => {
    setCompletedForm(formData);
  };
console.log(completedForm);
  
  return (
    <div>
      <Header />
      <h1>{title}</h1>
      <Dropdowns
        completed={completedForm}
        setCompletedForm={handleFormSubmit}
      />
      <Calculations
      completed={completedForm}/>
    </div>
  );
}
