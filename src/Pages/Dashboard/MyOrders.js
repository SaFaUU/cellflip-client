import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Loader from '../Shared/Loader/Loader';

const MyOrders = () => {
    const { user, loading } = useContext(AuthContext)


    const { data: products, refetch } = useQuery({
        queryKey: ['myorders'],
        queryFn: () => fetch(`http://localhost:5000/my-orders?email=${user?.email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`,
            }
        })
            .then(res => res.json())
    })
    if (loading) {
        return <Loader></Loader>
    }
    return (
        <div className='flex flex-row flex-wrap justify-center'>
            {
                products?.map((product, index) => <div key={index} className="card lg:w-[380px] w-full bg-base-100 shadow-lg mb-10 flex mx-10">
                    <figure><img src={product?.img_url} alt="Shoes" className='h-96' /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-xl font-bold">{product?.productName}</h2>
                        <div className='flex my-2 justify-between text-white font-bold'>
                            <div className="btn btn-success py-3 px-2 grow mr-2 text-white">{product.price}BDT</div>
                            {product?.paid ?
                                <Link to={`/payment/${product?.productId}`} className="btn btn-primary py-3 px-2 grow text-white btn-disabled" >PAID</Link>
                                :
                                <Link to={`/payment/${product?.productId}`} className="btn btn-primary py-3 px-2 grow text-white">PAY NOW</Link>
                            }
                        </div>
                    </div>
                </div>)
            }

        </div>
    );
};

export default MyOrders;