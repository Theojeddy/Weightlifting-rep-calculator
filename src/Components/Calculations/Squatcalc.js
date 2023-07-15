import React from "react";

export default function SquatCalc({ completed }) {
  const { exercise, weight, reps } = completed;

  const generateTrainingList = () => {
    const trainingList = [];

    for (let i = 1; i <= 10; i++) {
      const percentage = getPercentageFromRepRange(i);
      const currentWeight = Math.round(weight * percentage);

      trainingList.push({
        reps: i,
        weight: currentWeight,
      });
    }

    return trainingList;
  };

  const getPercentageFromRepRange = (reps) => {
    if (reps === 2) return 0.92; // Approximately 92% of 1RM
    if (reps === 3) return 0.88; // Approximately 88% of 1RM
    if (reps === 4) return 0.85; // Approximately 85% of 1RM
    if (reps === 5) return 0.82; // Approximately 82% of 1RM
    if (reps === 6) return 0.8; // Approximately 80% of 1RM
    if (reps === 7) return 0.78; // Approximately 78% of 1RM
    if (reps === 8) return 0.76; // Approximately 76% of 1RM
    if (reps === 9) return 0.75; // Approximately 75% of 1RM
    if (reps === 10) return 0.73; // Approximately 73% of 1RM

    return 1; // Default to 100% of 1RM
  };

  const trainingList = generateTrainingList();

  return (
    <div>
      <h1>Exercise: {exercise}</h1>
      <h1>Weight: {weight}</h1>
      <h1>Reps: {reps}</h1>
      <h2>Training List:</h2>
      <ul>
        {trainingList.map((item, index) => (
          <li key={index}>
            Reps: {item.reps}, Weight: {item.weight}kg
          </li>
        ))}
      </ul>
    </div>
  );
}
