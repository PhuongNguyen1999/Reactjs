import React from 'react';

const Banner = () => {
    return (
        <section className="banner-area">
            <div className="container">
                <div className="row fullscreen align-items-center justify-content-start">
                    <div className="col-lg-12">
                        <div className="row single-slide align-items-center d-flex">
                            <div className="col-lg-5 col-md-6">
                                <div className="banner-content">
                                    <h1>Nike New <br/>Collection!</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et
                                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation.</p>
                                    <div className="add-bag d-flex align-items-center">
                                        <a className="add-btn" href=""><span className="lnr lnr-cross"/></a>
                                        <span className="add-text text-uppercase">Add to Bag</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="banner-img">
                                    <img className="img-fluid" src="https://firebasestorage.googleapis.com/v0/b/fir-react-upload-6e61b.appspot.com/o/images%2F637037652463329577_11-do-removebg-preview.png?alt=media&token=190ab825-06af-468c-9d82-4b8587b6e705" width="50%" height="auto" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

Banner.propTypes = {};

export default Banner;