import axios from "axios";
import { Card } from "react-bootstrap";
import HeaderLogo from "../Components/Header/HeaderLogo";
import HeaderHomeButton from "../Components/Header/HomeButton";

import React, { useState, useEffect } from "react";

export default function GymLocator({ title, setTitle }) {
  const [address, setAddress] = useState("");
  const [error, setError] = useState(null);
  const [gymData, setGymData] = useState([]);
  const [cardsRendered, setCardsRendered] = useState(0); // State to track the number of cards rendered

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
      // Geocode the address to obtain latitude and longitude
      const geocodeUrl = `https://nominatim.openstreetmap.org/?addressdetails=1&
      q=${encodeURIComponent(
        address
      )}&format=json&limit=1`;
      
      

      const geocodeResponse = await axios.get(geocodeUrl);
      if (geocodeResponse.data.length === 0) {
        setError("Sorry, I can't find that location, please try again");
        return;
      }
      const { lat, lon } = geocodeResponse.data[0];

      // Use the obtained coordinates in the API request
      const url = `https://api.geoapify.com/v2/places?categories=sport.fitness,sport.sports_centre&filter=circle:${lon},${lat},5000&bias=proximity:${lon},${lat}&lang=en&limit=20&apiKey=3d1509c62983467a8c576bdff4fc9aa3`;

      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        setError("Sorry, something went wrong, please try again");
        return;
      }

      setGymData(data.features.slice(0, 20)); // Update gymData with the first 20 elements of the data array
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }
  }

  useEffect(() => {
    // Update the count of cards rendered whenever gymData changes
    setCardsRendered(gymData.length);
  }, [gymData]);

  return (
    <div className="container-fluid vw4">
      <div className="row">
        <div className="col mt-4 text-start">
          <div style={{ width: "10vw" }}>
            <HeaderLogo />
          </div>
        </div>
        <div className="col mt-4 text-center ">
          <h1>{title}</h1>
        </div>
        <div className="col mt-4 text-end">
          <HeaderHomeButton />
        </div>
      </div>
      <div className="row mt-3">
        <input
          type="text"
          placeholder="Enter a Location, City, Address or Postcode "
          onChange={(e) => setAddress(e.target.value)}
        />
        <button className="btn btn-primary" onClick={fetchGyms}>
          search
        </button>
      </div>
      <div className="row text-center">
        {error && <p className="text-danger">{error}</p>}
        <h3>{cardsRendered} results found</h3>
        <div className="row">
          {gymData.map((gym, index) =>
            gym.properties.name ? (
              <Card key={index} style={{ width: "18rem" }} className="m-2">
                <Card.Body>
                  <Card.Title>{gym.properties.name}</Card.Title>
                  <Card.Text>{gym.properties.address_line2}</Card.Text>
                  <Card.Text>
                    Aproximately {(gym.properties.distance / 1000).toFixed(2)}{" "}
                    km away from the location specified
                  </Card.Text>

                  <button
                    className="btn btn-primary mt-auto"
                    style={{
                      backgroundColor: "#10a7e6",
                      borderColor: "#10a7e6",
                    }}
                    onClick={() =>
                      window.open(
                        `https://www.google.com/maps/search/?api=1&query=${gym.properties.address_line2}`
                      )
                    }
                  >
                    MAP
                  </button>
                </Card.Body>
              </Card>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}
