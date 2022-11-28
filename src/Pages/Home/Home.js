import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import BookingModal from '../Shared/BookingModal/BookingModal';
import Banner from './Banner';
import Card from './Card';
import Offers from './Offers';
import Sidebar from './Sidebar';

const Home = () => {
    const { data: products, refetch } = useQuery({
        queryKey: ['allProducts'],
        queryFn: () => fetch('http://localhost:5000/products', {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`,
            }
        })
            .then(res => res.json())
    })
    const [modalData, setModalData] = useState({})
    const handleModal = (product) => {
        console.log(product)
        setModalData(product)
    }
    const [bookingData, setBookingData] = useState({})


    let [closeModalState, setCloseModalDataState] = useState(true)
    const closeModal = () => {
        console.log(closeModalState)
        toast.success('Product has been booked successfully')
        setCloseModalDataState(!closeModal)
    }

    return (
        <div>
            <Banner></Banner>
            <div>
                <h2 className='text-4xl font-bold mb-12 divider'>Awesome Offers</h2>
                <Offers></Offers>
            </div>
            {products?.length > 0 &&
                <div>
                    <h2 className='text-4xl font-bold mb-12 divider'>Advertised Item</h2>
                    <div className='lg:flex my-10  mx-auto'>
                        <div className='lg:mr-5 align-middle'>
                            <Sidebar></Sidebar>
                        </div>
                        {/* grid lg:grid-cols-3 grid-cols-2 grid-flow-row-dense gap-10 */}
                        <div className='flex flex-row flex-wrap md:justify-center sm:justify-center lg:justify-between'>

                            {
                                products?.map((product, index) => <Card
                                    key={index}
                                    product={product}
                                    handleModal={handleModal}
                                    setCloseModalDataState={setCloseModalDataState}
                                ></Card>)
                            }

                        </div>
                    </div>
                </div>
            }
            {closeModalState && <BookingModal
                modalData={modalData}
                closeModal={closeModal}
                setBookingData={setBookingData}
            ></BookingModal>}
        </div>
    );
};

export default Home;