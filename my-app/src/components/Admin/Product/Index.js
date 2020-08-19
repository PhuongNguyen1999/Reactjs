import React, {useEffect, useState} from 'react';
import Sidebar from "../../layout/Backend/Sidebar/Sidebar";
import Navbar from "../../layout/Backend/Topbar/Navbar";
import Footer from "../../layout/Backend/Footer/Footer";
import {NavLink} from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductDataService from "../../DataService/ProductDataService";
import CategoryDataService from "../../DataService/CategoryDataService";

const Product = () => {
    useEffect(() => {
        retrieveProducts();
    }, []);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const refreshList = () => {
        retrieveProducts();
        retrieveCategories();
        setCurrentIndex(-1);
    };
    /*
    list product
    */
    const [listProduct, setListProduct] = useState([]);
    const retrieveProducts = () => {
        ProductDataService.getAll()
            .then(response => {
                setListProduct(response.data);
                // console.log(response.data);
                refreshList();
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
    remove product
    * */
    const removeProduct = (id) => {
        ProductDataService.remove(id)
            .then(response => {
                // console.log(response.data);
                refreshList();
                toast.success("The product has been deleted..!");
            })
            .catch(e => {
                console.log(e);
            });
    };
    const [product, setProduct] = useState([]);
    const [searchName, setSearchName] = useState("");
    const onChangeSearchName = e => {
        const searchName = e.target.value;
        console.log(searchName);
        setSearchName(searchName);
    };
    const findByName = (e) => {
        e.preventDefault();
        ProductDataService.findByName(searchName)
            .then(response => {
                setProduct(response.data);
                console.log(response.data);
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
                                <div className="row d-flex">
                                    <h6 className="mt-2 ml-2 font-weight-bold text-info mr-auto bd-highlight">
                                        Product Management
                                    </h6>
                                    <form className="form-inline my-2 mr-2 my-lg-0">
                                        <input className="form-control mr-sm-2" type="search" placeholder="Search"
                                               aria-label="Search" value={searchName}
                                               onChange={onChangeSearchName}/>
                                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit"
                                                onClick={findByName}>
                                            Search
                                        </button>
                                    </form>
                                    <NavLink className="btn btn-danger bd-highlight mr-3" to="/admin/product/add">Create
                                        product</NavLink>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <table className="table table-striped">
                                        <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Image</th>
                                            <th scope="col">Category</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {listProduct.map(({id, name, price, image, detail ,categoryId , status}, index) =>
                                            <tr key={index}>
                                                <td>{id}</td>
                                                <td>{name}</td>
                                                <td>{price}</td>
                                                <td>
                                                    <img src={image} alt="" width={100} height={80}/>
                                                </td>
                                                <td>
                                                    {listCategory.map(({id, name},index) =>
                                                        <p key={index}>{categoryId == id ? name : ''}</p>
                                                    )}
                                                </td>
                                                <td>
                                                    <span
                                                        className="badge badge-success">{status ? 'Published' : 'Pending'}</span>
                                                </td>
                                                <td>
                                                    <NavLink title="Edit" to={"/admin/product/" + id}
                                                             className="btn btn-info mx-2">
                                                        <EditIcon/>
                                                    </NavLink>
                                                    <button title="Delete" className="btn btn-outline-warning" onClick={() => {
                                                        if (window.confirm('Are you sure?')) removeProduct(id)
                                                    }}><DeleteIcon/></button>
                                                    <ToastContainer/>
                                                </td>
                                            </tr>
                                        )}
                                        {product ? (
                                            product.map(({id, name, price, image, detail, categoryId , status}, index) =>
                                                <tr key={index}>
                                                    <td>{id}</td>
                                                    <td>{name}</td>
                                                    <td>{price}</td>
                                                    <td>
                                                        <img src={image} alt="" width={100} height={80}/>
                                                    </td>
                                                    <td>
                                                        {listCategory.map(({id, name},index) =>
                                                            <p key={index}>{categoryId == id ? name : ''}</p>
                                                        )}
                                                    </td>
                                                    <td>
                                                     <span
                                                         className="badge badge-success">{status ? 'Published' : 'Pending'}</span>
                                                    </td>
                                                    <td>
                                                        <NavLink title="Edit" to={"/admin/product/" + id}
                                                                 className="btn btn-info mx-2">
                                                            <EditIcon/>
                                                        </NavLink>
                                                        <button title="Delete" className="btn btn-outline-warning"
                                                                onClick={() => {
                                                                    if (window.confirm('Are you sure?')) removeProduct(id)
                                                                }}><DeleteIcon/></button>
                                                        <ToastContainer/>
                                                    </td>
                                                </tr>
                                            )) : ('')}
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
};

Product.propTypes = {};

export default Product;