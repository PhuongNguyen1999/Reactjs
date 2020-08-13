import React, {useEffect, useState} from 'react';
import Sidebar from "../../layout/Backend/Sidebar/Sidebar";
import Navbar from "../../layout/Backend/Topbar/Navbar";
import Footer from "../../layout/Backend/Footer/Footer";
import {NavLink} from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CategoryDataService from "../../DataService/CategoryDataService";

const Category = () => {
    useEffect(() => {
        retrieveCategories();
    }, []);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const refreshList = () => {
        retrieveCategories();
        setCurrentIndex(-1);
    };
    /*
    list product
    */
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
    /*
    remove product
    * */
    const removeCategory = (id) => {
        CategoryDataService.remove(id)
            .then(response => {
                // console.log(response.data);
                refreshList();
                toast.success("The category has been deleted..!");
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
                                <div className="row d-flex bd-highlight">
                                    <h6 className="mt-2 ml-2 font-weight-bold text-info mr-auto bd-highlight">Category
                                        Management</h6>
                                    <NavLink className="btn btn-danger bd-highlight mr-3" to="/admin/category/add">Create
                                        category</NavLink>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <table className="table table-striped">
                                        <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {listCategory.map(({id, name}, index) =>
                                            <tr key={index}>
                                                <td>{id}</td>
                                                <td>{name}</td>
                                                <td>
                                                    <NavLink title="Edit" to={"/admin/category/" + id}
                                                             className="btn btn-info mx-2">
                                                        <EditIcon/>
                                                    </NavLink>
                                                    <button title="Delete" className="btn btn-outline-warning" onClick={() => {
                                                        if (window.confirm('Are you sure?')) removeCategory(id)
                                                    }}><DeleteIcon/></button>
                                                    <ToastContainer />
                                                </td>
                                            </tr>
                                        )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
}

Category.propTypes = {};

export default Category;