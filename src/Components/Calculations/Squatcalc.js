import React, { useState } from "react";
import { Card } from "react-bootstrap";

export default function SquatCalc({ completed }) {
  const exercise = completed.exercise;
  const weight = completed.weight;
  const reps = completed.reps;

  const generateTrainingList = () => {
    const trainingList = [];

    for (let i = 1; i <= 10; i++) {
      let percentage;
      let currentWeight;

      if (i < reps) {
        percentage = 100 + (reps - i) * 2;
      } else if (i > reps) {
        percentage = 100 - (i - reps) * 2;
      } else {
        percentage = 100;
      }

      currentWeight = Math.round((weight * percentage) / 100);

      trainingList.push({
        reps: i,
        weight: currentWeight,
      });
    }

    return trainingList;
  };

  const trainingList = generateTrainingList();

  const [viewMode, setViewMode] = useState("cards");

  const toggleViewMode = () => {
    setViewMode((prevMode) => (prevMode === "cards" ? "list" : "cards"));
  };

  return (
    <div className="text-center">
      <h1>Exercise: {exercise}</h1>
      <h1>Weight: {weight} kg</h1>
      <h1>Reps: {reps}</h1>
      <h2>Training List:</h2>
      <div className="d-flex justify-content-center mb-3">
        <button className="btn btn-primary" onClick={toggleViewMode}>
          Toggle View
        </button>
      </div>
      {viewMode === "cards" ? (
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
      ) : (
        <ul className="list-group">
          {trainingList.map((item, index) => (
            <li key={index} className="list-group-item">
              Reps: {item.reps}, Weight: {item.weight}kg
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
