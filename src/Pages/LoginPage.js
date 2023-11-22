import HeaderLogo from "../Components/Header/HeaderLogo";
import Navbar from "../Components/NavBar/navbar";
import React, { useState } from "react";
import "../App/App.css";

import "bootstrap/dist/css/bootstrap.css";

import { Link, useNavigate } from "react-router-dom";

export default function SignUp({ title, setTitle }) {
  // const [username, setUsername] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);  

  const navigate = useNavigate();
  
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  

  console.log(username);
  console.log(password);

 async function Login() {
    const { error } = ({
      username: username,
      password: password,
    });

    // Handle the response
    if (error) {
      console.error("Error logging in:", error.message);
      setError(error.message);
    } else {
      console.log("User logged in");
      navigate("/Home", { replace: true });
    //   setIsAuthenticated(true);
      // Redirect user to the homepage after successful login
    }
  }

  return (
    <div>
      <div className="container-fluid vw4">
        <Navbar title={title} />

        <div className="row">
          <div className="col-2 mt-4 text-start d-flex flex-column">
            <div style={{ width: "15vw" }}>
              <HeaderLogo />
            </div>
            {/* Additional content for the left column */}
          </div>

          <div className="col-10 mt-5 text-start">
            <div className="row">
              <h1 className="Title">{title}</h1>
            </div>
            <div className="row mt-3 text-start pt-5">
              <h1>Welcome to Repwise!</h1>
            </div>
          </div>
          <h2 className="login_title" style={{ marginTop: "60px" }}>
            SIGN UP
          </h2>
          <form>
            <div class="mb-3">
              <label for="Username" class="form-label">
                Username
              </label>
              <input
                input
                type="text"
                class="form-control"
                placeholder="Username"
                aria-label="Username"
                onChange={handleUsernameChange}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
                onChange={handlePasswordChange}
              />
            </div>
            

            <button type="submit" class="btn btn-primary" onClick={Login}>
              Sign Up
            </button>
          </form>
          <div className="button_container">
            <Link to="/">
              <div className="back_btn" style={{ marginTop: "10px" }}>
                Back
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
