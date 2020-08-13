import React from 'react';
import Header from "../layout/Frontend/Header";
import Footer from "../layout/Frontend/Footer";
import {NavLink} from "react-router-dom";

const About = () => {
    return (
        <div>
            <Header />
            <section className="banner-area organic-breadcrumb">
                <div className="container">
                    <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                        <div className="col-first">
                            <h1>About Us</h1>
                            <nav className="d-flex align-items-center">
                                <NavLink to="/">Home<span className="lnr lnr-arrow-right"></span></NavLink>
                                <NavLink to="/about">About</NavLink>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container">
                <section className="showcase my-5">
                    <div className="container-fluid p-0">
                        <div className="row no-gutters">
                            <div className="col-lg-6 order-lg-2 text-white showcase-img">
                                <img src="https://cdn.fptshop.com.vn/Uploads/Originals/2019/9/11/637037687763926758_11-pro-max-xanh.png" width="100%" height="auto" alt=""/>
                            </div>
                            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                                <h2>Get up to $500 toward a new iPhone.</h2>
                                <p className="lead mb-0">With Apple Trade In, you can get credit toward a new iPhone when
                                    you trade in an eligible smartphone.4 It’s good for you and the planet.!</p>
                            </div>
                        </div>
                        <div className="row no-gutters">
                            <div className="col-lg-6 text-white showcase-img">
                                <img src="https://cdn.fptshop.com.vn/Uploads/Originals/2019/9/11/637037652463329577_11-do.png" width="100%" height="auto" alt=""/>
                            </div>
                            <div className="col-lg-6 my-auto showcase-text">
                                <h2>Peace of mind. Included with AppleCare+.</h2>
                                <p className="lead mb-0">When you join the iPhone Upgrade Program, AppleCare+ is included in
                                    your monthly payments.4 And now you have the option to expand your coverage to
                                    AppleCare+ with Theft and Loss for an additional cost.5 Simply choose the coverage
                                    that’s right for you.!</p>
                            </div>
                        </div>
                        <div className="row no-gutters">
                            <div className="col-lg-6 order-lg-2 text-white showcase-img">
                                <img src="https://cdn.fptshop.com.vn/Uploads/Originals/2017/11/10/636459041871679213_1.jpg" width="100%" height="auto" alt=""/>
                            </div>
                            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                                <h2>The future of health research is you.</h2>
                                <p className="lead mb-0">Making the world a healthier place just got a lot easier. Now you
                                    can contribute to groundbreaking research studies simply by using your Apple Watch and
                                    iPhone.!</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <section className="testimonials text-center bg-light py-3">
                <div className="container">
                    <h2 className="mb-5">Admin the designer</h2>
                    <div className="row justify-content-md-center">
                        <div className="col-lg-4">
                            <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                                <img className="img-fluid rounded-circle mb-3" src="https://firebasestorage.googleapis.com/v0/b/fir-react-upload-6e61b.appspot.com/o/images%2F42510334_241758270018832_4442605791777652736_n%20(2).jpg?alt=media&token=fec2e8b7-6b2c-47eb-b103-6b5cca75e96b" width="50%" height="auto" alt="" />
                                <h5>Phương Nguyễn</h5>
                                <p className="font-weight-light mb-0">"Smartphone selling website!"</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

About.propTypes = {};

export default About;