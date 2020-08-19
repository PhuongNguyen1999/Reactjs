import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import CategoryDataService from "../../DataService/CategoryDataService";
import {CartContext} from "../../Contexts/Cart";

const Header = () => {
    useEffect(() => {
        retrieveCategories();
    }, []);
    const [listCategory, setListCategory] = useState([]);
    const retrieveCategories = () => {
        CategoryDataService.getAll()
            .then(response => {
                setListCategory(response.data);
                // console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };
    return (
        <header className="header_area sticky-header">
            <div className="main_menu">
                <nav className="navbar navbar-expand-lg navbar-light main_box">
                    <div className="container">
                        {/* Brand and toggle get grouped for better mobile display */}
                        <NavLink className="navbar-brand logo_h" to="/"><img src="https://firebasestorage.googleapis.com/v0/b/fir-react-upload-6e61b.appspot.com/o/images%2Flogo.png?alt=media&token=9799b2ff-be88-424d-b35d-ff72ba1b3c93" alt=""/></NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                        </button>
                        {/* Collect the nav links, forms, and other content for toggling */}
                        <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                            <ul className="nav navbar-nav menu_nav ml-auto">
                                <li className="nav-item active">
                                    <NavLink className="nav-link" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item submenu dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown"
                                       role="button" aria-haspopup="true" aria-expanded="false">Category</a>
                                    <ul className="dropdown-menu">
                                        {listCategory.map(({id, name}, index) =>
                                            <li className="nav-item" key={index}>
                                                <NavLink className="nav-link" to={/category/ + name.toLowerCase() + "/" + id}>{name}</NavLink>
                                            </li>
                                        )}
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                </li>
                                <li className="nav-item submenu dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown"
                                       role="button" aria-haspopup="true" aria-expanded="false">Account</a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/login">Login</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/register">Register</NavLink>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li className="nav-item">
                                    <CartContext.Consumer>
                                        {({ cartItems}) => (<NavLink className="nav-link" to="/cart">Cart ({cartItems.length})</NavLink>)}
                                    </CartContext.Consumer>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

Header.propTypes = {};

export default Header;