import HeaderLogo from "../Components/Header/HeaderLogo";
import React, { useEffect } from "react";


export default function QuickWorkouts({ title, setTitle }) {
  useEffect(() => {
    setTitle("Quick Workouts");
  }, [setTitle]);
  return (
    <div className="container-fluid vw4">
      <div className="row">
        <div className="col mt-4 text-start">
          <div style={{ width: "15vw" }}>
              <HeaderLogo />
            
          </div>
        </div>

        <div className="col mt-4 text-center ">
          <h1>{title}</h1>
        </div>
        <div className="col mt-4 "></div>
      </div>
    </div>
  );
}
