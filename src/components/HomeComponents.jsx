import React from "react";
import { FaEnvelopeOpen } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { Link } from "react-router-dom";



function HomeComponents() {
  return (
    <div>
      <div className=" c1">
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
          <div className="logo">
            <div className="alllogo">
              <div className="fb logos">
                <FaFacebookSquare />
              </div>
              <div className="insta logos">
                <FaInstagram />
              </div>
              <div className="linkeddin logos">
                <FaLinkedin />
              </div>
              <div className="tweet logos">
                <FaTwitterSquare />
              </div>
            </div>
          </div>
        </div>

        {/* nav section */}
        <div className="navbar">
          <div className="navsection">
            <Link className="btn btn-outline-secondary navbtn" to="/">Home</Link>
            <Link className="btn btn-outline-secondary navbtn" to="/Aboutpage">About</Link>
            <Link className="btn btn-outline-secondary navbtn" to="/Portfolio">Portfolio</Link>
            <Link className="btn btn-outline-secondary navbtn" to="/Services">Services</Link>
            <Link className="btn btn-outline-secondary navbtn" to="/Contact">Contact</Link>
          </div>
        </div>

        {/* image */}
        <div className="section2">
         {/* <img src=""/> */}
        </div>
      </div>
    </div>
  );
}

export default HomeComponents;
