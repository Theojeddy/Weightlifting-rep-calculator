import React, { useEffect } from "react";
import HeaderLogo from "../Components/Header/HeaderLogo";
import Navbar from "../Components/NavBar/navbar";
import CalcCarousel from "../Components/CarouselImg/CalcIMG";
import GLCarousel from "../Components/CarouselImg/GLIMG";
import ESCarousel from "../Components/CarouselImg/ESIMG";
import MaddyProfile from "../Components/Team pictures/MaddyProfile";
import TheoProfile from "../Components/Team pictures/TheoProfile";
export default function TestPage({ title, setTitle }) {
  useEffect(() => {
    setTitle("Test page");
  }, [setTitle]);
  return (
    <div className="container-fluid vw4">
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
        </div>
        <div className="row mt-4">
          {/* Carousel start */}
          <div class="container">
            <div class="row">
              <div class="col-6">
                <h3 class="mb-3">What RepWise Can Do For You </h3>
              </div>
              <div class="col-6 text-right">
                <a
                  class="btn btn-primary mb-3 mr-1"
                  href="#carouselExampleIndicators2"
                  role="button"
                  data-slide="prev"
                >
                  <i class="fa fa-arrow-left"></i>
                </a>
                <a
                  class="btn btn-primary mb-3 "
                  href="#carouselExampleIndicators2"
                  role="button"
                  data-slide="next"
                >
                  <i class="fa fa-arrow-right"></i>
                </a>
              </div>
              <div class="col-12">
                <div
                  id="carouselExampleIndicators2"
                  class="carousel slide"
                  data-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <div class="row">
                        <div class="col-md-4 mb-3">
                          <div class="card">
                            <CalcCarousel />
                            <div class="card-body">
                              <h4 class="card-title"> Our Rep Calculator!</h4>
                              <p class="card-text">
                                Made to help you do all the hard working out of
                                the weights you could be lifting
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4 mb-3">
                          <div class="card">
                            <GLCarousel />
                            <div class="card-body">
                              <h4 class="card-title">Our Gym Locator</h4>
                              <p class="card-text">
                                To make it that little bit easier to find a gym.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4 mb-3">
                          <div class="card">
                            <ESCarousel />
                            <div class="card-body">
                              <h4 class="card-title">Our Exercise search</h4>
                              <p class="card-text">
                                To help you plan your workout on dificulty and
                                equipment that required!
                              </p>
                            </div>
                          </div>
                        </div>

                        <div class="carousel-item">
                          <div class="col-md-4 mb-3">
                            <div class="card">
                              <MaddyProfile />
                              <div class="card-body">
                                <h4 class="card-title">Maddy</h4>
                                <p class="card-text">
                                  With supporting text below as a natural
                                  lead-in to additional content.
                                </p>
                              </div>
                            </div>
                          </div>
                        
                      <div class="carousel-item">
                        
                          <div class="col-md-4 mb-3">
                            <div class="card">
                              <TheoProfile />
                              <div class="card-body">
                                <h4 class="card-title">Theo</h4>
                                <p class="card-text">
                                  With supporting text below as a natural
                                  lead-in to additional content.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4 mb-3"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
                      </div>
              </div>
            </div>
          </div>
     
      </div>
    </div>
  );
}
