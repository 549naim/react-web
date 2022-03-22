import React from "react";
import { FaEnvelopeOpen } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FcRating } from "react-icons/fc";
import { FcDocument } from "react-icons/fc";
import { FcOvertime } from "react-icons/fc";
import { FcGlobe } from "react-icons/fc";
import { FcCamcorderPro } from "react-icons/fc";
import { FcFactory } from "react-icons/fc";
import { Carousel } from "react-bootstrap";
import { Accordion } from "react-bootstrap";
import test1 from "../images/carucel/test1.jpg";
import test2 from "../images/carucel/test2.jpg";
import test3 from "../images/carucel/test3.jpg";
import test4 from "../images/carucel/test4.jpg";
import test5 from "../images/carucel/test5.jpg";
function ServiceComponents(props) {
    return (
        <div>
            <div className="about-body">
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
                <div className="section7">
                    <div className="container section-7">
                        <div className="service01"></div>
                        <div className="cheak-service">
                            <button className="aboutus-title">Services</button> <br />
                            <p className="about-black">
                                Find Our <span className="about-blue">Services</span>
                            </p>
                            <p className="about-normal">
                                Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
                                adipisci expedita at voluptas atque vitae ..
                            </p>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="box9 col-12 col-md-4">
                                <div className="sec7-card">
                                    <FcRating className="fas fa-1 sec-7-imoji " />
                                    <h3 className="sec-7-h">Lorem Ipsum</h3>
                                    <p>
                                        Voluptatum deleniti atque corrupti quos dolores et quas
                                        molestias excepturi
                                    </p>
                                </div>
                            </div>
                            <div className="box9 col-12 col-md-4">
                                <div className="sec7-card">
                                    <FcDocument className="fas fa-1 sec-7-imoji " />
                                    <h3 className="sec-7-h">Sed ut perspiciatis</h3>
                                    <p>
                                        Duis aute irure dolor in reprehenderit in voluptate velit
                                        esse cillum dolore
                                    </p>
                                </div>
                            </div>
                            <div className="box9 col-12 col-md-4">
                                <div className="sec7-card">
                                    <FcOvertime className="fas fa-1 sec-7-imoji " />
                                    <h3 className="sec-7-h">Magni Dolores</h3>
                                    <p>
                                        Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="box9 col-12 col-md-4">
                                <div className="sec7-card">
                                    <FcGlobe className="fas fa-1 sec-7-imoji " />
                                    <h3 className="sec-7-h">Nemo Enim</h3>
                                    <p>
                                        At vero eos et accusamus et iusto odio dignissimos ducimus
                                        qui blanditiis
                                    </p>
                                </div>
                            </div>
                            <div className="box9 col-12 col-md-4">
                                <div className="sec7-card">
                                    <FcCamcorderPro className="fas fa-1 sec-7-imoji " />
                                    <h3 className="sec-7-h">Dele cardo</h3>
                                    <p>
                                        Quis consequatur saepe eligendi voluptatem consequatur dolor
                                        consequuntur
                                    </p>
                                </div>
                            </div>
                            <div className="box9 col-12 col-md-4">
                                <div className="sec7-card">
                                    <FcFactory className="fas fa-1 sec-7-imoji " />
                                    <h3 className="sec-7-h">Divera don</h3>
                                    <p>
                                        Modi nostrum vel laborum. Porro fugit error sit minus
                                        sapiente sit aspernatur
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="carucel-card">
                        <div className="carucel-header">
                            <button className="aboutus-title">MeetUp</button> <br />
                            <p className="about-black">
                                Let's Meet Our <span className="about-blue">Partners</span>
                            </p>
                            <p className="about-normal">
                                Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
                                adipisci expedita at voluptas atque vitae autem.
                            </p>
                        </div>
                        <Carousel className="carucel-item">
                            <Carousel.Item>
                                <span>
                                    <h3 className="c-title">Soul Goodman</h3>
                                    <h6 className="c-title2">Ceo & Founder</h6>
                                    <p className="c-text"> "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim. "</p>
                                </span>
                                <img className="slider2-image" src={test1} alt="First slide" />

                            </Carousel.Item>
                            <Carousel.Item>
                                <span>
                                    <h3 className="c-title">Sara Wilson</h3>
                                    <h6 className="c-title2">Designer</h6>
                                    <p className="c-text"> "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa. " </p>
                                </span>
                                <img className="slider2-image" src={test2} alt="Second slide" />


                            </Carousel.Item>
                            <Carousel.Item>
                                <span>
                                    <h3 className="c-title">Jena Karlis</h3>
                                    <h6 className="c-title2">Store Owner</h6>
                                    <p className="c-text"> " Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim."</p>
                                </span>
                                <img className="slider2-image" src={test3} alt="Third slide" />


                            </Carousel.Item>
                            <Carousel.Item>
                                <span>
                                    <h3 className="c-title">Matt Brandon</h3>
                                    <h6 className="c-title2">Freelancer</h6>
                                    <p className="c-text"> "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam."</p>
                                </span>
                                <img className="slider2-image" src={test4} alt="Forth slide" />


                            </Carousel.Item>
                            <Carousel.Item>
                                <span>
                                    <h3 className="c-title">John Larson</h3>
                                    <h6 className="c-title2">Entrepreneur</h6>
                                    <p className="c-text">  " Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid."</p>
                                </span>
                                <img className="slider2-image" src={test5} alt="Fifth slide" />


                            </Carousel.Item>
                        </Carousel>
                    </div>
 <hr />
                    <div className="qs">
                        <div className="cheak-service">
                            <button className="aboutus-title">F.A.Q</button> <br />
                            <p className="about-black">
                                Find your <span className="about-blue">Answer</span>
                            </p>
                            <p className="about-normal">
                                Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
                                adipisci expedita at voluptas atque vitae ..
                            </p>
                        </div>
                        <div class="container">
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Non consectetur a erat nam at lectus urna duis?</Accordion.Header>
                                    <Accordion.Body>
                                    Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?</Accordion.Header>
                                    <Accordion.Body>
                                    Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?</Accordion.Header>
                                    <Accordion.Body>
                                    Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?</Accordion.Header>
                                    <Accordion.Body>
                                    Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>Tempus quam pellentesque nec nam aliquam sem et tortor consequat?</Accordion.Header>
                                    <Accordion.Body>
                                    Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5">
                                    <Accordion.Header>Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor?</Accordion.Header>
                                    <Accordion.Body>
                                    Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nibh tellus molestie nunc non blandit massa enim nec.
                                    </Accordion.Body>
                                </Accordion.Item>
                               
                            </Accordion>

                        </div>
                    </div>



                </div>

            </div>
        </div>
    );
}

export default ServiceComponents;
