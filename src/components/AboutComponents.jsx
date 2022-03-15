import React from "react";
import { FaEnvelopeOpen } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import aboutimg from "../images/about.jpg";
import { FcLeave } from "react-icons/fc";
import { FcGallery } from "react-icons/fc";
import { ProgressBar } from "react-bootstrap";
import { FcApproval } from "react-icons/fc";
import { FcDocument } from "react-icons/fc";
import { FcPhone } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
import client1 from  "../images/clients/client-1.png"
import client2 from  "../images/clients/client-2.png"
import client3 from  "../images/clients/client-3.png"
import client4 from  "../images/clients/client-4.png"
import client5 from  "../images/clients/client-5.png"
import client6 from  "../images/clients/client-6.png"
function AboutComponents() {
  return (
    <div>
      <div className="about-body">
        {/* header section */}
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

          {/* nav section */}

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
        </div>
        {/* about us */}
        <div className="aboutus">
          <div className="textsection">
            <button className="aboutus-title">About Us</button> <br />
            <p className="about-black">
              Find Out More <span className="about-blue">About Us</span>
            </p>
            <p className="about-normal">
              Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
              adipisci expedita at voluptas atque vitae ..
            </p>
            <div className="container text-c1 ">
              <div className="row r4">
                <div className=" about-img col-12 col-sm-6 col-md-6">
                  <img src={aboutimg} alt="" />
                </div>
                <div className=" about-des col-12 col-sm-6 col-md-6">
                  <h3 className="des-text">
                    Voluptatem dignissimos provident quasi corporis voluptates
                    sit assumenda.
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div className="ulcamo">
                    <div className="ulcamo-icon">
                      <FcLeave />
                    </div>
                    <div className="ulcamo-text">
                      <p className="ulcamo-text-head">
                        Ullamco laboris nisi ut aliquip consequat
                      </p>
                      <p className="ulcamo-text-body">
                        Magni facilis facilis repellendus cum excepturi quaerat
                        praesentium libre trade
                      </p>
                    </div>
                  </div>
                  <div className="magnam">
                    <div className="magnam-icon">
                      <FcGallery />
                    </div>
                    <div className="magnam-text">
                      <p className="magnam-text-head">
                        Ullamco laboris nisi ut aliquip consequat
                      </p>
                      <p className="magnam-text-body">
                        Magni facilis facilis repellendus cum excepturi quaerat
                        praesentium libre trade
                      </p>
                    </div>
                  </div>
                  <p className="about-footer">
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* progress bar */}
        <div className="container about-progress">
          <div className="row">
            <div className="pro-box1 col-12 col-sm-6 col-md-6">
              <div className="bar1">
                <p>HTML</p>
                <ProgressBar now={90} label={`90%`} />
              </div>
              <div className="bar1">
                <p>CSS</p>
                <ProgressBar now={80} label={`80%`} />
              </div>

              <div className="bar1">
                <p>JAVASCRIPT</p>
                <ProgressBar now={75} label={`75%`} />
              </div>
            </div>
            <div className="pro-box2 col-12 col-sm-6 col-md-6">
              <div className="bar1">
                <p>REACT</p>
                <ProgressBar now={70} label={`70%`} />
              </div>
              <div className="bar1">
                <p>REACT NATIVE</p>
                <ProgressBar now={75} label={`75%`} />
              </div>

              <div className="bar1">
                <p>FIREBASE</p>
                <ProgressBar now={60} label={`60%`} />
              </div>
            </div>
          </div>
        </div>

        {/* about card */}
        <div className="about-card">
          <div className="container">
            <div className="row">
              <div className="card-box col-12 col-sm-6 col-md-3">
                <div className="innercard">
                  <div className="innercard-icon">
                    <FcApproval />
                  </div>
                  <h2>252</h2>
                  <p className="happy-text">Happy clients</p>
                </div>
              </div>
              <div className="card-box col-12 col-sm-6 col-md-3">
                <div className="innercard">
                  <div className="innercard-icon">
                    <FcBusinessman />
                  </div>
                  <h2>370</h2>
                  <p className="happy-text">Projects</p>
                </div>
              </div>
              <div className="card-box col-12 col-sm-6 col-md-3">
                <div className="innercard">
                  <div className="innercard-icon">
                    <FcPhone />
                  </div>
                  <h2>520</h2>
                  <p className="happy-text">Hours Of Support</p>
                </div>
              </div>
              <div className="card-box col-12 col-sm-6 col-md-3">
                <div className="innercard">
                  <div className="innercard-icon">
                    <FcDocument />
                  </div>
                  <h2>172</h2>
                  <p className="happy-text">Hard Workers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
{/* board */}

<div className="section6">
    <div className="container section-6">
      <drv className="row">
        <div className="box7 col-6 col-md-2">
          <div className="sponcer-img">
            <img src={client1} alt=""/>
          </div>
        </div>
        <div className="box7 col-6 col-md-2">
          <div className="sponcer-img">
           <img src={client2} alt=""/>
          </div>
        </div>
        <div className="box7 col-6 col-md-2">
          <div className="sponcer-img">
           <img src={client3} alt=""/>
          </div>
        </div>
        <div className="box7 col-6 col-md-2">
          <div className="sponcer-img">
           <img src={client4} alt=""/>
          </div>
        </div>
        <div className="box7 col-6 col-md-2">
          <div className="sponcer-img">
           <img src={client5} alt=""/>
          </div>
        </div>
        <div className="box7 col-6 col-md-2">
          <div className="sponcer-img">
           <img src={client6} alt=""/>
          </div>
        </div>
      </drv>
    </div>
  </div>


      </div>
    </div>
  );
}

export default AboutComponents;
