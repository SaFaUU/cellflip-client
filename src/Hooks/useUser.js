import React, { useEffect, useState } from 'react';

const useUser = (email) => {
    const [dbUser, setDbUser] = useState({});
    const [dbloading, setDbLoading] = useState(true)

    useEffect(() => {
        fetch(`http://localhost:5000/user/${email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`,
            }

        })
            .then(res => res.json())
            .then(data => {
                setDbUser(data);
                setDbLoading(false);
            })
    }, [email, dbUser])

    return [dbUser, dbloading]
};

export default useUser;