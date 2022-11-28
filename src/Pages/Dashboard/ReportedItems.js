import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ReportedItems = () => {
    const { data: reportItems, refetch } = useQuery({
        queryKey: ['reported-items'],
        queryFn: () => fetch('https://cellflip-server.vercel.app/report', {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`,
            }
        })
            .then(res => res.json())
    })
    const handleDelete = (product) => {
        fetch(`https://cellflip-server.vercel.app/products/${product._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`,
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch()
            })
    }
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Product Name</th>
                        <th>Seller</th>
                        <th>Phone</th>
                        <th>Location</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reportItems?.map((item, index) => {
                            return (
                                <tr
                                    key={index}
                                    className=''
                                >
                                    <th>{index + 1}</th>
                                    <td>{item.productName}</td>
                                    <td>{item.sellerName}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.location}</td>
                                    <td>
                                        <button onClick={() => handleDelete(item)} className='btn btn-secondary btn-sm '>DELETE</button>
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

export default ReportedItems;