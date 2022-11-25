import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuItems = <>
        <li className='rounded-xl btn btn-ghost  mr-5'><Link to='/'>Home</Link></li>
        <li className='rounded-xl btn btn-ghost mr-5'><Link to='/blog'>Blog</Link></li>
        <li className='rounded-xl btn btn-ghost '><Link to='/login'>Login</Link></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl">
                    <img className='w-10' src="cellflip_logo.png" alt="" />
                    <p className='text-3xl font-extrabold text-blue-800 ml-3'>CELLFLIP</p>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className=" flex flex-row ">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">

            </div>
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar ">
                    <div className="w-10 rounded-full ring ring-blue-700 ring-offset-base-100 ring-offset-2">
                        <img src="https://placeimg.com/80/80/people" alt='' />
                    </div>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <Link className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </Link>
                    </li>
                    <li><Link>Settings</Link></li>
                    <li><Link>Logout</Link></li>
                </ul>
            </div>
        </div>

    );
};

export default Navbar;