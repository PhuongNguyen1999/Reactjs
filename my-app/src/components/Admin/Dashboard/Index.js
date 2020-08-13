import React, {useEffect, useState} from 'react';
import Sidebar from "../../layout/Backend/Sidebar/Sidebar";
import Navbar from "../../layout/Backend/Topbar/Navbar";
import Footer from "../../layout/Backend/Footer/Footer";
import ProductDataService from "../../DataService/ProductDataService";

const Dashboard = () => {
    useEffect(() => {
        retrieveProducts();
    }, []);
    /*
    list product
    */
    const [listProduct, setListProduct] = useState([]);
    const retrieveProducts = () => {
        ProductDataService.getAll()
            .then(response => {
                setListProduct(response.data);
                // console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <div id="wrapper">
            <Sidebar/>
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Navbar/>
                    <div className="container-fluid">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-info">Dashboard</h6>
                            </div>
                            <div className="row mx-5 my-5">
                                <div className="col-md-6">
                                    <h1>Dashboard</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
};

Dashboard.propTypes = {};

export default Dashboard;