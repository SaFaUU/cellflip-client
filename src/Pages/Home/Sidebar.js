import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="drawer drawer-mobile border border-slate-200 rounded-xl h-auto">

            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay">Categories</label>
                <h2 className='font-bold text-2xl  bg-slate-100 py-6'>Categories</h2>
                <ul className="menu p-4 w-80 bg-base-100 text-base-content text-center">
                    <li><Link>Iphone</Link></li>
                    <li><Link>Samsung</Link></li>
                    <li><Link>Redmi</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;