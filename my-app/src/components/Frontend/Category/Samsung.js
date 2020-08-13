import React, {useEffect, useState} from 'react';
import Header from "../../layout/Frontend/Header";
import {NavLink, useParams} from "react-router-dom";
import Footer from "../../layout/Frontend/Footer";
import ProductDataService from "../../DataService/ProductDataService";

const Samsung = () => {
    let {id} = useParams();
    useEffect(() => {
        retrieveProducts();
    }, []);
    const [product, setProduct] = useState([]);
    /*
    edit
    * */
    const retrieveProducts = () => {
        ProductDataService.getAll()
            .then(response => {
                setProduct(response.data.filter((item) => item.categoryId == id));
                // console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };
    console.log(product);
    console.log(id);
    return (
        <div>
            <Header />
            <section className="banner-area organic-breadcrumb">
                <div className="container">
                    <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                        <div className="col-first">
                            <h1>Category Page</h1>
                            <nav className="d-flex align-items-center">
                                <NavLink to="/">Home<span className="lnr lnr-arrow-right"></span></NavLink>
                                <span className="text-white">Category | samsung</span>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-lg-6 text-center">
                        <div className="section-title">
                            <h1>Category : <span className="text-warning">Samsung</span></h1>
                            <strong>Latest product model from Samsung brand</strong>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {product.map(({id, name, price, image}, index) =>
                        <div className="col-md-4" key={index}>
                            <div className="product-grid2">
                                <div className="product-image2">
                                    <img className="pic-1" src={image} alt=""/>
                                    <ul className="social">
                                        <li>
                                            <NavLink to={"/" + id} data-tip="Detail">
                                                <span className="lnr lnr-eye"></span>
                                            </NavLink>
                                        </li>
                                    </ul>
                                    <NavLink to="/add-to-cart" className="add-to-cart">Add to cart</NavLink>
                                </div>
                                <div className="product-content">
                                    <h3 className="title">{name}</h3>
                                    <span className="price">{price}</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}

Samsung.propTypes = {};

export default Samsung;