import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <div className='mt-10 lg:px-44 md:px-5 sm:px-5'>
                <Navbar></Navbar>
                <Outlet ></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;