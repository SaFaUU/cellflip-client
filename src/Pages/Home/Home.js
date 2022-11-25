import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner';
import Card from './Card';
import Sidebar from './Sidebar';

const Home = () => {
    const rows = [];
    for (let i = 0; i < 6; i++) {
        rows.push(i);
    }
    return (
        <div>
            <Banner></Banner>
            <h2 className='text-4xl font-bold mb-12 divider'>Advertised Item</h2>
            <div className='flex my-10'>
                <div className='mr-5'>
                    <Sidebar></Sidebar>
                </div>
                <div className=' grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>

                    {
                        rows.map(row => <Card></Card>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Home;