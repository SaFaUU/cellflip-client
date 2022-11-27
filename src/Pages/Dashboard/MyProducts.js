import { useMutation, useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useUser from '../../Hooks/useUser';
import Loader from '../Shared/Loader/Loader';

const MyProducts = () => {
    const { user, loading } = useContext(AuthContext)

    // const [products, setProducts] = useState([])
    // useEffect(() => {
    //     fetch(`http://localhost:5000/my-products/${user?.email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setProducts(data)
    //         })
    // }, [user, products])
    const { data: products = [], refetch, isLoading } = useQuery({
        queryKey: ['my-products', user?.email],
        queryFn: () => fetch(`http://localhost:5000/my-products/${user?.email}`)
            .then(res => res.json())
    })

    const handleDelete = (product) => {
        fetch(`http://localhost:5000/my-products/${product._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch()
            })
    }

    const handleAdvertise = (product) => {
        // console.log(product)
        product.advertiseEnable = !product.advertiseEnable
        console.log(product)
        fetch(`http://localhost:5000/my-products/${product._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch()
                }
            })

    }

    if (loading) {
        return <Loader></Loader>
    }
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Product Name</th>
                        <th>Time</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Advertise</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products?.map((product, index) => {
                            return (
                                <tr
                                    key={index}
                                    className=''
                                >
                                    <th>{index + 1}</th>
                                    <td>{product.productName}</td>
                                    <td>{product.date}</td>
                                    <td>{product.price}BDT</td>
                                    <td>{product.availability ? 'available' : 'Sold'}</td>
                                    <td><button onClick={() => {
                                        handleAdvertise(product)
                                        product.advertiseEnable = !product.advertiseEnable
                                    }} className='btn btn-primary btn-sm'
                                    >{product?.advertiseEnable ? 'Disable' : 'Enable'}</button></td>
                                    <td>
                                        <button onClick={() => handleDelete(product)} className='btn btn-secondary btn-sm '>DELETE</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyProducts;