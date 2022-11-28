import React from 'react';
import mobile from '../../Assets/mobile.png'

const Banner = () => {
    return (
        <div className="hero my-10 ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='w-1/2 sm:w-full'>
                    <img src={mobile} className="rounded-lg " alt='' />
                </div>

                <div className='text-left w-1/2 sm:w-full'>
                    <h1 className="text-8xl font-extrabold text-blue-800">SELL YOUR <span className='text-yellow-400'>CELL</span></h1>
                    <p className="py-5 text-2xl w-4/5 sm:w-full sm:py-0 mt-5">Sell your old and Unused Phone right on our website without any hassle.</p>
                    <button className="btn btn-primary font-bold text-white bg-blue-800  hover:bg-blue-900 border-none sm:text-center mt-5">EXPLORE NOW</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;