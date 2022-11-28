import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../Shared/BookingModal/BookingModal';
import CategoryCard from './CategoryCard';

const CategoryPage = () => {
    const products = useLoaderData()
    const [modalData, setModalData] = useState({})
    const handleModal = (product) => {
        console.log(product)
        setModalData(product)
    }
    const [bookingData, setBookingData] = useState({})


    let [closeModalState, setCloseModalDataState] = useState(true)
    const closeModal = () => {
        toast.success('Product has been booked successfully')
        setCloseModalDataState(!closeModal)
    }
    return (
        <div>
            <h2 className='font-bold text-3xl my-10'>Search Results for the Selected Category</h2>
            <div className='flex flex-row flex-wrap justify-center'>

                {
                    products?.map((product, index) => <CategoryCard
                        key={index}
                        product={product}
                        handleModal={handleModal}
                        setCloseModalDataState={setCloseModalDataState}
                    ></CategoryCard>)
                }

                {closeModalState && <BookingModal
                    modalData={modalData}
                    closeModal={closeModal}
                    setBookingData={setBookingData}
                ></BookingModal>}
            </div>

        </div>
    );
};

export default CategoryPage;