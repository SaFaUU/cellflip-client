import React, { useEffect, useState } from 'react';

const useRole = (email) => {
    const [userRole, setUserRole] = useState('');
    const [userLoading, setUserLoading] = useState(true);
    useEffect(() => {
        fetch(`https://cellflip-server.vercel.app/user/${email}`)
            .then(res => res.json())
            .then(data => {
                setUserRole(data.role);
                setUserLoading(false)
            })
    }, [email, userRole])

    return [userRole, userLoading]
};

export default useRole;