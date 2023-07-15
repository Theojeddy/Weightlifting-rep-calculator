// import usesate
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";


// export function with props of completed form and setcompleted form from calculator.js
export default function Dropdowns({ completedForm, setCompletedForm }) {
  //set useState for exercise
  const [selectedExercises, setSelectedExercises] = useState("");
  //set useState for weight
  const [weight, setWeight] = useState("");
  //set useState for reps
  const [selectedReps, setSelectedReps] = useState("");


  // set the value for exercises
  const Exercises = [
    { name: "Squat" },
    { name: "Bench Press" },
    { name: "Deadlift" },
  ];
// set the values for reps
  const Reps = [
    { name: "1" },
    { name: "2" },
    { name: "3" },
    { name: "4" },
    { name: "5" },
    { name: "6" },
    { name: "7" },
    { name: "8" },
    { name: "9" },
    { name: "10" },
  ];

  // arrow function to change the value of exercise
  const handleExerciseChange = (event) => {
    setSelectedExercises(event.target.value);
  };
// arrow function to set value for weight
  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };
// arrow function to set the value of reps
  const handleRepsChange = (event) => {
    setSelectedReps(event.target.value);
  };

  // arrow function when submit button pressed to store all of the data in an object called form data
  const handleSubmit = (event) => {
    event.preventDefault();

    const newFormData = {
      exercise: selectedExercises,
      weight: parseFloat(weight),
      reps: parseInt(selectedReps),
    };
// if the function is deemed worthy update the completed form with the value of new form data
    if (typeof setCompletedForm === "function") {
      setCompletedForm(newFormData);
    }
    // reset the values of the dropdwons and input fields to empty strings
    setWeight("");
    setSelectedExercises("");
    setSelectedReps("");
  };

  return (
    <div>
      {/* dropdwon for exercise */}
      <div className="exercise">
        <select value={selectedExercises} onChange={handleExerciseChange}>
          <option value="">Choose an Exercise</option>
          {Exercises.map((exercise, index) => (
            <option key={index} value={exercise.name}>
              {exercise.name}
            </option>
          ))}
        </select>
      </div>
      {/* input field for weight */}
      <div className="Weight">
        <input
          type="number"
          value={weight}
          onChange={handleWeightChange}
          placeholder="Enter Weight in kg"
        />
      </div>
      {/* dropdwon for the number of reps  */}
      <div className="Reps">
        <select value={selectedReps} onChange={handleRepsChange}>
          <option value="">Number of Reps</option>
          {Reps.map((rep, index) => (
            <option key={index} value={rep.name}>
              {rep.name}
            </option>
          ))}
        </select>
      </div>

      {/* button to trigger the form data */}
      <div>
        <button className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}
