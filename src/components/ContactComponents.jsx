import React from "react";
import { FaEnvelopeOpen } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FcDepartment } from "react-icons/fc";
import { FcAddressBook } from "react-icons/fc";
import { FcAssistant } from "react-icons/fc";

import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FcNext } from "react-icons/fc";

function ContactComponents() {
  return (
    <div>
      <div className="contact-body">
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
        {/* main contact section */}
        <div className="section12">
          <button className="aboutus-title">Contact</button> <br />
          <p className="about-black">
            Contact <span className="about-blue">Us</span>
          </p>
          <p className="about-normal">
            Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
            adipisci expedita at voluptas atque vitae
          </p>
          <div className="container section12-1">
            <div className="row">
              <div className="box12 col-12 col-sm-12 col-md-4">
                <div className="our-address">
                  <FcDepartment size={50} />
                  <h5>Our Address</h5>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>
              </div>
              <div className="box12 col-12 col-sm-12 col-md-4">
                <div className="our-address">
                  <FcAddressBook size={50} />
                  <h5>Email Us</h5>
                  <p>contact@example.com</p>
                </div>
              </div>
              <div className="box12 col-12 col-sm-12 col-md-4">
                <div className="our-address">
                  <FcAssistant size={50} />
                  <h5>Call Us</h5>
                  <p>+1 5589 55488 55</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <hr />
        {/* section 13 */}
        <div className="section13">
    <div className="container c-contact">
      <div className="row ">
        <div className="box13 col-12 col-md-6 col-sm-6">
          <div className="map-g">
          <iFrame
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
              width="600"
              height="450"
              frameBorder="0"
              style={{border:0}}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
          </div>
        </div>
        <div className="box13 col-12 col-md-6 col-sm-6">
          <div className="all-form">
            <div className="container form-allbox">
              <div className="row">
                <div className="form-box col-6 col-md-6 col-sm-6">
                  <div className="mb-3">
                    <label for="formGroupExampleInput" className="form-label"></label>
                    <input type="text" className="form-control form1" id="formGroupExampleInput" placeholder="Your Name"/>
                  </div>
                </div>
                <div className="form-box col-6 col-md-6 col-sm-6">
                  <div className="mb-3">
                    <label for="formGroupExampleInput2" className="form-label"></label>
                    <input type="email" className="form-control form1" id="formGroupExampleInput2" placeholder="Your Email"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label for="formGroupExampleInput2" className="form-label"></label>
              <input type="text" className="container form-control form3" id="formGroupExampleInput2" placeholder="Subject"/>
            </div>
            <div className="mb-3">
              <label for="formGroupExampleInput2" className="form-label"></label>
              <input type="text" className="container  form-control form4" id="formGroupExampleInput2" placeholder="Message"/>
            </div>
            <button type="button" className="btn btn-primary foot-btn">Send Message</button>
          </div>

        </div>
      </div>
    </div>
  </div>
<hr />
  {/* newslater */}
  <div className="section14">
    <div className="container section-7 sec-9 section-14">

      <div className="cheak-service">
        <h2 className="cheak">Join Our Newsletter</h2>

      </div>
      <div className="pomitus">
        Tamen quem nulla quae legam multos aute sint culpa legam noster magna
      </div>
      <div className="cintainer">
        <div className="row">
          <div className="form2-box col-8 col-sm-8 col-md-8">
            <div className="mb-3">
              <label for="formGroupExampleInput2" className="form-label"></label>
              <input type="text" className="form-control subs-form" id="formGroupExampleInput2" placeholder=""/>

            </div>

          </div>
          <div className="form2-box col-4 col-sm-4 col-md-4">
            <button type="button" className="btn btn-primary foot-btn btn2">Send Message</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* footer */}
  <div className="footer last-footer">
    <div className="container con15">
      <div className="row">
        <div className="footer-box col-12 col-sm-6 col-md-3">
          <h6>Bizland</h6>
          <div className="biz-cont">
            <address>A108 Adam Street</address>
            <address>New York, NY 535022</address>
            <address>United States</address>
            <p><strong>Phone:</strong>+1 5589 55488 55</p>
            <p><strong>Email:</strong>+ info@example.com</p>
          </div>

        </div>
        <div className="footer-box col-12 col-sm-6 col-md-3">
          <h6>Useful links</h6>
          <div className="useful-link">
            <p><FcNext className="fas fa-chevron-right s-arrow"/>
              Home</p>
            <p><FcNext className="fas fa-chevron-right s-arrow"/>

              About us</p>
            <p><FcNext className="fas fa-chevron-right s-arrow"/>
              Services</p>
            <p><FcNext className="fas fa-chevron-right s-arrow"/>
              Terms of service</p>
            <p><FcNext className="fas fa-chevron-right s-arrow"/>

              Privacy policy</p>
          </div>
        </div>
        <div className="footer-box col-12 col-sm-6 col-md-3">
          <h6>Our Services
          </h6>
          <div className="useful-link">
            <p><FcNext className="fas fa-chevron-right s-arrow"/>
              Web Design</p>
            <p><FcNext className="fas fa-chevron-right s-arrow"/>
              Web Development</p>
            <p><FcNext className="fas fa-chevron-right s-arrow"/>
              Product Management</p>
            <p><FcNext className="fas fa-chevron-right s-arrow"/>

              Marketing</p>
            <p><FcNext className="fas fa-chevron-right s-arrow"/>

              Graphic Design</p>
          </div>
        </div>
        <div className="footer-box col-12 col-sm-6 col-md-3">
          <h6 style={{fontWeight:"bold"}}>Our Services
          </h6>
          <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
          <div className="footer-icon1">
            < FaTwitter className="fab fa-twitter imoji-f"/>
            < FaFacebookF className="fab fa-twitter imoji-f"/>
            < FaInstagram className="fab fa-twitter imoji-f"/>
            < FaSkype className="fab fa-twitter imoji-f"/>
            < FaLinkedinIn className="fab fa-twitter imoji-f"/>

          </div>
        </div>
      </div>
    </div>
  </div>

      </div>
    </div>
  );
}

export default ContactComponents;
