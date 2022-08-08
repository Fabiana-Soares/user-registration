import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Login }  from '../pages/Login';
import { Register }from '../pages/Register';
import { Home } from '../pages/Home';
import { Product } from '../pages/Product';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<Login />} />
                <Route path='/register' element={<Register/>} />
                <Route path='/home' element={<Home />} />
                <Route path='/product' element={<Product />} />
            </Routes>
        </BrowserRouter>
    )
}