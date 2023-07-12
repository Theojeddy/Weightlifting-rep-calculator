
import { useState } from "react";

export default function Dropdowns() {
    const [selectedExercises, setSelectedExercises] = useState(null);
    const [weight, setWeight] = useState("");
    const [selectedReps, setSelectedReps] = useState(null);
    const Exercises = [
      { name: "Squat" },
      { name: "Bench" },
      { name: "Deadlift" },
    ];
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
    const handleExerciseChange = (event) => {
      setSelectedExercises(event.target.value);
    };
    const handleWeightChange = (event) => {
      const parsedWeight = parseInt(event.target.value); 
      setWeight(parsedWeight);
    };
    const handleRepsChange = (event) => {
    const parsedReps= parseInt(event.target.value);
      setSelectedReps(parsedReps);
    };
    const handleSubmit = (event) => {
      event.preventDefault();

      const formData = {
        exercise: selectedExercises,
        weight: weight,
        reps: selectedReps,
      };

      console.log(formData); // You can do further processing with the form data

      // Reset the form fields
      setWeight("");
      setSelectedExercises("");
      setSelectedReps("");
    };
    return (
      <div>
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

        <div className="Weight">
          <input
            type="number"
            value={weight}
            onChange={handleWeightChange}
            placeholder="Enter Weight in kg"
          ></input>
          
        </div>

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
        <div className="Sumbit">
        <button onClick={handleSubmit}>
          Submit
        </button>

        </div>
      </div>
    );};