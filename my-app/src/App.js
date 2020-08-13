import './App.scss';
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Error from './components/Error';
import Product from "./components/Admin/Product/Index";
import ProductAdd from "./components/Admin/Product/Add";
import ProductEdit from "./components/Admin/Product/Edit";
import Dashboard from "./components/Admin/Dashboard/Index";
import Category from "./components/Admin/Category/Index";
import Add from "./components/Admin/Category/Add";
import CategoryEdit from "./components/Admin/Category/Edit";
import User from "./components/Admin/User/Index";
import UserAdd from "./components/Admin/User/Add";
import UserEdit from "./components/Admin/User/Edit";
import Home from './components/Frontend/Home';
import Login from "./components/Frontend/LoginForm";
import Detail from "./components/Frontend/Detail";
import Contact from "./components/Frontend/Contact";
import Apple from "./components/Frontend/Category/Apple";
import Samsung from "./components/Frontend/Category/Samsung";
import Xiaomi from "./components/Frontend/Category/Xiaomi";
import Huawei from "./components/Frontend/Category/Huawei";
import Oppo from "./components/Frontend/Category/Oppo";
import About from "./components/Frontend/About";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/admin/:path?" exact>
                            <Switch>
                                <Route path="/admin" exact>
                                    <Dashboard />
                                </Route>
                                <Route path="/admin/user">
                                    <User />
                                </Route>
                                <Route path="/admin/product">
                                    <Product />
                                </Route>
                                <Route path="/admin/category">
                                    <Category />
                                </Route>
                            </Switch>
                        </Route>
                        <Route path="/admin/user/:path?">
                            <Switch>
                                <Route path="/admin/user/add" exact>
                                    <UserAdd />
                                </Route>
                                <Route path="/admin/user/:id">
                                    <UserEdit />
                                </Route>
                            </Switch>
                        </Route>
                        <Route path="/admin/product/:path?">
                            <Switch>
                                <Route path="/admin/product/add" exact>
                                    <ProductAdd />
                                </Route>
                                <Route path="/admin/product/:id">
                                    <ProductEdit />
                                </Route>
                            </Switch>
                        </Route>
                        <Route path="/admin/category/:path?">
                            <Switch>
                                <Route path="/admin/category/add" exact>
                                    <Add />
                                </Route>
                                <Route path="/admin/category/:id">
                                    <CategoryEdit />
                                </Route>
                            </Switch>
                        </Route>
                        <Route path="/:path?" exact>
                            <Switch>
                                <Route path="/" exact>
                                    <Home />
                                </Route>
                                <Route path="/contact">
                                    <Contact />
                                </Route>
                                <Route path="/about">
                                    <About />
                                </Route>
                                <Route path="/login">
                                    <Login />
                                </Route>
                                <Route path="/:id">
                                    <Detail />
                                </Route>
                                <Route component={Error}/>
                            </Switch>
                        </Route>
                        <Route path="/category/:path?">
                            <Route path="/category/apple/:id">
                                <Apple />
                            </Route>
                            <Route path="/category/samsung/:id">
                                <Samsung />
                            </Route>
                            <Route path="/category/xiaomi/:id">
                                <Xiaomi />
                            </Route>
                            <Route path="/category/huawei/:id">
                                <Huawei />
                            </Route>
                            <Route path="/category/oppo/:id">
                                <Oppo />
                            </Route>
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
