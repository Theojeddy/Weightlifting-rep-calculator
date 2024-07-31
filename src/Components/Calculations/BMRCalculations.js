import React from "react";
import { Card } from "react-bootstrap";

export default function BMRCalc({ completed }) {
  const { height, weight, age, sex } = completed;

  const calculateBMR = () => {
    if (height && weight && age && sex) {
      let sexValue;
      if (sex === "male") {
        sexValue = 5;
      } else if (sex === "female") {
        sexValue = -161;
      } else {
        console.log("Invalid sex. Please use 'male' or 'female'.");
        return null;
      }
      return 10 * weight + 6.25 * height - 5 * age + sexValue;
    } else {
      console.log("Please provide valid height, weight, age, and sex values.");
      return null;
    }
  };

  const BMR = calculateBMR();

  return (
      <div className="text-center">
        {BMR !== null && (
          <div>
            <h1>Height: {height} cm</h1>
            <h1>Weight: {weight} kg</h1>
            <h1>Age: {age}</h1>
            <h1>Sex: {sex}</h1>
            
            <div className="d-flex justify-content-center mb-5">
              <Card style={{ width: "18rem" }} className="m-2 mx-auto">
                <Card.Body>
                  <Card.Title>BMR Calculation</Card.Title>
                  <Card.Text>Your BMR is {BMR} kcal/day.</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        )}
      </div>
    );
}
