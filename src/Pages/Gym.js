//import components dropdowns, header and calculations


import HeaderLogo from "../Components/Header/HeaderLogo";
import HeaderHomeButton from "../Components/Header/HomeButton";

// import useEffect and useState
import React, { useEffect,} from "react";

export default function GymLocator({ title, setTitle }) {
 
  //set up useEffect to change the title to calculator
  useEffect(() => {
    setTitle("Gym locator");
  }, [setTitle]);

  


async function fetchGyms() {
    const response = await fetch('https://api.geoapify.com/v2/places?categories=sport.fitness,sport.sports_centre&filter=circle:-2.0816813,52.5110832,2000&bias=proximity:-2.0816813,52.5110832&lang=en&limit=20&apiKey=3d1509c62983467a8c576bdff4fc9aa3');
    const data = await response.json();      

console.log(data);
console.log(data.features[0].properties.name);
console.log(data.features[1].properties.name);
console.log(data.features[2].properties.name);
console.log(data.features[3].properties.name);
    
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
        <button onClick={fetchGyms}> search </button>
      </div>
      

    </div>
  );
}
