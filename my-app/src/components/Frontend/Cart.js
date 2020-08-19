import React from 'react';
import Header from "../layout/Frontend/Header";
import {NavLink} from "react-router-dom";
import Footer from "../layout/Frontend/Footer";
import {CartContext} from "../Contexts/Cart";

const Cart = () => {
    const data = localStorage.getItem('cart');
    const listProduct = JSON.parse(data);
    return (
        <div>
            <Header/>
            <section className="banner-area organic-breadcrumb">
                <div className="container">
                    <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                        <div className="col-first">
                            <h1>Contact Us</h1>
                            <nav className="d-flex align-items-center">
                                <NavLink to="/">Home<span className="lnr lnr-arrow-right"></span></NavLink>
                                <NavLink to="/cart">Cart</NavLink>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            <section className="cart_area">
                <div className="container">
                    <div className="cart_inner">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                <tr>
                                    <th scope="col">Product</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Total</th>
                                    <th scope="col">Remove</th>
                                </tr>
                                </thead>
                                <tbody>
                                {listProduct ?
                                    (listProduct.map((product) =>
                                        <tr key={product.id}>
                                            <td>
                                                <div className="media">
                                                    <div className="d-flex">
                                                        <img src={product.image} alt="" width={100} height={100}/>
                                                    </div>
                                                    <div className="media-body">
                                                        <p>{product.name}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h5>{product.price}</h5>
                                            </td>
                                            <td>
                                                <div className="product_count">
                                                    <input type="text" name="qty" id="sst" maxLength={12}
                                                           defaultValue={1}
                                                           title="Quantity:" className="input-text qty"/>
                                                    <button
                                                        className="increase items-count" type="button"><i
                                                        className="lnr lnr-chevron-up"/></button>
                                                    <button
                                                        className="reduced items-count" type="button"><i
                                                        className="lnr lnr-chevron-down"/></button>
                                                </div>
                                            </td>
                                            <td>
                                                <h5>{product.price}</h5>
                                            </td>
                                            <td>
                                                <CartContext.Consumer>
                                                    {({removeCart}) => (<button onClick={() => removeCart(product)}
                                                                                className="btn btn-outline-warning">
                                                        <span className="lnr lnr-trash"></span>
                                                    </button>)}
                                                </CartContext.Consumer>
                                            </td>
                                        </tr>
                                    )) : (
                                        <tr>
                                            <td colSpan="2">
                                            </td>
                                            <td>
                                                <span className="alert alert-danger">Cart is empty...!</span>
                                            </td>
                                            <td colSpan="2">
                                            </td>
                                        </tr>
                                    )}
                                <tr>
                                    <td colSpan="3">
                                    </td>
                                    <td>
                                        <h5>Subtotal</h5>
                                    </td>
                                    <td>
                                        <h5>total</h5>
                                    </td>
                                </tr>
                                <tr className="out_button_area">
                                    <td>
                                        <a className="gray_btn" href="#">Update Cart</a>
                                    </td>
                                    <td colSpan="2">
                                    </td>
                                    <td>
                                    </td>
                                    <td>
                                        <div className="checkout_btn_inner d-flex align-items-center">
                                            <NavLink className="gray_btn" to="/">Continue Shopping</NavLink>
                                            <a className="primary-btn" href="#">Proceed to checkout</a>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
};

Cart.propTypes = {};

export default Cart;