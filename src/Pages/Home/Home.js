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
            <div className='lg:flex my-10  mx-auto'>
                <div className='lg:mr-5 align-middle'>
                    <Sidebar></Sidebar>
                </div>
                {/* grid lg:grid-cols-3 grid-cols-2 grid-flow-row-dense gap-10 */}
                <div className='flex flex-row flex-wrap justify-between'>

                    {
                        rows.map((row, index) => <Card></Card>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Home;