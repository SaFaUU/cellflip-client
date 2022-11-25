import React from 'react';

const Card = () => {
    return (
        <div className="card bg-base-100 shadow-lg">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" className='w-full' /></figure>
            <div className="card-body">
                <h2 className="card-title text-xl font-bold">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-left w-full flex">
                    <button className="btn btn-primary text-md text-white font-bold grow">Book Now</button>
                    <button className="btn btn-secondary text-md text-white font-bold w-1/4">Report</button>
                </div>
            </div>
        </div>
    );
};

export default Card;