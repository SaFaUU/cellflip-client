import React from 'react';

const Card = ({ product }) => {
    const { productName, img_url, description, price, date } = product;
    return (
        <div className="card lg:w-[380px] w-full bg-base-100 shadow-lg mb-10 flex ">
            <figure><img src={img_url} alt="Shoes" className='h-96' /></figure>
            <div className="card-body">
                <h2 className="card-title text-xl font-bold">{productName}</h2>
                <p>{description.slice(0, 100)}</p>
                <div className='flex my-2 justify-between text-white font-bold'>
                    <div className="badge badge-success py-3 px-2 grow mr-2 text-white">{price}BDT</div>
                    <div className="badge badge-info py-3 px-2 grow text-white">{date}</div>
                </div>
                <div className="card-actions justify-left w-full flex">
                    <button className="btn btn-primary text-md text-white font-bold grow">Book Now</button>
                    <button className="btn btn-secondary text-md text-white font-bold w-1/4 px-10">Report</button>
                </div>
            </div>
        </div>
    );
};

export default Card;