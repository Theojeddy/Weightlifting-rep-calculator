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
          <div className="row">
            <h1>Height: {height} cm</h1>
            <h1>Weight: {weight} kg</h1>
            <h1>Age: {age}</h1>
            <h1>Sex: {sex}</h1>
          </div>

          <div className="row">
            <div className="d-flex justify-content-center mb-5">
              <Card style={{ width: "18rem" }} className="m-2 mx-auto">
                <Card.Body>
                  <Card.Title>BMR Calculation</Card.Title>
                  <Card.Text>Your Standard BMR is {BMR} kcal/day.</Card.Text>
                  <Card.Text>
                    This is the number of Kcal your body needs per day to acomplish basic life functions, such as breathing, blood circulation, cell production, ect.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 justify-content-center d-flex mb-5">
              <Card style={{ width: "18rem" }} className="m-2 mx-auto">
                <Card.Body>
                  <Card.Title>BMR Calculation</Card.Title>
                  <Card.Text>
                    Your BMR with a sedentary lifestyle is {BMR * 1.2} kcal/day.
                  </Card.Text>
                  <Card.Text>
                    People who work desk jobs and engage in very little exercise
                    or chores.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3 justify-content-center d-flex mb-5">
              <Card style={{ width: "18rem" }} className="m-2 mx-auto">
                <Card.Body>
                  <Card.Title>BMR Calculation</Card.Title>
                  <Card.Text>
                    Your BMR with a lightly active lifestyle is {BMR * 1.375}{" "}
                    kcal/day.
                  </Card.Text>
                  <Card.Text>
                    People who do chores and go on long walks/engage in exercise
                    at least 1 to 3 days in a week.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3 justify-content-center d-flex mb-5">
              <Card style={{ width: "18rem" }} className="m-2 mx-auto">
                <Card.Body>
                  <Card.Title>BMR Calculation</Card.Title>
                  <Card.Text>
                    Your BMR with a moderatly active lifestyle is {BMR * 1.55}{" "}
                    kcal/day.
                  </Card.Text>
                  <Card.Text>
                    People who move a lot during the day and workout (moderate
                    effort) at least 3 to 5 days in a week.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3 justify-content-center d-flex mb-5">
              <Card style={{ width: "18rem" }} className="m-2 mx-auto">
                <Card.Body>
                  <Card.Title>BMR Calculation</Card.Title>
                  <Card.Text>
                    Your BMR with a very active lifestyle is {BMR * 1.725}{" "}
                    kcal/day.
                  </Card.Text>
                  <Card.Text>
                    People who play sports or engage in vigorous exercise on
                    most days.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3 justify-content-center d-flex mb-5">
              <Card style={{ width: "18rem" }} className="m-1 mx-auto">
                <Card.Body>
                  <Card.Title>BMR Calculation</Card.Title>
                  <Card.Text>
                    Your BMR with a lifestyle is {BMR * 1.9} kcal/day.
                  </Card.Text>
                  <Card.Text>
                    People who do intense workouts 6 to 7 days a week with work
                    that demands physical activity.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
