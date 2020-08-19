import React, {useEffect, useState} from 'react';
import Sidebar from "../../layout/Backend/Sidebar/Sidebar";
import Navbar from "../../layout/Backend/Topbar/Navbar";
import {NavLink, useParams} from "react-router-dom";
import Footer from "../../layout/Backend/Footer/Footer";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useForm} from "react-hook-form";
import UserDataService from "../../DataService/UserDataService";

const Edit = () => {
    let {id} = useParams();
    const {register, handleSubmit, errors} = useForm();
    useEffect(() => {
        retrieveUsers();
    }, []);
    const [currentUser, setCurrentUser] = useState(null);
    /*
    edit
    * */
    const retrieveUsers = () => {
        UserDataService.get(id)
            .then(response => {
                setCurrentUser(response.data);
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
        UserDataService.update(currentUser.id, data)
            .then(response => {
                toast.success("The user was updated successfully..!");
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
                        <div className="card shadow mb-4 card--content">
                            <div className="card-header py-3 bg-gradient-dark">
                                <h6 className="m-0 font-weight-bold text-info">User Management</h6>
                            </div>
                            <div className="row mx-5 my-5">
                                <div className="col-md-6">
                                    {currentUser ? (
                                        <div>
                                            <form onSubmit={handleSubmit(updateCategory)}>
                                                <div className="form-group">
                                                    <label htmlFor="name">Name</label>
                                                    <input type="text" className="form-control" name="name"
                                                           placeholder="Name" defaultValue={currentUser.name}
                                                           ref={register({required: true})}
                                                    />
                                                    {errors.name &&
                                                    <span className="text-danger">This field is required</span>}
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="email">Email</label>
                                                    <input type="text" className="form-control" name="email"
                                                           placeholder="Email" defaultValue={currentUser.email}
                                                           ref={register({required: true})}
                                                    />
                                                    {errors.email &&
                                                    <span className="text-danger">This field is required</span>}
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="address">Address</label>
                                                    <input type="text" className="form-control" name="address"
                                                           placeholder="Address" defaultValue={currentUser.address}
                                                           ref={register({required: true})}
                                                    />
                                                    {errors.address &&
                                                    <span className="text-danger">This field is required</span>}
                                                </div>
                                                <button type="submit" className="btn btn-danger mr-2" >
                                                    Update
                                                </button>
                                                <NavLink to="/admin/user" type="submit"
                                                         className="btn btn-info">Cancel</NavLink>
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