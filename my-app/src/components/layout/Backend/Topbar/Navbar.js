import React from 'react';
import {NavLink, useHistory} from "react-router-dom";

const Navbar = () => {
    let redirect = useHistory();
    const userLogin = localStorage.getItem("userLogin");
    const userData = JSON.parse(userLogin);
    const {name, email} = userData;
    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userLogin");
        redirect.push('/login')
    };
    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            {/* Sidebar Toggle (Topbar) */}
            <form className="form-inline">
                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                    <i className="fa fa-bars"/>
                </button>
            </form>
            {/* Topbar Search */}
            <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div className="input-group">
                    <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                           aria-label="Search" aria-describedby="basic-addon2"/>
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                            <span className="lnr lnr-smile"></span>
                        </button>
                    </div>
                </div>
            </form>
            {/* Topbar Navbar */}
            <ul className="navbar-nav ml-auto">
                <div className="topbar-divider d-none d-sm-block"/>
                {/* Nav Item - User Information */}
                <li className="nav-item dropdown no-arrow">
                    <NavLink className="nav-link dropdown-toggle" to="#" id="userDropdown" role="button"
                             data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">{name} | {email}</span>
                        <img className="img-profile rounded-circle" src={"https://ui-avatars.com/api/?name=" + name}
                             alt=""/>
                    </NavLink>
                    {/* Dropdown - User Information */}
                    <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                         aria-labelledby="userDropdown">
                        <div className="dropdown-divider"/>
                        <button className="btn btn-info px-5 mx-4" onClick={logout} data-toggle="modal"
                                data-target="#logoutModal">
                            Logout
                        </button>
                    </div>
                </li>
            </ul>
        </nav>
    )
};

Navbar.propTypes = {};

export default Navbar;