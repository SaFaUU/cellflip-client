import React from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
    return (
        <div className="drawer border w-1/5 border-slate-200 rounded-xl  h-auto mb-5">

            {/* <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

        </div> */}
            <div className="drawer-side w-full">
                <label htmlFor="my-drawer-2" className="drawer-overlay hidden lg:block">
                </label>
                <h2 className='font-bold text-2xl  bg-slate-100 py-6'>Dashboard</h2>
                <ul className="menu p-4 w-full bg-base-100 text-base-content lg:block flex flex-row justify-between">
                    <li><Link to='all-sellers'>All Sellers</Link></li>
                    <li><Link to='all-buyers'>All Buyers</Link></li>
                    <li><Link to='reported-items'>Reported Item</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default AdminSidebar;