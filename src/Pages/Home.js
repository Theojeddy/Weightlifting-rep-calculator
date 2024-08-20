import React, { useEffect, useState } from "react";
import HeaderLogo from "../Components/Header/HeaderLogo";
import Navbar from "../Components/NavBar/navbar";
import { Carousel, Card, Button } from "react-bootstrap";
import "../App/App.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Home({ title, setTitle }) {
  useEffect(() => {
    setTitle("Home");
  }, [setTitle]);

  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    {
      title: "Gym Locator?",
      text: "Struggling to find your local gym? Check out our Gym Locator.",
      buttonText: "Learn More",
      link: "/GymLocator",
    },
    {
      title: "Rep / Weight Calculator",
      text: "Trying to plan out your workout but not sure what weight you should be working at? Check out our calculator to work out your estimated weights for reps.",
      buttonText: "Discover",
      link: "/Calculator",
    },
    {
      title: "BMR Calculator",
      text: "Trying to work out your calories? Take a look at our BMR calculator, with the most up-to-date research formula for calculations.",
      buttonText: "Find Out More",
      link: "/BMRCalculator",
    },
    {
      title: "Exercise Search",
      text: "Not sure what you want to do, not sure how to work a muscle? Have a look at our exercise search for the best ways to target specific muscles.",
      buttonText: "Find Out More",
      link: "/ExerciseSearch",
    },
  ];

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <div className="custom-container">
      <Navbar title={title} />

      <div className="row">
        <div className="col-2 mt-4 text-start d-flex flex-column">
          <div style={{ width: "15vw" }}>
            <HeaderLogo />
          </div>
        </div>

        <div className="col-10 mt-5 text-start">
          <div className="row">
            <h1 className="Title">{title}</h1>
          </div>
          <div className="row mt-3 text-start pt-5">
            <h1>Welcome to Repwise!</h1>
            <h5>
              Repwise is an app designed to help you Train Smart and Dominate
              Your Workout!
            </h5>
          </div>
        </div>
      </div>

      {/* Carousel start */}
      <div className="row mt-5">
        <div className="col-2"></div>
        <div className="col-10">
          <Carousel
            activeIndex={activeIndex}
            onSelect={handleSelect}
            indicators={false}
          >
            {cards.map((card, index) => (
              <Carousel.Item key={index}>
                <div className="d-flex justify-content-center">
                  <Card style={{ width: "18rem" }}>
                    <Card.Body>
                      <Card.Title>{card.title}</Card.Title>
                      <Card.Text>{card.text}</Card.Text>
                      <Button variant="primary" href={card.link}>
                        {card.buttonText}
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>

          {/* Custom carousel indicators */}
          <div className="custom-carousel-indicators">
            {cards.map((_, index) => (
              <div
                key={index}
                className={`indicator-bar ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => handleSelect(index)}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Carousel end */}
      <div className="row">
        <div className="col-2"></div>
        <div className="col-10 mt-4 text-start mb-5">
          <h3>About the App</h3>
          <h5>
            The purpose of Repwise is to make working out accessable to those who need help. 
            Repwise will help with achieving optimal performance aswell as understanding the basics of working out.
            Repwise' key fetures are based around the basics of working out: finding a gym, finding some exercises and working out what weights to lift. 
            For the more experienced users, we have some additional features, our BMR calculator uses the most up to date formula's to help with working out your calorie intake and macros.
          </h5>
        </div>
      </div>
    </div>
  );
}
