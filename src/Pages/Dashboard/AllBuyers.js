import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllBuyers = () => {
    const { data: users } = useQuery({
        queryKey: ['buyers'],
        queryFn: () => fetch('https://cellflip-server.vercel.app/user?role=user', {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`,
            }
        })
            .then(res => res.json())
    })
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
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.map((user, index) => {
                            return (
                                user?.role === 'user' && <tr
                                    key={index}
                                    className=''
                                >
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td><button className='btn btn-accent btn-sm'>Make Admin</button></td>
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

export default AllBuyers;