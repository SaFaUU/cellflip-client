import React from 'react';
import Banner from './Banner';
import Card from './Card';

const Home = () => {
    const rows = [];
    for (let i = 0; i < 6; i++) {
        rows.push(i);
    }
    return (
        <div>
            <Banner></Banner>
            <h2 className='text-4xl font-bold mb-12 divider'>Advertised Item</h2>
            <div className='my-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10'>

                {
                    rows.map(row => <Card></Card>)
                }

            </div>
        </div>
    );
};

export default Home;