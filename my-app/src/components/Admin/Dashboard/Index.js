import React, {useEffect, useState} from 'react';
import Sidebar from "../../layout/Backend/Sidebar/Sidebar";
import Navbar from "../../layout/Backend/Topbar/Navbar";
import Footer from "../../layout/Backend/Footer/Footer";
import {NavLink, useHistory} from "react-router-dom";
import UserDataService from "../../DataService/UserDataService";
import CategoryDataService from "../../DataService/CategoryDataService";
import ProductDataService from "../../DataService/ProductDataService";

const Dashboard = () => {
    let redirect = useHistory();
    const token = localStorage.getItem("token");
    if (token == null) {
        redirect.push('/login')
    }
    useEffect(() => {
        retrieveUsers();
        retrieveCategories();
        retrieveProducts();
    }, []);
    const [listUser, setListUser] = useState([]);
    const retrieveUsers = () => {
        UserDataService.getAll()
            .then(response => {
                setListUser(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };
    const [listCategory, setListCategory] = useState([]);
    const retrieveCategories = () => {
        CategoryDataService.getAll()
            .then(response => {
                setListCategory(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };
    const [listProduct, setListProduct] = useState([]);
    const retrieveProducts = () => {
        ProductDataService.getAll()
            .then(response => {
                setListProduct(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };
    const userTotal = listUser.length;
    const categoryTotal = listCategory.length;
    const productTotal = listProduct.length;
    return (
        <div id="wrapper">
            <Sidebar/>
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Navbar/>
                    <div className="container-fluid">
                        <div className="card shadow mb-4 card--content">
                            <div className="card-header py-3 bg-gradient-dark">
                                <h6 className="m-0 font-weight-bold text-info">Dashboard</h6>
                            </div>
                            <div className="row mx-5 my-5">
                                <div className="col-md-4">
                                    <div className="card shadow px-4 py-4">
                                        <div className="m-widget4">
                                            <div className="m-widget4__item">
                                                <div className="row">
                                                    <div className="col-md-10">
                                                        <div className="m-widget4__info">
                                                            <button type="button" className="btn btn-info">
                                                                Total accounts <span className="badge badge-warning">{userTotal}</span>
                                                                <span className="sr-only">unread messages</span>
                                                            </button>
                                                            <h6 className="mt-2">accounts created by admin</h6>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <NavLink to="/admin/user" title="View"
                                                           className="btn btn-outline-warning dashboard__icon">
                                                            <span className="lnr lnr-eye"></span>
                                                        </NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card shadow px-4 py-4">
                                        <div className="m-widget4">
                                            <div className="m-widget4__item">
                                                <div className="row">
                                                    <div className="col-md-10">
                                                        <div className="m-widget4__info">
                                                            <button type="button" className="btn btn-info">
                                                                Total category <span className="badge badge-warning">{categoryTotal}</span>
                                                                <span className="sr-only">unread messages</span>
                                                            </button>
                                                            <h6 className="mt-2">accounts created by admin</h6>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <NavLink to="/admin/category" title="View"
                                                           className="btn btn-outline-warning dashboard__icon">
                                                            <span className="lnr lnr-eye"></span>
                                                        </NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card shadow px-4 py-4">
                                        <div className="m-widget4">
                                            <div className="m-widget4__item">
                                                <div className="row">
                                                    <div className="col-md-10">
                                                        <div className="m-widget4__info">
                                                            <button type="button" className="btn btn-info">
                                                                Total product <span className="badge badge-warning">{productTotal}</span>
                                                                <span className="sr-only">unread messages</span>
                                                            </button>
                                                            <h6 className="mt-2">accounts created by admin</h6>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <NavLink to="/admin/product" title="View"
                                                           className="btn btn-outline-warning dashboard__icon">
                                                            <span className="lnr lnr-eye"></span>
                                                        </NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
};

Dashboard.propTypes = {};

export default Dashboard;