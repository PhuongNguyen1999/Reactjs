import React from 'react';
import Header from "../layout/Frontend/Header";
import Footer from "../layout/Frontend/Footer";
import {NavLink} from "react-router-dom";

const Contact = () => {
    return (
        <div>
            <Header />
            <section className="banner-area organic-breadcrumb">
                <div className="container">
                    <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                        <div className="col-first">
                            <h1>Contact Us</h1>
                            <nav className="d-flex align-items-center">
                                <NavLink to="/">Home<span className="lnr lnr-arrow-right"></span></NavLink>
                                <NavLink to="/contact">Contact</NavLink>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact_area section_gap_bottom">
                <div className="container">
                    <div className="row my-5">
                        <iframe id="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.7084545952016!2d105.74732391558946!3d20.964220095352893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313452e486400001%3A0x5ec767d2f6d3674b!2sParkview%20CT7!5e0!3m2!1svi!2s!4v1596460426592!5m2!1svi!2s" width={600} height={450} frameBorder={0} style={{"border":"0"}} allowFullScreen aria-hidden="false" tabIndex={0} />
                    </div>
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="contact_info">
                                <div className="info_item">
                                    <i className="lnr lnr-home"/>
                                    <h6>California, United States</h6>
                                    <p>Santa monica bullevard</p>
                                </div>
                                <div className="info_item">
                                    <i className="lnr lnr-phone-handset"/>
                                    <h6><a href="#">00 (440) 9865 562</a></h6>
                                    <p>Mon to Fri 9am to 6 pm</p>
                                </div>
                                <div className="info_item">
                                    <i className="lnr lnr-envelope"/>
                                    <h6><a href="#">support@colorlib.com</a></h6>
                                    <p>Send us your query anytime!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <form className="row contact_form" noValidate="novalidate">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="name"
                                               placeholder="Enter your name" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" name="email"
                                               placeholder="Enter email address" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="subject"
                                               placeholder="Enter Subject" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <textarea className="form-control" name="message" rows={1}
                                                  placeholder="Enter Message" />
                                    </div>
                                </div>
                                <div className="col-md-12 text-right">
                                    <button type="submit" className="primary-btn">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

Contact.propTypes = {};

export default Contact;