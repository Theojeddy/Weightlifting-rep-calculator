import HeaderLogo from "../Components/Header/HeaderLogo";
import Navbar from "../Components/NavBar/navbar";
import React, { useEffect } from "react";

import "bootstrap/dist/css/bootstrap.css";

export default function Home({ title, setTitle }) {
  useEffect(() => {
    setTitle("Home");
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

      <Navbar/>
     

    </div>
  );
}
