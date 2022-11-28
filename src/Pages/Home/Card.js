import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Card = ({ product, handleModal, setCloseModalDataState }) => {
    const { user } = useContext(AuthContext)
    setCloseModalDataState(true)
    const { description, productName, img_url, price, date, location, originalPrice, purchaseYear, sellerName, sellerMail, verifiedSeller, sellerImg } = product;


    const handleReport = (product) => {
        console.log(product)
        fetch(`https://cellflip-server.vercel.app/report/${product._id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`,
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                toast.success('Product Reported to Admin');
            })
    }
    return (
        <div className="card lg:w-[380px] w-full bg-base-100 shadow-lg mb-10 flex mx-10 lg:mx-0">
            <figure><img src={img_url} alt="Shoes" className='h-96' /></figure>
            <div className="card-body">
                <h2 className="card-title text-xl font-bold">{productName}</h2>
                <p>{description.slice(0, 100)}</p>
                <div className='flex my-2 justify-between text-white font-bold'>
                    <div className="badge badge-success py-3 px-2 grow mr-2 text-white">{price}BDT</div>
                    <div className="badge badge-info py-3 px-2 grow text-white">{date}</div>
                </div>
                <div className="card-actions justify-left w-full flex">
                    <label className="btn btn-primary text-md text-white font-bold grow" htmlFor="bookingModal" onClick={() => {
                        handleModal(product)

                    }}>Book Now</label>
                    <button onClick={() => handleReport(product)} className="btn btn-secondary text-md text-white font-bold w-1/4 px-10">Report</button>
                </div>
                <div className='flex mt-5 align-middle items-center'>

                    <div className='w-1/5'>
                        {
                            verifiedSeller &&
                            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c6/Sign-check-icon.png" alt="" className='w-8 absolute z-10 bottom-20 right-75' />
                        }
                        <div className="avatar">
                            <div className="w-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={sellerImg} alt='' />
                            </div>
                        </div>
                    </div>
                    <div className='ml-5 text-left pb-2'>
                        <h2 className='font-bold text-xl mb-0'>{sellerName}</h2>
                        <p className='text-sm mt-0'>{sellerMail}</p>
                        <p className='text-sm mt-0'>Posted: {date}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;