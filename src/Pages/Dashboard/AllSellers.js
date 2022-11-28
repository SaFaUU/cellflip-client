import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSellers = () => {
    const { data: users, refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: () => fetch('https://cellflip-server.vercel.app/user?role=seller', {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`,
            }
        })
            .then(res => res.json())
    })
    const handleVerification = (user) => {
        console.log(user)
        fetch(`https://cellflip-server.vercel.app/verify/${user.email}`, {
            method: 'PUT',
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
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Make Admin</th>
                        <th>Verify</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.map((user, index) => {
                            return (
                                user?.role === 'seller' && <tr
                                    key={index}
                                    className=''
                                >
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td><button className='btn btn-accent btn-sm'>Make Admin</button></td>
                                    <td><button onClick={() => {
                                        handleVerification(user)
                                    }} className={user?.verified ? 'btn btn-primary btn-sm btn-disabled' : 'btn btn-primary btn-sm'}>Verify</button></td>
                                    <td>
                                        <button className='btn btn-secondary btn-sm '>DELETE</button>
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

export default AllSellers;