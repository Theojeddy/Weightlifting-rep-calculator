import HeaderLogo from "../Components/Header/Header-components/HeaderLogo";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";


export default function Home({ title, setTitle }) {
  useEffect(() => {
    setTitle("Home"); // Update the title using the setTitle function
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
        <div className="col mt-4 "></div>
      </div>

      <div className="col text-center">
        <div>
          <Link to="/Calculator">
            <button className="btn btn-primary">Calculator</button>
          </Link>
        </div>
      </div>
    </div>
  );};