import React from 'react';

import { Outlet } from 'react-router';
import Navbar from '../../pages/home/shared/navbar/Navbar';
import Footer from '../../pages/home/shared/footer/Footer';


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default MainLayout;