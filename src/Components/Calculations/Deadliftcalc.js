import { Card } from "react-bootstrap";
import React from "react";

export default function DeadliftCalc({ completed }) {
  // Destructure the 'completed' prop
  const exercise = completed.exercise;
  const weight = completed.weight;
  const reps = completed.reps;

  // Function to generate the training list
  const generateTrainingList = () => {
    const trainingList = [];

    // Loop through rep ranges from 1 to 10
    for (let i = 1; i <= 10; i++) {
      let percentage;
      let currentWeight;

      // Calculate percentage adjustment based on rep range
      if (i < reps) {
        percentage = 100 + (reps - i) * 2;
      } else if (i > reps) {
        percentage = 100 - (i - reps) * 2;
      } else {
        percentage = 100;
      }

      // Calculate the weight for the current rep range
      currentWeight = Math.round((weight * percentage) / 100);

      // Add the rep range and weight to the training list
      trainingList.push({
        reps: i,
        weight: currentWeight,
      });
    }

    return trainingList;
  };

  // Generate the training list
  const trainingList = generateTrainingList();

  // Render the component
  return (
    <div className="text-center">
      <h1>Exercise: {exercise}</h1>
      <h1>Weight: {weight}</h1>
      <h1>Reps: {reps}</h1>
      <h2>Training List:</h2>
      <div className="d-flex flex-wrap justify-content-center">
        {trainingList.map((item, index) => (
          <Card key={index} style={{ width: "18rem" }} className="m-2">
            <Card.Body>
              <Card.Title>Reps: {item.reps}</Card.Title>
              <Card.Text>Weight: {item.weight}kg</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}
