import { format } from 'date-fns';
import React from 'react';
import toast from 'react-hot-toast';

const CategoryCard = ({ product, handleModal, setCloseModalDataState }) => {
    setCloseModalDataState(true)
    const { productName, img_url, description, price, date, location, originalPrice, purchaseYear } = product;
    const handleReport = (product) => {
        console.log(product)
        fetch(`http://localhost:5000/report/${product._id}`, {
            method: 'PUT',
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                toast.success('Product Reported to Admin');
            })
    }
    return (
        <div className="card lg:w-[380px] w-full bg-base-100 shadow-lg mb-10 flex lg:mx-10">
            <figure><img src={img_url} alt="Shoes" className='h-96' /></figure>
            <div className="card-body">
                <h2 className="card-title text-xl font-bold">{productName}</h2>
                <p className='flex justify-start'>Meet Location: {location}</p>
                <div className='flex my-2 justify-between text-white font-bold'>
                    <div className="badge badge-warning rounded py-5 px-2 grow mr-2 text-white text-center">Resale Price: {price}BDT</div>
                    <div className="badge badge-success rounded py-5 px-2 grow mr-2 text-white ">Original Price: {originalPrice}BDT</div>
                    <div className="badge badge-info rounded py-5 px-2 grow text-white">{date}</div>
                </div>
                <div className='flex my-2 justify-between text-white font-bold'>
                    <div className="badge badge-error rounded py-5 px-2 grow mr-2 text-white text-center">Purchase Year: {purchaseYear}BDT</div>
                    <div className="badge badge-primary rounded py-5 px-2 grow mr-2 text-white ">Posted In: {date}BDT</div>
                </div>
                <div className="card-actions justify-left w-full flex">
                    <label className="btn btn-primary text-md text-white font-bold grow" htmlFor="bookingModal" onClick={() => {
                        handleModal(product)

                    }}>Book Now</label>
                    <button onClick={() => handleReport(product)} className="btn btn-secondary text-md text-white font-bold w-1/4 px-10">Report</button>
                </div>

            </div>
            <div>
                <div className="avatar online">
                    <div className="w-24 rounded-full">
                        <img src="https://placeimg.com/192/192/people" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;