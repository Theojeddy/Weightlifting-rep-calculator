import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
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
              {/* Dropdown */}
              <div className="container">
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    {/* Button for Dropdown */}
                    <Button
                      className="nav-link dropdown-toggle"
                      onClick={toggleDropdown}
                      aria-expanded={showDropdown}
                    >
                      Quick Workouts
                    </Button>
                    {/* Dropdown content */}
                    <Dropdown show={showDropdown} onMouseLeave={closeDropdown}>
                      {showDropdown && (
                        <>
                          <Link to="/QuickWorkouts" className="dropdown-item">
                            Leg Day
                          </Link>
                          <Link to="/QuickWorkouts" className="dropdown-item">
                            Push Day
                          </Link>
                          <Link to="/QuickWorkouts" className="dropdown-item">
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
      </nav>
    </div>
  );
}
