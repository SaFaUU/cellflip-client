import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useUser from '../../../Hooks/useUser';
import Loader from '../Loader/Loader';

const BookingModal = ({ modalData, closeModal, setBookingData }) => {
    const { user, loading } = useContext(AuthContext)
    const [dbUser, dbloading] = useUser(user?.email)
    const { register, handleSubmit } = useForm();

    const handleBook = (data) => {
        console.log(data)

        const bookingData = {
            img_url: modalData.img_url,
            productName: modalData.productName,
            price: modalData.price,
            buyerName: data.userName,
            buyerEmail: data.email,
            buyerPhone: data.buyerPhone,
            meetLocation: data.meetingLocation,
            productId: modalData._id,
            sellerMail: modalData.sellerMail,
            paid: false,
        }

        if (Object.keys(bookingData).length === 10) {
            setBookingData(bookingData)
            fetch('http://localhost:5000/bookings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bookingData),
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    closeModal();
                })

        }

    }
    if (loading || dbloading) {
        return <Loader></Loader>
    }

    return (
        <div>
            <input type="checkbox" id="bookingModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="bookingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit(handleBook)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input {...register("userName", { value: dbUser?.name })} defaultValue={dbUser?.name} className="input input-bordered" type='text' disabled />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input {...register("email", { value: dbUser?.email })} defaultValue={dbUser?.email} className="input input-bordered" type='email' disabled />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Product Name</span>
                                    </label>
                                    <input {...register("email", { value: modalData?.productName })} defaultValue={modalData?.productName} className="input input-bordered" type='text' disabled />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input {...register("price")} placeholder={modalData?.price} className="input input-bordered" type='value' disabled />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone Number</span>
                                    </label>
                                    <input {...register("buyerPhone")} placeholder='Phone Number' className="input input-bordered" type='value' required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Meeting Location</span>
                                    </label>
                                    <input {...register("meetingLocation")} placeholder='Meeting Location' className="input input-bordered" type='text' />
                                </div>
                                <div className="modal-action mt-5 flex">
                                    <input type='submit' value='submit' className="btn btn-primary" />
                                    <label htmlFor="bookingModal" className="btn btn-primary" >Cancel</label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;