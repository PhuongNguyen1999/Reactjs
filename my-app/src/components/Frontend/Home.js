import React, {useEffect, useState} from 'react';
import TutorialDataService from "../DataService/ProductDataService";
import Header from "../layout/Frontend/Header";
import Banner from "../layout/Frontend/Banner";
import Footer from "../layout/Frontend/Footer";
import {NavLink} from "react-router-dom";
import {CartContext} from "../Contexts/Cart";

const Home = () => {
    useEffect(() => {
        retrieveProducts();
    }, []);
    const [listProduct, setListProduct] = useState([]);
    const retrieveProducts = () => {
        TutorialDataService.getAll()
            .then(response => {
                setListProduct(response.data);
                // console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };
    return (
        <div>
            <Header/>
            <Banner/>
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-lg-6 text-center">
                        <div className="section-title">
                            <h1>List Products</h1>
                            <p>All products and different brands of the company.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {listProduct.map((product, index) =>
                        <div className="col-lg-3" key={index}>
                            <div className="product-grid2">
                                <div className="product-image2">
                                    <img className="pic-1" src={product.image} alt=""/>
                                        <ul className="social">
                                            <li>
                                                <NavLink to="/cart" data-tip="Go to cart">
                                                    <span className="lnr lnr-cart"></span>
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to={"/" + product.id} data-tip="Detail">
                                                    <span className="lnr lnr-eye"></span>
                                                </NavLink>
                                            </li>
                                        </ul>
                                    <CartContext.Consumer>
                                        {({addToCart}) => (<button onClick={() => addToCart(product)} className="add-to-cart">Add to cart</button>)}
                                    </CartContext.Consumer>
                                </div>
                                <div className="product-content">
                                    <h3 className="title">{product.name}</h3>
                                    <span className="price">{product.price}</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer/>
        </div>
    );
};

Home.propTypes = {};

export default Home;