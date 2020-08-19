import React, {useEffect, useState} from 'react';
import Header from "../layout/Frontend/Header";
import Footer from "../layout/Frontend/Footer";
import {NavLink, useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";
import UserDataService from "../DataService/UserDataService";

const Login = () => {
    useEffect(() => {
        retrieveUsers();
    }, []);
    const [listUser, setListUser] = useState([]);
    const retrieveUsers = () => {
        UserDataService.getAll()
            .then(response => {
                setListUser(response.data);
                // console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };
    const {register, handleSubmit, errors} = useForm();
    let redirect = useHistory();
    const loggedIn = false;
    const loginForm = {
        email: "",
        password: "",
        loggedIn
    };
    const [login, setLogin] = useState(loginForm);

    const [message, setMessage] = useState("");
    const submitForm = (data) => {
        setLogin(data);
        const {email, password} = login;
        listUser.map((user) => {
            if (email === user.email && password === user.password) {
                localStorage.setItem("token", "phuongbeodeptrai");
                localStorage.setItem("userLogin", JSON.stringify({id:user.id, name:user.name, email:user.email, address:user.address}));
                setLogin({
                    loggedIn: true
                })
            } else {
                setMessage("Email and password are incorrect");
            }
        })
    };
    if (login.loggedIn) {
        redirect.push('/admin');
    }
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
                                <form onSubmit={handleSubmit(submitForm)} className="row login_form" id="contactForm"
                                      noValidate="novalidate">
                                    {message ? (<strong className="text-danger ml-3">{message}</strong>) : ("")}
                                    <div className="col-md-12 form-group">
                                        <input type="email" className="form-control" name="email"
                                               placeholder="Email" ref={register({required: true})} required/>
                                        {errors.email &&
                                        <strong className="text-danger">This field is required</strong>}
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <input type="password" className="form-control" name="password"
                                               placeholder="Password" ref={register({required: true})} required/>
                                        {errors.password &&
                                        <strong className="text-danger">This field is required</strong>}
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
    )
};

Login.propTypes = {};

export default Login;