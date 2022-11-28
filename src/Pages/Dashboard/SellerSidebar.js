import React from 'react';
import { Link } from 'react-router-dom';

const SellerSidebar = () => {
    return (
        <div className="drawer border w-1/5 border-slate-200 rounded-xl  h-auto mb-5 sm:w-full sm:text-center ">
            <div className="drawer-side w-full">
                <label htmlFor="my-drawer-2" className="drawer-overlay hidden lg:block">
                </label>
                <h2 className='font-bold text-2xl  bg-slate-100 py-6'>Dashboard</h2>
                <ul className="menu p-4 w-full bg-base-100 text-base-content lg:block flex flex-row justify-between">
                    <li><Link to='add-product'>Add Product</Link></li>
                    <li><Link to='my-products'>My Products</Link></li>
                    <li><Link to='my-products'>My Buyers</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default SellerSidebar;