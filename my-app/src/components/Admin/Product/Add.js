import React, {useEffect, useState} from 'react';
import Sidebar from "../../layout/Backend/Sidebar/Sidebar";
import Navbar from "../../layout/Backend/Topbar/Navbar";
import Footer from "../../layout/Backend/Footer/Footer";
import ProductDataService from "../../DataService/ProductDataService";
import {NavLink} from "react-router-dom";
import {useForm} from "react-hook-form";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {storage} from "../../Firebase/FireBase";
import CategoryDataService from "../../DataService/CategoryDataService";

const Add = () => {
    const {register, handleSubmit, errors} = useForm();

    const [product, setProduct] = useState("");
    const saveProduct = (data) => {
        ProductDataService.create(data)
            .then(response => {
                let file = data.image[0];
                const uploadTask = storage.ref(`/images/${file.name}`).put(file);
                uploadTask.on('state_changed',
                    (snapShot) => {
                        console.log(snapShot)
                    }, (err) => {
                        console.log(err)
                    }, () => {
                        storage
                            .ref('images')
                            .child(file.name)
                            .getDownloadURL()
                            .then(url => {
                                console.log(url);
                                setProduct({...data, image: url});
                            })
                    });
                toast.success('Add new product successfully..!');
                document.getElementById("myForm").reset();
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => {
        retrieveCategories();
    }, []);
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
    return (
        <div id="wrapper">
            <Sidebar/>
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Navbar/>
                    <div className="container-fluid">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-info">Product Management</h6>
                            </div>
                            <form id="myForm" onSubmit={handleSubmit(saveProduct)}>
                                <div className="row mx-5 my-5">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="name">Name</label>
                                            <input type="text" className="form-control"
                                                   placeholder="Name"
                                                   ref={register({required: true})}
                                                   name="name"
                                            />
                                            {errors.name &&
                                            <span className="text-danger">This field is required</span>}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="price">Price</label>
                                            <input type="number" className="form-control"
                                                   placeholder="Price"
                                                   ref={register({required: true})}
                                                   name="price"
                                            />
                                            {errors.price &&
                                            <span className="text-danger">This field is required</span>}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="image">Image</label>
                                            <input type="file" className="form-control"
                                                   name="image"
                                                   ref={register({required: true})}
                                            />
                                            {errors.image &&
                                            <span className="text-danger">This field is required</span>}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="category">Category</label>
                                            <select className="form-control d-block" name="categoryId" ref={register}>
                                                {listCategory.map(({id, name}, index) =>
                                                    <option key={index} value={id}>{name}</option>
                                                )}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="Published">Published</label>
                                            <input type="radio" className="d-block" name="status" ref={register({required: true})}/>
                                            {errors.status &&
                                            <span className="text-danger">This field is required</span>}
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="price">Detail</label>
                                            <textarea rows={5} className="form-control"
                                                      placeholder="Detail"
                                                      ref={register({required: true})}
                                                      name="detail"
                                            />
                                            {errors.detail &&
                                            <span className="text-danger">This field is required</span>}
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <button type="submit" className="btn btn-danger mr-3">
                                            Submit
                                        </button>
                                        <NavLink className="btn btn-info" to="/admin/product">Cancel</NavLink>
                                        <ToastContainer/>
                                    </div>
                                </div>
                            </form>
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