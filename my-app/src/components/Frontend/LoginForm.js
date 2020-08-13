import React from 'react';
import Header from "../layout/Frontend/Header";
import Footer from "../layout/Frontend/Footer";
import {NavLink} from "react-router-dom";

const Login = () => {
    return (
        <div>
            <Header/>
            <section className="banner-area organic-breadcrumb">
                <div className="container">
                    <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                        <div className="col-first">
                            <h1>Login</h1>
                            <nav className="d-flex align-items-center">
                                <NavLink to="/">Home<span className="lnr lnr-arrow-right"></span></NavLink>
                                <NavLink to="/login">Login</NavLink>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            <section className="login_box_area section_gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="login_box_img">
                                <img className="img-fluid" src="img/login.jpg" alt=""/>
                                <div className="hover">
                                    <h4>New to our website?</h4>
                                    <p>There are advances being made in science and technology everyday, and a good
                                        example of this is the</p>
                                    <a className="primary-btn" href="#">Create an Account</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="login_form_inner">
                                <h3>Log in to enter</h3>
                                <form className="row login_form" id="contactForm" noValidate="novalidate">
                                    <div className="col-md-12 form-group">
                                        <input type="text" className="form-control" name="name"
                                               placeholder="Username"/>
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <input type="password" className="form-control" name="name"
                                               placeholder="Password"/>
                                    </div>
                                    <div className="col-md-12 form-group mt-3">
                                        <button type="submit" className="primary-btn">Log In</button>
                                        <a href="#">Forgot Password?</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
}

Login.propTypes = {};

export default Login;