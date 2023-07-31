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
      

    </div>
  );
}
