import React, {useEffect, useState} from 'react';
import {NavLink, useParams} from "react-router-dom";
import ProductDataService from "../DataService/ProductDataService";
import Header from "../layout/Frontend/Header";
import Footer from "../layout/Frontend/Footer";
import {CartContext} from "../Contexts/Cart";
import CategoryDataService from "../DataService/CategoryDataService";

const Detail = () => {
    let {id} = useParams();
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
    return (
        <div>
            <Header/>
            <section className="banner-area organic-breadcrumb">
                <div className="container">
                    <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                        <div className="col-first">
                            <h1>Product Details Page</h1>
                            <nav className="d-flex align-items-center">
                                <NavLink to="/">Home<span className="lnr lnr-arrow-right"></span></NavLink>
                                <NavLink to={"/" + id}>product-details</NavLink>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            {currentProduct ? (
                <div className="product_image_area mb-5">
                    <div className="container">
                        <div className="row s_product_inner">
                            <div className="col-lg-6">
                                <div className="single-prd-item">
                                    <img className="img-fluid" src={currentProduct.image} alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-5 offset-lg-1">
                                <div className="s_product_text">
                                    <h3>{currentProduct.name}</h3>
                                    <h2>{currentProduct.price}</h2>
                                    <ul className="list">
                                        <li>
                                            <a href="#">
                                                <span className="pull-left">Category :</span>
                                                {listCategory.map(({id, name},index) =>
                                                    <span className="pull-left category_detail" key={index}>{currentProduct.categoryId == id ? name : ''}</span>
                                                )}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#"><span>Availibility : </span>{currentProduct.status ? 'In stock' : 'Out of stock'}</a>
                                        </li>
                                    </ul>
                                    <p>{currentProduct.detail}</p>
                                    <div className="product_count">
                                        <label htmlFor="qty">Quantity:</label>
                                        <input type="text" name="qty" id="sst" maxLength={12} defaultValue={1}
                                               title="Quantity:" className="input-text qty"/>
                                        <button className="increase items-count" type="button"
                                                onClick={() => {
                                                    let result = document.getElementById('sst');
                                                    let sst = result.value;
                                                    if (!isNaN(sst)) result.value++;
                                                    return false;
                                                }}>
                                            <i className="lnr lnr-chevron-up"/>
                                        </button>
                                        <button className="reduced items-count" type="button"
                                                onClick={() => {
                                                    let result = document.getElementById('sst');
                                                    let sst = result.value;
                                                    if (!isNaN(sst) && sst > 1) result.value--;
                                                    return false;
                                                }}>
                                            <i className="lnr lnr-chevron-down"/>
                                        </button>
                                    </div>
                                    <CartContext.Consumer>
                                        {({addToCart}) => (
                                            <div className="card_area d-flex align-items-center">
                                                <a onClick={() => addToCart(currentProduct)}
                                                   className="primary-btn">Add to cart
                                                </a>
                                            </div>
                                        )}
                                    </CartContext.Consumer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : ('')}
            <Footer/>
        </div>
    );
};

Detail.propTypes = {};

export default Detail;