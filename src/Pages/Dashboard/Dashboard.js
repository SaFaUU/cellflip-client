import React from 'react';
import { Outlet } from 'react-router-dom';
import AllSellers from './AllSellers';
import DashboardSidebar from './DashboardSidebar';

const Dashboard = () => {
    return (
        <div className=''>
            <div className='lg:flex lg:flex-row mb-40 mt-10 sm:flex sm:flex-col md:flex md:flex-row'>
                <DashboardSidebar></DashboardSidebar>
                <div className='ml-5 md:w-full sm:w-full'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;