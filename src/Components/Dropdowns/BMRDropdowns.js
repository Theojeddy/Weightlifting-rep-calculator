import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function BMRDropdowns({ completedForm, setCompletedForm }) {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [selectedSex, setSelectedSex] = useState("");

  const sexOptions = [{ name: "Male" }, { name: "Female" }];

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleSexChange = (event) => {
    setSelectedSex(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newFormData = {
      height: height,
      weight: parseFloat(weight),
      age: parseInt(age),
      sex: selectedSex.toLowerCase(),
    };

    if (typeof setCompletedForm === "function") {
      setCompletedForm(newFormData);
    }

    setHeight("");
    setWeight("");
    setAge("");
    setSelectedSex("");
  };

  return (
    <div className="container-fluid">
      <div className="row mt-1">
        <div className="col mt-4 text-center">
          <div id="height-input">
            <p>Please input your height in centimeters.</p>
            <input
              type="number"
              value={height}
              onChange={handleHeightChange}
              placeholder="Enter Height in cm"
            />
          </div>
        </div>
        <div className="col mt-4 text-center">
          <div id="age-input">
            <p>Please input your age in years.</p>
            <input
              type="number"
              value={age}
              onChange={handleAgeChange}
              placeholder="Enter Age in Years"
            />
          </div>
        </div>
        <div className="col mt-4 text-center">
          <div id="weight-input">
            <p>Please input your body weight in kg.</p>
            <input
              type="number"
              value={weight}
              onChange={handleWeightChange}
              placeholder="Enter Weight in kg"
            />
          </div>
        </div>
        <div className="col mt-4 text-center">
          <div id="sex-input">
            <p>Please select your sex.</p>
            <select value={selectedSex} onChange={handleSexChange}>
              <option value="">Select your Sex</option>
              {sexOptions.map((sex, index) => (
                <option key={index} value={sex.name.toLowerCase()}>
                  {sex.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col text-center">
            <button className="btn btn-primary" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
