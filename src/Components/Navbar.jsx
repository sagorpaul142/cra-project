import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "../page/HomePage";
import AddProduct from "../page/AddProduct";

const Navbar = () => {
    return (
        <Routes>
            <Route path={"/"} element={<HomePage/>}/>
            <Route path={"/add"} element={<AddProduct/>}/>
        </Routes>
    );
};

export default Navbar;
