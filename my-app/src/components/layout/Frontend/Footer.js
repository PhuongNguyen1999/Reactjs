import React from 'react';

const Footer = () => {
    return (
        <footer className="footer-area section_gap">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <div className="single-footer-widget">
                            <h6>About Us</h6>
                            <p className="text-white-50">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore dolore
                                magna aliqua.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="single-footer-widget mail-chimp">
                            <h6 className="mb-20">Instragram Feed</h6>
                            <ul className="instafeed d-flex flex-wrap">
                                <li><img src="https://cdn.fptshop.com.vn/Uploads/Originals/2019/9/11/637037687763926758_11-pro-max-xanh.png" width={60} height={60} alt=""/></li>
                                <li><img src="https://cdn.fptshop.com.vn/Uploads/Originals/2019/9/11/637037652463329577_11-do.png" width={60} height={60} alt=""/></li>
                                <li><img src="https://cdn.fptshop.com.vn/Uploads/Originals/2018/10/11/636748771945393060_iPhone-Xs-Max-gold.png" width={60} height={60} alt=""/></li>
                                <li><img src="https://cdn.fptshop.com.vn/Uploads/Originals/2017/11/10/636459041871679213_1.jpg" width={60} height={60} alt=""/></li>
                                <li><img src="https://cdn.fptshop.com.vn/Uploads/Originals/2019/1/21/636836628988322696_ip7-plus-vang-1.png" width={60} height={60} alt=""/></li>
                                <li><img src="https://cdn.fptshop.com.vn/Uploads/Originals/2020/1/7/637139916609041371_6s-pl-vang-1.png" width={60} height={60} alt=""/></li>
                                <li><img src="https://cdn.fptshop.com.vn/Uploads/Originals/2020/2/12/637170944337163053_ss-s20-plus-xanh-1.png" width={60} height={60} alt=""/></li>
                                <li><img src="https://cdn.fptshop.com.vn/Uploads/Originals/2020/3/27/637209161431175435_ss-m21-xanh-1.png" width={60} height={60} alt=""/></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="single-footer-widget">
                            <h6>Follow Us</h6>
                            <p>Let us be social</p>
                            <div className="footer-social d-flex align-items-center">
                                <a href="#"><i className="fa fa-facebook"/></a>
                                <a href="#"><i className="fa fa-twitter"/></a>
                                <a href="#"><i className="fa fa-dribbble"/></a>
                                <a href="#"><i className="fa fa-behance"/></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom d-flex justify-content-center align-items-center flex-wrap">
                    <p className="footer-text m-0 text-white-50">
                        Copyright © 2020 All rights reserved | This website is made with by <span
                        className="text-warning">Go Smart</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}

Footer.propTypes = {};

export default Footer;