import React, { useEffect } from "react";
import HeaderLogo from "../Components/Header/HeaderLogo";
import Navbar from "../Components/NavBar/navbar";
export default function TestPage({ title, setTitle }) {
  useEffect(() => {
    setTitle("Test page");
  }, [setTitle]);
  return (
    <div className="custom-container">
      <Navbar title={title} />

      <div className="row test">
        <div className="col-2 mt-4 text-start d-flex flex-column">
          <div style={{ width: "15vw" }}>
            <HeaderLogo />
          </div>
        </div>

        <div className="col-10 mt-5 text-start">
          <div className="row">
            <h1 className="Title">{title}</h1>
          </div>
        </div>
        <div className="row mt-4">
         
        </div>
      </div>
    </div>
  );
}
