import React, {useState} from 'react';
import Sidebar from "../../layout/Backend/Sidebar/Sidebar";
import Navbar from "../../layout/Backend/Topbar/Navbar";
import {NavLink} from "react-router-dom";
import Footer from "../../layout/Backend/Footer/Footer";
import {useForm} from "react-hook-form";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserDataService from "../../DataService/UserDataService";

const Add = () => {
    const {register, handleSubmit, errors} = useForm();
    const addUser = {
        id: null,
        name: "",
        email: "",
        address: "",
        password: ""
    };
    const [user, setUser] = useState(addUser);
    const saveUser = (data) => {
        UserDataService.create(data)
            .then(response => {
                setUser({...data});
                toast.success('Add new user successfully..!');
                document.getElementById("myForm").reset();
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
                                <h6 className="m-0 font-weight-bold text-info">Category Management</h6>
                            </div>
                            <div className="row mx-5 my-5">
                                <div className="col-md-6">
                                    {(
                                        <div>
                                            <form id="myForm" onSubmit={handleSubmit(saveUser)}>
                                                <div className="form-group">
                                                    <label htmlFor="name">Name</label>
                                                    <input type="text" className="form-control"
                                                           placeholder="Name"
                                                           ref={register({required: true})}
                                                           name="name"/>
                                                    {errors.name &&
                                                    <span className="text-danger">This field is required</span>}
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="name">Email</label>
                                                    <input type="email" className="form-control"
                                                           placeholder="Email"
                                                           ref={register({required: true})}
                                                           name="email"/>
                                                    {errors.email &&
                                                    <span className="text-danger">This field is required and you must enter is email</span>}
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="name">Password</label>
                                                    <input type="password" className="form-control"
                                                           placeholder="Password"
                                                           ref={register({required: true})}
                                                           name="password"/>
                                                    {errors.password &&
                                                    <span className="text-danger">This field is required and enter at least 6 characters</span>}
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="name">Address</label>
                                                    <input type="text" className="form-control"
                                                           placeholder="Address"
                                                           ref={register({required: true})}
                                                           name="address"/>
                                                    {errors.address &&
                                                    <span className="text-danger">This field is required</span>}
                                                </div>
                                                <button type="submit" className="btn btn-danger mr-3" >
                                                    Submit
                                                </button>
                                                <NavLink className="btn btn-info" to="/admin/user">Cancel</NavLink>
                                                <ToastContainer/>
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