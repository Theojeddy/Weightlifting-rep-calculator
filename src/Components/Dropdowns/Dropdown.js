import { useState } from "react";

export default function Dropdowns({ completedForm, setCompletedForm }) {
  const [selectedExercises, setSelectedExercises] = useState("");
  const [weight, setWeight] = useState("");
  const [selectedReps, setSelectedReps] = useState("");

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
    setWeight(event.target.value);
  };

  const handleRepsChange = (event) => {
    setSelectedReps(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newFormData = {
      exercise: selectedExercises,
      weight: parseFloat(weight),
      reps: parseInt(selectedReps),
    };

    if (typeof setCompletedForm === "function") {
      setCompletedForm(newFormData);
    }

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
        />
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
      <div className="Submit">
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}
