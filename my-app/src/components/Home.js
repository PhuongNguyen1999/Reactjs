import React, {useEffect, useState} from 'react';
import TutorialDataService from "./DataService/ProductDataService";
import VisibilityIcon from '@material-ui/icons/Visibility';
import DetailsIcon from '@material-ui/icons/Details';
import {NavLink} from "react-router-dom";

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
        <div className="container">
            <div className="row mt-5">
                {listProduct.map(({id, name, price, image}, index) =>
                    <div className="col-md-3" key={index}>
                        <div className="product-grid2">
                            <div className="product-image2">
                                <img className="pic-1" src={image} width={300} height={350} alt="" />
                                    <ul className="social">
                                        <li>
                                            <NavLink to="#" data-tip="Quick View" data-toggle="modal" data-target={"#product_view_" + id}>
                                                <VisibilityIcon />
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="#" data-tip="Detail">
                                                <DetailsIcon />
                                            </NavLink>
                                        </li>
                                    </ul>
                                    <NavLink to="#" className="add-to-cart"
                                       data-id={id}>Add to cart</NavLink>
                            </div>
                            <div className="product-content">
                                <h3 className="title">{name}</h3>
                                <span className="price">{price}<sup>đ</sup></span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {listProduct.map(({id, name, price, detail, image}, index) =>
            <div className="modal fade product_view" id={"product_view_" + id} key={index}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title">Product details</h3>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-6 product_img">
                                    <img src={image} className="img-responsive" height="auto" width="100%" alt="" />
                                </div>
                                <div className="col-md-6 product_content">
                                    <h4>{name}</h4>
                                    <strong>Category: brand</strong>
                                    <p>{detail}</p>
                                    <h3> {price} <sup>đ</sup></h3>
                                    <NavLink to="#" className="btn btn-outline-warning my-3" data-id={id}> Add To Cart</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </div>
    );
};

export default Home;