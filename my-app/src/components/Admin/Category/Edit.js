import React, {useEffect, useState} from 'react';
import {NavLink, useParams} from 'react-router-dom';
import Sidebar from "../../layout/Backend/Sidebar/Sidebar";
import Navbar from "../../layout/Backend/Topbar/Navbar";
import Footer from "../../layout/Backend/Footer/Footer";
import {useForm} from "react-hook-form";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CategoryDataService from "../../DataService/CategoryDataService";

const Edit = () => {
    let {id} = useParams();
    const {register, handleSubmit, errors} = useForm();
    useEffect(() => {
        retrieveCategories();
    }, []);
    const [currentCategory, setCurrentCategory] = useState(null);
    /*
    edit
    * */
    const retrieveCategories = () => {
        CategoryDataService.get(id)
            .then(response => {
                setCurrentCategory(response.data);
                // console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };
    /*
    update
    * */
    const updateCategory = (data) => {
        CategoryDataService.update(currentCategory.id, data)
            .then(response => {
                // console.log(response.data);
                toast.success("The category was updated successfully..!");
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
                                <h6 className="m-0 font-weight-bold text-info">Category Management</h6>
                            </div>
                            <div className="row mx-5 my-5">
                                <div className="col-md-6">
                                    {currentCategory ? (
                                        <div>
                                            <form onSubmit={handleSubmit(updateCategory)}>
                                                <div className="form-group">
                                                    <label htmlFor="name">Name</label>
                                                    <input type="text" className="form-control" name="name"
                                                           placeholder="Name" defaultValue={currentCategory.name}
                                                           ref={register({required: true, minLength: 5 })}
                                                    />
                                                    {errors.name &&
                                                    <span className="text-danger">This field is required and enter at least 5 characters</span>}
                                                </div>
                                                <button type="submit" className="btn btn-danger mr-2">
                                                    Update
                                                </button>
                                                <NavLink to="/admin/category" type="submit" className="btn btn-info">
                                                    Cancel
                                                </NavLink>
                                                <ToastContainer />
                                            </form>
                                        </div>
                                    ) : ('')}
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

Edit.propTypes = {};

export default Edit;