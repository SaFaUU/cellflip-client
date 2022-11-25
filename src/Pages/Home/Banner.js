import React from 'react';
import mobile from '../../Assets/mobile.png'

const Banner = () => {
    return (
        // <div className="hero h-80 my-5" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
        //     <div className="hero-overlay bg-opacity-60"></div>
        //     <div className="hero-content text-left text-neutral-content w-5/6 justify-start">
        //         <div className="max-w-md">
        //             <h1 className="mb-2 text-6xl font-bold">Sell Your Cell</h1>
        //             <p className="mb-5">With our website you can sell your old & unused phones at good price wiuth out any hassle.</p>
        //             <button className="btn btn-primary font-bold text-white">Explore</button>
        //         </div>
        //     </div>
        // </div>
        <div className="hero h-2/3  my-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={mobile} className="rounded-lg w-1/2" alt='' />
                <div className='text-left w-1/2'>
                    <h1 className="text-6xl font-bold text-blue-800">SELL YOUR <span className='text-yellow-400'>CELL</span></h1>
                    <p className="mb-5 mt-2">Sell your old and Unused Phone right on our website without any hassle.</p>
                    <button className="btn btn-primary font-bold text-white bg-blue-800  hover:bg-blue-900 border-none">EXPLORE NOW</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;