import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

export default function Workout({ QWSession, setQWSession }) {
  const [error, setError] = useState(null);
  const [exercise1Data, setExercise1Data] = useState([]);
  const [exercise2Data, setExercise2Data] = useState([]);
  const [exercise3Data, setExercise3Data] = useState([]);
  const [exercise4Data, setExercise4Data] = useState([]);

  let exercise1 = "";
  let exercise2 = "";
  let exercise3 = "";
  let exercise4 = "";

  if (QWSession === "legs") {
    exercise1 = "Quadriceps";
    exercise2 = "Hamstrings";
    exercise3 = "Calves";
    exercise4 = "Glutes";
  } else if (QWSession === "Push") {
    exercise1 = "Chest";
    exercise2 = "Traps";
    exercise3 = "Triceps";
    exercise4 = "Abductors";
  } else if (QWSession === "Pull") {
    exercise1 = "Lats";
    exercise2 = "Biceps";
  }

  useEffect(() => {
    async function fetchExerciseData(exerciseName, setDataFunction) {
      setError(null);
      try {
        if (exerciseName !== "") {
          const response = await fetch(
            "https://api.api-ninjas.com/v1/exercises?muscle=" + exerciseName,
            {
              headers: {
                "X-Api-Key": "GfsoVGt8rCMmEJwbDHPTyg==wn6t1sOI20NaTL6R",
              },
            }
          );

          console.log("Response status:", response.status);

          if (!response.ok) {
            setError("Sorry, something went wrong. Please try again.");
            return;
          }

          const data = await response.json();

          console.log("Exercise type:", exerciseName);
          console.log("Data from API:", data);

          if (data.length === 0) {
            setError("Sorry, something went wrong. Please try again.");
            return;
          } else {
            setDataFunction(data.slice(0, 2));
            console.log("Sliced exerciseData:", data);
          }
        }
      } catch (error) {
        console.error("An error occurred:", error);
        setError("An error occurred. Please try again later.");
      }
      
    }

    fetchExerciseData(exercise1, setExercise1Data);
    fetchExerciseData(exercise2, setExercise2Data);
    fetchExerciseData(exercise3, setExercise3Data);
    fetchExerciseData(exercise4, setExercise4Data);
  }, [exercise1, exercise2, exercise3, exercise4, QWSession]);
  setQWSession("1");
  console.log(QWSession);

  return (
    <div className="container-fluid vw4">
      <div className="row text-center">
        {error && <p className="text-danger">{error}</p>}
        <div className="col text-center">
          <div className="row justify-content-center">
            {exercise1Data.map((content, index) => (
              <Card key={index} style={{ width: "18rem" }} className="m-2">
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{content.name}</Card.Title>
                  <Card.Text>Difficulty : {content.difficulty}</Card.Text>
                  <Card.Text>Type: {content.type}</Card.Text>
                  <Card.Text>Equipment required: {content.equipment}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
          <div className="row justify-content-center">
            {exercise2Data.map((content, index) => (
              <Card key={index} style={{ width: "18rem" }} className="m-2">
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{content.name}</Card.Title>
                  <Card.Text>Difficulty : {content.difficulty}</Card.Text>
                  <Card.Text>Type: {content.type}</Card.Text>
                  <Card.Text>Equipment required: {content.equipment}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
          <div className="row justify-content-center">
            {exercise3Data.map((content, index) => (
              <Card key={index} style={{ width: "18rem" }} className="m-2">
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{content.name}</Card.Title>
                  <Card.Text>Difficulty : {content.difficulty}</Card.Text>
                  <Card.Text>Type: {content.type}</Card.Text>
                  <Card.Text>Equipment required: {content.equipment}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
          <div className="row justify-content-center">
            {exercise4Data.map((content, index) => (
              <Card key={index} style={{ width: "18rem" }} className="m-2">
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{content.name}</Card.Title>
                  <Card.Text>Difficulty : {content.difficulty}</Card.Text>
                  <Card.Text>Type: {content.type}</Card.Text>
                  <Card.Text>Equipment required: {content.equipment}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
