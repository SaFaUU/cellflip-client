import React from 'react';
import { Link } from 'react-router-dom';

const UserSidebar = () => {
    return (
        <div className="drawer border border-slate-200 rounded-xl  h-auto mb-5 sm:w-full md:w-full lg:w-2/5 sm:text-center">
            <div className="drawer-side w-full ">
                <label htmlFor="my-drawer-2" className="drawer-overlay hidden lg:block">
                </label>
                <h2 className='font-bold text-2xl  bg-slate-100 py-6'>Dashboard</h2>
                <ul className="menu p-4 w-full bg-base-100 text-base-content lg:block flex flex-row justify-between">
                    <li><Link to='my-orders'>My Orders</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default UserSidebar;