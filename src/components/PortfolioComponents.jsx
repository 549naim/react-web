import React from "react";
import { FaEnvelopeOpen } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import RatingComponents from "./RatingComponents";

import image1 from "../images/portfolio/portfolio-1.jpg";
import image2 from "../images/portfolio/portfolio-2.jpg";
import image3 from "../images/portfolio/portfolio-3.jpg";
import image4 from "../images/portfolio/portfolio-4.jpg";
import image5 from "../images/portfolio/portfolio-5.jpg";
import image6 from "../images/portfolio/portfolio-6.jpg";
import image7 from "../images/portfolio/portfolio-7.jpg";
import image8 from "../images/portfolio/portfolio-8.jpg";
import image9 from "../images/portfolio/portfolio-9.jpg";

import slider1 from "../images/slider/slider1.jpg";
import slider2 from "../images/slider/slider2.jpg";
import slider3 from "../images/slider/slider3.jpg";
import slider4 from "../images/slider/slider4.jpg";
import slider5 from "../images/slider/slider5.jpg";

function PortfolioComponents() {
  return (
    <div>
      <div className="portfolio-body">
        <div className="c">
          <div className="con-logo">
            <div className="con">
              <div className="email">
                <div className="emailicon">
                  <FaEnvelopeOpen />
                </div>
                <div className="emailtext">contact@email.com</div>
              </div>
              <div className="mobile">
                <div className="mobileicon">
                  <FaPhone />
                </div>
                <div className="mobiletext">+8805454545424</div>
              </div>
            </div>
          </div>

          {/* nav */}
          <div className="navbar">
            <div className="navsection">
              <Link className="btn btn-outline-secondary navbtn" to="/">
                Home
              </Link>
              <Link
                className="btn btn-outline-secondary navbtn"
                to="/Aboutpage"
              >
                About
              </Link>
              <Link
                className="btn btn-outline-secondary navbtn"
                to="/Portfolio"
              >
                Portfolio
              </Link>
              <Link className="btn btn-outline-secondary navbtn" to="/Services">
                Services
              </Link>
              <Link className="btn btn-outline-secondary navbtn" to="/Contact">
                Contact
              </Link>
            </div>
          </div>

          {/* portfolio card */}
          <div className="portfolio-card">
            <button className="aboutus-title">Portfolio</button> <br />
            <p className="about-black">
              Check our <span className="about-blue">Portfolio</span>
            </p>
            <p className="about-normal">
              Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
              adipisci expedita at voluptas atque vitae
            </p>
            <div className="container section8-1">
              <div className="row r8">
                <box className="box8 col-12 col-md-4">
                  <div className="box8-img-1">
                    <img src={image1} alt="img" />
                  </div>
                  <div className="box8-img-2">
                    <img src={image6} alt="img" />
                  </div>
                </box>
                <box className="box8 col-12 col-md-4">
                  <div className="box8-img-3">
                    <img src={image2} alt="img" />
                  </div>
                  <div className="box8-img-4">
                    <img src={image5} alt="img" />
                  </div>
                  <div className="box8-img-5">
                    <img src={image9} alt="img" />
                  </div>
                </box>
                <box className="box8 col-12 col-md-4">
                  <div className="box8-img-6">
                    <img src={image3} alt="img" />
                  </div>
                  <div className="box8-img-7">
                    <img src={image4} alt="img" />
                  </div>
                  <div className="box8-img-8">
                    <img src={image7} alt="img" />
                  </div>
                  <div className="box8-img-9">
                    <img src={image8} alt="img" />
                  </div>
                </box>
              </div>
            </div>
          </div>
        </div>
        <hr />
        {/* carucel */}
        <div className="carucel-header">
          <button className="aboutus-title">Carucel</button> <br />
          <p className="about-black">
            Explore our <span className="about-blue">carucel</span>
          </p>
          <p className="about-normal">
            Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
            adipisci expedita at voluptas atque vitae autem.
          </p>
        </div>
        <Carousel className="carucel-item">
          <Carousel.Item>
            <img className="slider-image" src={slider1} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="slider-image" src={slider2} alt="Second slide" />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="slider-image" src={slider3} alt="Third slide" />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="slider-image" src={slider4} alt="Forth slide" />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="slider-image" src={slider5} alt="Fifth slide" />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <hr />

        <div className="rating">
          <div className="rating-intro">
            <button className="aboutus-title">Rating</button> <br />
            <p className="about-black">
              Rate Your <span className="about-blue">Experience</span>
            </p>
            <p className="about-normal">
              Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
              adipisci expedita at voluptas atque vitae
            </p>
          </div>
          <RatingComponents />
        </div>
      </div>
    </div>
  );
}

export default PortfolioComponents;
