import React from "react";
import { FaEnvelopeOpen } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FcStart } from "react-icons/fc";
import { FaDribbble } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaBus } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
import person1 from "../../src/images/person1.jpg";
import person2 from "../../src/images/person2.jpg";
import person3 from "../../src/images/person3.jpg";
import person4 from "../../src/images/person4.jpg";

// import  img1 from '../images/building.jpg';

function HomeComponents() {
  return (
    <div className=" body">
      <div className=" c">
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
            <Link className="btn btn-outline-secondary navbtn" to="/Aboutpage">
              About
            </Link>
            <Link className="btn btn-outline-secondary navbtn" to="/Portfolio">
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

        {/* image */}
        <div className="section2">
          {/* <img src={img1} alt="" /> */}
          <div className="textpart">
            <div className="demosite">
              <span>Welcome to </span>
              <span className="bluetext">Demosite</span>
            </div>
            <p className="p-text">
              We are team of talented designers making websites with Bootstrap
            </p>
            <div className="get-started">
              <p className="play">
                {" "}
                <span>
                  <FcStart />
                </span>{" "}
                Play now
              </p>
              <Link className=" btn btn-primary navbtn" to="/">
                Get started
              </Link>
            </div>
          </div>
        </div>
        {/* card partial */}

        <div className="container card-part">
          <div className="row r2">
            <div className="box-1 col-12 col-sm-6 col-md-3 box1-1">
              <div className="box-1-1">
                <div className="card-icon">
                  {" "}
                  <FaDribbble />
                </div>

                <h3>Lorem Ipsum</h3>
                <p>
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi
                </p>
              </div>
            </div>
            <div className="box-1 col-12 col-sm-6 col-md-3 box1-1">
              <div className="box-1-1">
                <div className="card-icon">
                  {" "}
                  <FaBook />
                </div>
                <h3>Sed ut perspiciatis</h3>
                <p>
                  Sed ut perspiciatis Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore
                </p>
              </div>
            </div>
            <div className="box-1 col-12 col-sm-6 col-md-3 box1-1">
              <div className="box-1-1">
                <div className="card-icon">
                  {" "}
                  <FaBus />
                </div>
                <h3>Magni Dolores</h3>
                <p>
                  Magni Dolores Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia
                </p>
              </div>
            </div>
            <div className="box-1 col-12 col-sm-6 col-md-3 box1-1">
              <div className="box-1-1">
                <div className="card-icon">
                  {" "}
                  <FaGlobeAmericas />
                </div>
                <h3>Nemo Enim</h3>
                <p>
                  Nemo Enim At vero eos et accusamus et iusto odio dignissimos
                  ducimus qui blanditiis
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* pricing part */}
        <div className="pricing-cart">
          <div className="container price-cart">
            <span className="price-head">Our Pricing</span>
            <hr />
            <div className="price-text">
              <h2 className="cheak-price">
                Cheak Our <span style={{ color: "blue" }}>Pricing</span>{" "}
              </h2>
              <p>
                Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
                adipisci expedita at voluptas atque vitae autem.
              </p>
            </div>
            <div className="row row2">
              <div className="card-box-1 col-12 col-sm-6 col-md-3 card-box1-1">
                <div className="card-box-1-1">
                  <h3 className="card-box-border">Free</h3>
                  <p>
                    <span className="doller-amount"> 0</span>
                    <sub className="doller">$</sub> <span>/ Month</span>
                  </p>
                  <p>Aida dere</p>
                  <p>Nec feugiat nisl</p>
                  <p>Nulla at volutpat dola</p>
                  <p className="cross-text">
                    <del>Pharetra massa</del>
                  </p>
                  <p className="cross-text">
                    <del>Massa ultricies mi</del>
                  </p>
                  <Link className=" btn btn-primary navbtn" to="/">
                    Buy Now
                  </Link>
                </div>
              </div>

              <div className="card-box-1 col-12 col-sm-6 col-md-3 card-box1-1">
                <div className="card-box-1-1">
                  <h3 className="card-box-border">Business</h3>
                  <p>
                    <span className="doller-amount"> 25</span>
                    <sub className="doller">$</sub> <span>/ Month</span>
                  </p>
                  <p>Aida dere</p>
                  <p>Nec feugiat nisl</p>
                  <p>Nulla at volutpat dola</p>
                  <p className="cross-text">
                    <del>Pharetra massa</del>
                  </p>
                  <p className="cross-text">
                    <del>Massa ultricies mi</del>
                  </p>
                  <Link className=" btn btn-primary navbtn" to="/">
                    Buy Now
                  </Link>
                </div>
              </div>

              <div className="card-box-1 col-12 col-sm-6 col-md-3 card-box1-1">
                <div className="card-box-1-1">
                  <h3 className="card-box-border">Developer</h3>
                  <p>
                    <span className="doller-amount"> 49</span>
                    <sub className="doller">$</sub> <span>/ Month</span>
                  </p>
                  <p>Aida dere</p>
                  <p>Nec feugiat nisl</p>
                  <p>Nulla at volutpat dola</p>
                  <p className="cross-text">
                    <del>Pharetra massa</del>
                  </p>
                  <p className="cross-text">
                    <del>Massa ultricies mi</del>
                  </p>
                  <Link className=" btn btn-primary navbtn" to="/">
                    Buy Now
                  </Link>
                </div>
              </div>

              <div className="card-box-1 col-12 col-sm-6 col-md-3 card-box1-1">
                <div className="card-box-1-1">
                  <h3 className="card-box-border">Ultimate</h3>
                  <p>
                    <span className="doller-amount"> 99</span>
                    <sub className="doller">$</sub> <span>/ Month</span>
                  </p>
                  <p>Aida dere</p>
                  <p>Nec feugiat nisl</p>
                  <p>Nulla at volutpat dola</p>
                  <p className="cross-text">
                    <del>Pharetra massa</del>
                  </p>
                  <p className="cross-text">
                    <del>Massa ultricies mi</del>
                  </p>
                  <Link className=" btn btn-primary navbtn" to="/">
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* team */}

        <div className="section9">
          <div className="container section-7 sec-9">
            <div className="service01">
              <button type="button" className="price-head">
                TEAM
              </button>
            </div>
            <div className="cheak-service">
              <h2 className="cheak">
                Our Hardworking <span className="span1">Team</span>
              </h2>
            </div>
            <div className="pomitus">
              <p>
                Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
                adipisci expedita
                <br /> at voluptas atque vitae autem.
              </p>
            </div>
          </div>

          <div className="container section-9">
            <hr />
            <div className="row">
              <div className="box10 col-12 col-sm-6 col-md-3">
                <div className="team-img">
                  <img src={person1} alt="img" />
                  <div className="footer-icon0 team-icon">
                    <span className="team-card-icon">
                      <FaFacebookSquare />
                    </span>
                    <span className="team-card-icon">
                      <FaInstagram />
                    </span>
                    <span className="team-card-icon">
                      <FaLinkedin />
                    </span>
                    <span className="team-card-icon">
                      <FaTwitterSquare />
                    </span>
                  </div>
                </div>
                <div className="team-text">
                  <h6>Walter White</h6>
                  <p>Chief Executive Officer</p>
                </div>
              </div>
              <div className="box10 col-12 col-sm-6 col-md-3">
                <div className="team-img">
                  <img src={person2} alt="img" />
                  <div className="footer-icon0 team-icon">
                    <span className="team-card-icon">
                      <FaFacebookSquare />
                    </span>
                    <span className="team-card-icon">
                      <FaInstagram />
                    </span>
                    <span className="team-card-icon">
                      <FaLinkedin />
                    </span>
                    <span className="team-card-icon">
                      <FaTwitterSquare />
                    </span>
                  </div>
                </div>
                <div className="team-text">
                  <h6>Walter White</h6>
                  <p>Product Manager</p>
                </div>
              </div>
              <div className="box10 col-12 col-sm-6 col-md-3">
                <div className="team-img">
                  <img src={person3} alt="img" />
                  <div className="footer-icon0 team-icon">
                    <span className="team-card-icon">
                      <FaFacebookSquare />
                    </span>
                    <span className="team-card-icon">
                      <FaInstagram />
                    </span>
                    <span className="team-card-icon">
                      <FaLinkedin />
                    </span>
                    <span className="team-card-icon">
                      <FaTwitterSquare />
                    </span>
                  </div>
                </div>
                <div className="team-text">
                  <h6>William Anderson</h6>
                  <p>CTO</p>
                </div>
              </div>
              <div className="box10 col-12 col-sm-6 col-md-3">
                <div className="team-img">
                  <img src={person4} alt="img" />
                  <div className="footer-icon0 team-icon">
                    <span className="team-card-icon">
                      <FaFacebookSquare />
                    </span>
                    <span className="team-card-icon">
                      <FaInstagram />
                    </span>
                    <span className="team-card-icon">
                      <FaLinkedin />
                    </span>
                    <span className="team-card-icon">
                      <FaTwitterSquare />
                    </span>
                  </div>
                </div>
                <div className="team-text">
                  <h6>Amanda Jepson</h6>
                  <p>Accountant</p>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>

        {/* footer part */}

        <div class="section14">
          <div class="container section-7 sec-9 section-14">
            <div class="cheak-service">
              <h2 class="cheak">Join Our Newsletter</h2>
            </div>
            <div class="pomitus">
              Tamen quem nulla quae legam multos aute sint culpa legam noster
              magna
            </div>
            <div class="cintainer">
              <div class="row">
                <div class="form2-box col-8 col-sm-8 col-md-8">
                  <div class="mb-3">
                    <label
                      for="formGroupExampleInput2"
                      class="form-label"
                    ></label>
                    <input
                      type="text"
                      class="form-control subs-form"
                      id="formGroupExampleInput2"
                      placeholder=""
                    />
                  </div>
                </div>
                <div class="form2-box col-4 col-sm-4 col-md-4">
                  <button type="button" class="btn btn-primary foot-btn btn2">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* fotter */}
        <div class="footer">
          <div class="container con15">
            <div class="row">
              <div class="footer-box col-12 col-sm-6 col-md-3">
                <h6>Bizland</h6>
                <div class="biz-cont">
                  <address>A108 Adam Street</address>
                  <address>New York, NY 535022</address>
                  <address>United States</address>
                  <p>
                    <strong>Phone:</strong>+1 5589 55488 55
                  </p>
                  <p>
                    <strong>Email:</strong>+ info@example.com
                  </p>
                </div>
              </div>
              <div class="footer-box col-12 col-sm-6 col-md-3">
                <h6>Useful links</h6>
                <div class="useful-link">
                  <p>
                    <i class="fas fa-chevron-right s-arrow"></i>
                    Home
                  </p>
                  <p>
                    <i class="fas fa-chevron-right s-arrow"></i>
                    About us
                  </p>
                  <p>
                    <i class="fas fa-chevron-right s-arrow"></i>
                    Services
                  </p>
                  <p>
                    <i class="fas fa-chevron-right s-arrow"></i>
                    Terms of service
                  </p>
                  <p>
                    <i class="fas fa-chevron-right s-arrow"></i>
                    Privacy policy
                  </p>
                </div>
              </div>
              <div class="footer-box col-12 col-sm-6 col-md-3">
                <h6>Our Services</h6>
                <div class="useful-link">
                  <p>
                    <i class="fas fa-chevron-right s-arrow"></i>
                    Web Design
                  </p>
                  <p>
                    <i class="fas fa-chevron-right s-arrow"></i>
                    Web Development
                  </p>
                  <p>
                    <i class="fas fa-chevron-right s-arrow"></i>
                    Product Management
                  </p>
                  <p>
                    <i class="fas fa-chevron-right s-arrow"></i>
                    Marketing
                  </p>
                  <p>
                    <i class="fas fa-chevron-right s-arrow"></i>
                    Graphic Design
                  </p>
                </div>
              </div>
              <div class="footer-box col-12 col-sm-6 col-md-3">
                <h6>Our Services</h6>
                <p>
                  Cras fermentum odio eu feugiat lide par naso tierra videa
                  magna derita valies
                </p>
                <div class="footer-icon1">
                  <span className="team-card-icon">
                    <FaFacebookSquare />
                  </span>
                  <span className="team-card-icon">
                    <FaInstagram />
                  </span>
                  <span className="team-card-icon">
                    <FaLinkedin />
                  </span>
                  <span className="team-card-icon">
                    <FaTwitterSquare />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeComponents;
