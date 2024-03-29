import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

export default function Navbar({title}) {
  const [showDropdown, setShowDropdown] = useState(false);
  

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };
  

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#10a6e7" }}
      >
        <div className="container d-flex justify-content-center">
          {" "}
          {/* Center-align container */}
          <Link className="navbar-brand ml-2" to="/">
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleDropdown}
            aria-expanded={showDropdown}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${showDropdown ? "show" : ""}`}
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/GymLocator">
                  Gym Locator
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Calculator">
                  Calculator
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ExerciseSearch">
                  Exercise Search
                </Link>
              </li>
              <li className="nav-item dropdown">
                <div className="container">
                  <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                      <Button
                        className="nav-link dropdown-toggle"
                        onClick={toggleDropdown}
                        aria-expanded={showDropdown}
                      >
                        Quick Workouts
                      </Button>
                      <Dropdown
                        show={showDropdown}
                        onMouseLeave={closeDropdown}
                      >
                        {showDropdown && (
                          <>
                            <Link
                              to="/QWLegs"
                              className="dropdown-item"
                              
                            >
                              Leg Day
                            </Link>
                            <Link
                              to="/QWPush"
                              className="dropdown-item"
                              
                            >
                              Push Day
                            </Link>
                            <Link
                              to="/QWPull"
                              className="dropdown-item"
                            
                            >
                              Pull Day
                            </Link>
                          </>
                        )}
                      </Dropdown>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
