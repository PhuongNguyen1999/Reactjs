import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            {/* Sidebar Toggle (Topbar) */}
            <form className="form-inline">
                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                    <i className="fa fa-bars" />
                </button>
            </form>
            {/* Topbar Search */}
            <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div className="input-group">
                    <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                            <i className="fas fa-search fa-sm" />
                        </button>
                    </div>
                </div>
            </form>
            {/* Topbar Navbar */}
            <ul className="navbar-nav ml-auto">
                {/* Nav Item - Search Dropdown (Visible Only XS) */}
                {/*<li className="nav-item dropdown no-arrow d-sm-none">*/}
                {/*    <NavLink className="nav-link dropdown-toggle" to="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">*/}
                {/*        <i className="fas fa-search fa-fw" />*/}
                {/*    </NavLink>*/}
                {/*    /!* Dropdown - Messages *!/*/}
                {/*    <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">*/}
                {/*        <form className="form-inline mr-auto w-100 navbar-search">*/}
                {/*            <div className="input-group">*/}
                {/*                <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />*/}
                {/*                <div className="input-group-append">*/}
                {/*                    <button className="btn btn-primary" type="button">*/}
                {/*                        <i className="fas fa-search fa-sm" />*/}
                {/*                    </button>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </form>*/}
                {/*    </div>*/}
                {/*</li>*/}
                {/*/!* Nav Item - Alerts *!/*/}
                {/*<li className="nav-item dropdown no-arrow mx-1">*/}
                {/*    <NavLink className="nav-link dropdown-toggle" to="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">*/}
                {/*        <i className="fas fa-bell fa-fw" />*/}
                {/*        /!* Counter - Alerts *!/*/}
                {/*        <span className="badge badge-danger badge-counter">3+</span>*/}
                {/*    </NavLink>*/}
                {/*    /!* Dropdown - Alerts *!/*/}
                {/*    <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">*/}
                {/*        <h6 className="dropdown-header">*/}
                {/*            Alerts Center*/}
                {/*        </h6>*/}
                {/*        <NavLink className="dropdown-item d-flex align-items-center" to="#">*/}
                {/*            <div className="mr-3">*/}
                {/*                <div className="icon-circle bg-primary">*/}
                {/*                    <i className="fas fa-file-alt text-white" />*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div>*/}
                {/*                <div className="small text-gray-500">December 12, 2019</div>*/}
                {/*                <span className="font-weight-bold">A new monthly report is ready to download!</span>*/}
                {/*            </div>*/}
                {/*        </NavLink>*/}
                {/*        <NavLink className="dropdown-item d-flex align-items-center" to="#">*/}
                {/*            <div className="mr-3">*/}
                {/*                <div className="icon-circle bg-success">*/}
                {/*                    <i className="fas fa-donate text-white" />*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div>*/}
                {/*                <div className="small text-gray-500">December 7, 2019</div>*/}
                {/*                $290.29 has been deposited into your account!*/}
                {/*            </div>*/}
                {/*        </NavLink>*/}
                {/*        <NavLink className="dropdown-item d-flex align-items-center" to="#">*/}
                {/*            <div className="mr-3">*/}
                {/*                <div className="icon-circle bg-warning">*/}
                {/*                    <i className="fas fa-exclamation-triangle text-white" />*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div>*/}
                {/*                <div className="small text-gray-500">December 2, 2019</div>*/}
                {/*                Spending Alert: We've noticed unusually high spending for your account.*/}
                {/*            </div>*/}
                {/*        </NavLink>*/}
                {/*        <NavLink className="dropdown-item text-center small text-gray-500" to="#">Show All Alerts</NavLink>*/}
                {/*    </div>*/}
                {/*</li>*/}
                {/*/!* Nav Item - Messages *!/*/}
                {/*<li className="nav-item dropdown no-arrow mx-1">*/}
                {/*    <NavLink className="nav-link dropdown-toggle" to="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">*/}
                {/*        <i className="fas fa-envelope fa-fw" />*/}
                {/*        /!* Counter - Messages *!/*/}
                {/*        <span className="badge badge-danger badge-counter">7</span>*/}
                {/*    </NavLink>*/}
                {/*    /!* Dropdown - Messages *!/*/}
                {/*    <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="messagesDropdown">*/}
                {/*        <h6 className="dropdown-header">*/}
                {/*            Message Center*/}
                {/*        </h6>*/}
                {/*        <NavLink className="dropdown-item d-flex align-items-center" to="#">*/}
                {/*            <div className="dropdown-list-image mr-3">*/}
                {/*                <img className="rounded-circle" src="https://source.unsplash.com/fn_BT9fwg_E/60x60" alt=""/>*/}
                {/*                <div className="status-indicator bg-success" />*/}
                {/*            </div>*/}
                {/*            <div className="font-weight-bold">*/}
                {/*                <div className="text-truncate">Hi there! I am wondering if you can help me with a problem I've been having.</div>*/}
                {/*                <div className="small text-gray-500">Emily Fowler · 58m</div>*/}
                {/*            </div>*/}
                {/*        </NavLink>*/}
                {/*        <NavLink className="dropdown-item d-flex align-items-center" to="#">*/}
                {/*            <div className="dropdown-list-image mr-3">*/}
                {/*                <img className="rounded-circle" src="https://source.unsplash.com/AU4VPcFN4LE/60x60" alt=""/>*/}
                {/*                <div className="status-indicator" />*/}
                {/*            </div>*/}
                {/*            <div>*/}
                {/*                <div className="text-truncate">I have the photos that you ordered last month, how would you like them sent to you?</div>*/}
                {/*                <div className="small text-gray-500">Jae Chun · 1d</div>*/}
                {/*            </div>*/}
                {/*        </NavLink>*/}
                {/*        <NavLink className="dropdown-item d-flex align-items-center" to="#">*/}
                {/*            <div className="dropdown-list-image mr-3">*/}
                {/*                <img className="rounded-circle" src="https://source.unsplash.com/CS2uCrpNzJY/60x60" alt=""/>*/}
                {/*                <div className="status-indicator bg-warning" />*/}
                {/*            </div>*/}
                {/*            <div>*/}
                {/*                <div className="text-truncate">Last month's report looks great, I am very happy with the progress so far, keep up the good work!</div>*/}
                {/*                <div className="small text-gray-500">Morgan Alvarez · 2d</div>*/}
                {/*            </div>*/}
                {/*        </NavLink>*/}
                {/*        <NavLink className="dropdown-item d-flex align-items-center" to="#">*/}
                {/*            <div className="dropdown-list-image mr-3">*/}
                {/*                <img className="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60" alt=""/>*/}
                {/*                <div className="status-indicator bg-success" />*/}
                {/*            </div>*/}
                {/*            <div>*/}
                {/*                <div className="text-truncate">Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good...</div>*/}
                {/*                <div className="small text-gray-500">Chicken the Dog · 2w</div>*/}
                {/*            </div>*/}
                {/*        </NavLink>*/}
                {/*        <NavLink className="dropdown-item text-center small text-gray-500" to="#">Read More Messages</NavLink>*/}
                {/*    </div>*/}
                {/*</li>*/}
                <div className="topbar-divider d-none d-sm-block" />
                {/* Nav Item - User Information */}
                <li className="nav-item dropdown no-arrow">
                    <NavLink className="nav-link dropdown-toggle" to="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">Phuong Nguyen</span>
                        <img className="img-profile rounded-circle" src="https://ui-avatars.com/api/?name=PhuongNguyen" alt=""/>
                    </NavLink>
                    {/* Dropdown - User Information */}
                    <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                        <NavLink className="dropdown-item" to="#">
                            <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                            Profile
                        </NavLink>
                        <NavLink className="dropdown-item" to="#">
                            <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
                            Settings
                        </NavLink>
                        <NavLink className="dropdown-item" to="#">
                            <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />
                            Activity Log
                        </NavLink>
                        <div className="dropdown-divider" />
                        <NavLink className="dropdown-item" to="#" data-toggle="modal" data-target="#logoutModal">
                            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                            Logout
                        </NavLink>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

Navbar.propTypes = {};

export default Navbar;