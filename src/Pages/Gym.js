//import components dropdowns, header and calculations


import HeaderLogo from "../Components/Header/HeaderLogo";
import HeaderHomeButton from "../Components/Header/HomeButton";

// import useEffect and useState
import React, { useState, useEffect,} from "react";

export default function GymLocator({ title, setTitle }) {
 const [address, setAddress] =useState ("")
 const [error, setError] = useState(null);
  //set up useEffect to change the title to calculator
  useEffect(() => {
    setTitle("Gym locator");
  }, [setTitle]);

  


async function fetchGyms() {
  setError(null);
  if (address === "") {
    setError("Please enter a valid address");
    return;
  }
  try {
    const response = await fetch(
      `https://api.geoapify.com/v2/places?categories=sport.fitness,sport.sports_centre&filter=circle:-2.11334,52.54686,5000&bias=proximity:-2.11334,52.54686&lang=en&limit=20&apiKey=3d1509c62983467a8c576bdff4fc9aa3`
    );
    const data = await response.json();

    console.log(data);

    if (!response.ok) {
      setError("Something went wrong, try again");
      return;
    }

    console.log(data);
    console.log(data.features[0].properties.name);
    console.log(data.features[1].properties.name);
    console.log(data.features[2].properties.name);
    console.log(data.features[3].properties.name);
  } catch (error) {
    // Handle errors that might occur during fetch or response parsing
    setError("An error occurred. Please try again later.");
  }
}

  
  return (
    <div className="container-fluid vw4">
      <div className="row">
        <div className="col mt-4 text-start">
          <div style={{ width: "10vw" }}>
            <HeaderLogo />
          </div>
        </div>
        <div
          className="col mt-4
         text-center "
        >
          <h1>{title}</h1>
        </div>
        <div className="col mt-4 text-end">
          <HeaderHomeButton />
        </div>
      </div>
      <div className="row mt-3">
        <input
          type="text"
          placeholder="Enter location"
          onChange={(e) => setAddress(e.target.value)}
        />
          
        
        <button className="btn btn-primary" onClick={fetchGyms}>
          {" "}
          search{" "}
        </button>
      </div>
    </div>
  );
}
