import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/categories')
            .then(data => {
                // console.log(data.data);
                setCategories(data.data)
            })
    }, [])
    return (
        <div className="drawer drawer-mobile border border-slate-200 rounded-xl h-auto mb-5">

            {/* <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div> */}
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay hidden lg:block">
                </label>
                <h2 className='font-bold text-2xl  bg-slate-100 py-6'>Categories</h2>
                <ul className="menu p-4 lg:w-80 bg-base-100 text-base-content lg:block flex flex-row w-full justify-between">

                    {
                        categories?.map((category, index) =>
                            <li
                                key={index}
                            ><Link>{category.name}</Link></li>)
                    }
                </ul>

            </div>
        </div>
    );
};

export default Sidebar;