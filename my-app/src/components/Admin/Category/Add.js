import React, {useState} from 'react';
import Sidebar from "../../layout/Backend/Sidebar/Sidebar";
import Navbar from "../../layout/Backend/Topbar/Navbar";
import {NavLink} from "react-router-dom";
import Footer from "../../layout/Backend/Footer/Footer";
import {useForm} from "react-hook-form";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CategoryDataService from "../../DataService/CategoryDataService";

const Add = () => {
    const {register, handleSubmit, errors} = useForm();
    const addCategory = {
        id: null,
        name: "",
    };
    const [category, setCategory] = useState(addCategory);
    const saveCategory = (data) => {
        CategoryDataService.create(data)
            .then(response => {
                setCategory({
                    id: response.data.id,
                    name: response.data.name,
                });
                toast.success("Add new category successfully..!");
                document.getElementById("myForm").reset();
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
                        <div className="card shadow mb-4 card--content">
                            <div className="card-header py-3 bg-gradient-dark">
                                <h6 className="m-0 font-weight-bold text-info">Category Management</h6>
                            </div>
                            <div className="row mx-5 my-5">
                                <div className="col-md-6">
                                    {(
                                        <div>
                                            <form id="myForm" onSubmit={handleSubmit(saveCategory)}>
                                                <div className="form-group">
                                                    <label htmlFor="name">Name</label>
                                                    <input type="text" className="form-control"
                                                           placeholder="Name"
                                                           ref={register({required: true, minLength: 5 })}
                                                           name="name"/>
                                                    {errors.name &&
                                                    <span className="text-danger">This field is required and enter at least 5 characters</span>}
                                                </div>
                                                <button type="submit" className="btn btn-danger mr-3">
                                                    Submit
                                                </button>
                                                <NavLink className="btn btn-info" to="/admin/category">Cancel</NavLink>
                                                <ToastContainer />
                                            </form>
                                        </div>
                                    )}
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

Add.propTypes = {};

export default Add;