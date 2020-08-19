import React, {useEffect, useState} from 'react';
import Sidebar from "../../layout/Backend/Sidebar/Sidebar";
import Navbar from "../../layout/Backend/Topbar/Navbar";
import {NavLink} from "react-router-dom";
import Footer from "../../layout/Backend/Footer/Footer";
import ProductDataService from "../../DataService/ProductDataService";
import {useParams} from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useForm} from "react-hook-form";
import CategoryDataService from "../../DataService/CategoryDataService";

const Edit = () => {
    let {id} = useParams();
    const {register, handleSubmit, errors} = useForm();
    useEffect(() => {
        retrieveProducts();
        retrieveCategories();
    }, []);
    const [currentProduct, setCurrentProduct] = useState(null);
    /*
    edit
    * */
    const retrieveProducts = () => {
        ProductDataService.get(id)
            .then(response => {
                setCurrentProduct(response.data);
                // console.log(response.data);
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
                // console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };
    /*
    update
    * */
    const updateProduct = (data) => {
        ProductDataService.update(currentProduct.id, data)
            .then(response => {
                // console.log(response.data);
                toast.success("The product was updated successfully!");
            })
            .catch(e => {
                console.log(e);
            });
    };
    /*
    * update status
    * */
    const updatePublished = status => {
        var data = {
            id: currentProduct.id,
            name: currentProduct.name,
            price: currentProduct.price,
            image: currentProduct.image,
            detail: currentProduct.detail,
            status: status
        };

        ProductDataService.update(currentProduct.id, data)
            .then(response => {
                setCurrentProduct({...currentProduct, status: status});
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
                                <h6 className="m-0 font-weight-bold text-info">Product Management</h6>
                            </div>
                            {currentProduct ? (
                                <form onSubmit={handleSubmit(updateProduct)}>
                                    <div className="row mx-5 my-5">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="name">Name</label>
                                                <input type="text" className="form-control" name="name"
                                                       placeholder="Name" defaultValue={currentProduct.name}
                                                       ref={register({required: true})}
                                                />
                                                {errors.name &&
                                                <span className="text-danger">This field is required</span>}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="price">Price</label>
                                                <input type="number" className="form-control" name="price"
                                                       placeholder="Price" defaultValue={currentProduct.price}
                                                       ref={register({required: true})}
                                                />
                                                {errors.price &&
                                                <span className="text-danger">This field is required</span>}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="category">Category</label>
                                                {/*<input type="text" className="form-control" name="category_old"*/}
                                                {/*       defaultValue={currentProduct.categoryId}*/}
                                                {/*       disabled*/}
                                                {/*/>*/}
                                                <div className="btn btn-warning form-control">
                                                    {listCategory.map(({id, name},index) =>
                                                        <span key={index}>{currentProduct.categoryId == id ? name : ''}</span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="category">Change category</label>
                                                <select className="form-control d-block" name="categoryId" ref={register}>
                                                    {listCategory.map(({id, name}, index) => <option key={index} value={id}>{name}</option>)}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="image">Image</label>
                                                <img name="image" className="d-block" placeholder="Image"
                                                     src={currentProduct.image}
                                                     width={100} height={80} alt=""
                                                     // ref={register({required: true})}
                                                />
                                                {/*{errors.image &&*/}
                                                {/*<span className="text-danger">This field is required</span>}*/}
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="detail">Detail</label>
                                                <textarea rows={5} className="form-control" name="detail"
                                                          placeholder="Detail" defaultValue={currentProduct.detail}
                                                          ref={register({required: true})}
                                                />
                                                {errors.detail &&
                                                <span className="text-danger">This field is required</span>}
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label className="mr-2">
                                                    <strong>Status:</strong>
                                                </label>
                                                <span>{currentProduct.status ? "Published" : "Pending"}</span>
                                                {currentProduct.status ? (
                                                    <button
                                                        className="badge badge-info ml-2"
                                                        onClick={() => {
                                                            if (window.confirm('Are you sure?')) updatePublished(false)
                                                        }}
                                                    >
                                                        UnPublish
                                                    </button>
                                                ) : (
                                                    <button
                                                        className="badge badge-warning ml-2"
                                                        onClick={() => {
                                                            if (window.confirm('Are you sure?')) updatePublished(true)
                                                        }}
                                                    >
                                                        Publish
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <button type="submit" className="btn btn-danger mr-2">
                                                Update
                                            </button>
                                            <NavLink to="/admin/product" type="submit" className="btn btn-info">
                                                Cancel
                                            </NavLink>
                                            <ToastContainer/>
                                        </div>
                                    </div>
                                </form>
                            ) : ('')}
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