import React, { useEffect, useState } from "react";
import HeaderLogo from "../Components/Header/HeaderLogo";
import HeaderHomeButton from "../Components/Header/HomeButton";
import { Card, Button } from "react-bootstrap";
import Navbar from "../Components/NavBar/navbar";

export default function ExerciseSearch({ title, setTitle }) {
  const [exerciseType, setExerciseType] = useState("");
  const [workingMuscle, setWorkingMuscle] = useState("");
  const [error, setError] = useState(null);
  const [contentData, setContentData] = useState([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");

  useEffect(() => {
    setTitle("Exercise search");
  }, [setTitle]);

  const Exercises = [
    { name: "Cardio" },
    { name: "Olympic weightlifting" },
    { name: "Plyometric" },
    { name: "Powerlifting" },
    { name: "Strength" },
    { name: "Stretching" },
    { name: "Strongman" },
  ];

  const Muscles = [
    { name: "Abdominals" },
    { name: "Abductors" },
    { name: "Adductors" },
    { name: "Biceps" },
    { name: "Calves" },
    { name: "Chest" },
    { name: "Forearms" },
    { name: "Glutes" },
    { name: "Hamstrings" },
    { name: "Lats" },
    { name: "Lower Back" },
    { name: "Middle Back" },
    { name: "Neck" },
    { name: "Quadriceps" },
    { name: "Traps" },
    { name: "Triceps" },
  ];

  async function fetchExercise() {
    setError(null);

    try {
      if (exerciseType !== "") {
        const response = await fetch(
          "https://api.api-ninjas.com/v1/exercises?type=" + exerciseType,
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

        console.log("Exercise type:", exerciseType);
        console.log("Data from API:", data);

        if(data.length === 0) {
          setError("Sorry, something went wrong. Please try again.");
          return;
        } else {

        setContentData(data.slice(0, 10));
        console.log("Sliced exerciseData:", contentData);

        setExerciseType("");
        setSelectedDifficulty("all"); // Reset selected difficulty
        }
      } else if (workingMuscle !== "") {
        const response = await fetch(
          "https://api.api-ninjas.com/v1/exercises?muscle=" + workingMuscle,
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

        console.log("Exercise type:", workingMuscle);
        console.log("Data from API:", data);
        
        if(data.length === 0) {
          setError("Sorry, something went wrong. Please try again.");
          return;
        } else {

        setContentData(data.slice(0, 10));
        console.log("Sliced exerciseData:", contentData);
        setWorkingMuscle("");
        setSelectedDifficulty("all"); // Reset selected difficulty
        }
      } else {
        setError("Please select an exercise type or a working muscle.");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
      console.error("Fetch error:", error);
    }
  }

  const handleExerciseChange = (event) => {
    setExerciseType(event.target.value);
  };

  const handleMuscleChange = (event) => {
    setWorkingMuscle(event.target.value);
  };

  const handleDifficultyToggle = (difficulty) => {
    setSelectedDifficulty(difficulty);
  };

  const filteredContent = contentData.filter((content) => {
    return (
      selectedDifficulty === "all" || content.difficulty === selectedDifficulty
    );
  });

  return (
    <div className="container-fluid vw4">
      <Navbar title={title} />
      <div className="row">
        <div className="col mt-4 text-start">
          <div style={{ width: "15vw" }}>
            <HeaderLogo />
          </div>
        </div>
        <div className="col mt-4 text-center ">
          <h1>{title}</h1>
        </div>
        <div className="col mt-4 text-end">
          <HeaderHomeButton />
        </div>
      </div>

      {/* start of content */}
      <div className="row">
        <h5>
          Please select either the type of training or the muscle groups you'd
          like to exercise
        </h5>
        <div className="col">
          <select value={exerciseType} onChange={handleExerciseChange}>
            <option value="">Choose an Exercise</option>
            {Exercises.map((exercise, index) => (
              <option key={index} value={exercise.name}>
                {exercise.name}
              </option>
            ))}
          </select>
        </div>
        <div className="text-center"> OR </div>

        <div className="col">
          <select value={workingMuscle} onChange={handleMuscleChange}>
            <option value="">Select the muscle you wish to work</option>
            {Muscles.map((Muscle, index) => (
              <option key={index} value={Muscle.name}>
                {Muscle.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="col text-center mt-4">
        <button className="btn btn-primary" onClick={fetchExercise}>
          Submit
        </button>
      </div>
      <div className="row text-center">
        {error && <p className="text-danger">{error}</p>}
        <div className="col text-center">
          <div className="row justify-content-center">
            {filteredContent.map((content, index) => (
              <Card key={index} style={{ width: "18rem" }} className="m-2">
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{content.name}</Card.Title>
                  <Card.Text>Difficulty : {content.difficulty}</Card.Text>
                  <Card.Text>Type: {content.type}</Card.Text>
                  <Card.Text>Equipment required: {content.equipment}</Card.Text>
                  <Card.Text>Instructions: {content.instructions}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
      {/* Buttons to toggle difficulty */}
      <div className="col text-center mt-4">
        <Button
          variant="primary"
          onClick={() => handleDifficultyToggle("all")}
          className={selectedDifficulty === "all" ? "active" : ""}
        >
          All
        </Button>
        <Button
          variant="primary"
          onClick={() => handleDifficultyToggle("beginner")}
          className={selectedDifficulty === "beginner" ? "active" : ""}
        >
          Beginner
        </Button>
        <Button
          variant="primary"
          onClick={() => handleDifficultyToggle("intermediate")}
          className={selectedDifficulty === "intermediate" ? "active" : ""}
        >
          Intermediate
        </Button>
        <Button
          variant="primary"
          onClick={() => handleDifficultyToggle("expert")}
          className={selectedDifficulty === "expert" ? "active" : ""}
        >
          Expert
        </Button>
      </div>
    </div>
  );
}
