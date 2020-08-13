import React from 'react';
import logo from "../../../../logo-removebg-preview.png";
import {NavLink} from "react-router-dom";
import PersonIcon from '@material-ui/icons/Person';
import CategoryIcon from '@material-ui/icons/Category';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SmartphoneIcon from '@material-ui/icons/Smartphone';

const Sidebar = () => {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion bg-sidebar" id="accordionSidebar">
            <NavLink className="sidebar-brand d-flex align-items-center justify-content-center" to="/admin">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"/>
                </div>
                <img src={logo} alt="logo" width={100} height={40}/>
            </NavLink>
            <hr className="sidebar-divider my-0"/>
            <li className="nav-item">
                <NavLink className="nav-link group-page" to="/admin">
                    <DashboardIcon className="icon-page"/>
                    <span className="link-page">Dashboard</span>
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link group-page" to="/admin/user">
                    <PersonIcon className="icon-page"/>
                    <span className="link-page">User</span>
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link group-page" to="/admin/product">
                    <SmartphoneIcon className="icon-page"/>
                    <span className="link-page">Product</span>
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link group-page" to="/admin/category">
                    <CategoryIcon className="icon-page"/>
                    <span className="link-page">Category</span>
                </NavLink>
            </li>
            <hr className="sidebar-divider"/>
        </ul>
    );
}

Sidebar.propTypes = {};

export default Sidebar;