import React from 'react';
import { Outlet } from 'react-router-dom';
import AllSellers from './AllSellers';
import DashboardSidebar from './DashboardSidebar';

const Dashboard = () => {
    return (
        <div className=''>
            <div className='flex mb-40 mt-10 sm:flex sm:flex-col'>
                <DashboardSidebar></DashboardSidebar>
                <div className='ml-5 w-full'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;