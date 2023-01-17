import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "../page/HomePage";
import AddProduct from "../page/AddProduct";
import EditProductPage from "../page/EditProductPage";

const Navbar = () => {
    return (
        <Routes>
            <Route path={"/"} element={<HomePage/>}/>
            <Route path={"/edit/:id"} element={<EditProductPage />}/>
            <Route path={"/add-product"} element={<AddProduct/>}/>
        </Routes>
    );
};

export default Navbar;
