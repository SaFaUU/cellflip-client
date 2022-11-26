import React, { useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const useRole = (email) => {
    const [userRole, setUserRole] = useState('');
    const [userLoading, setUserLoading] = useState(true);
    useEffect(() => {
        fetch(`http://localhost:5000/user/${email}`)
            .then(res => res.json())
            .then(data => {
                setUserRole(data.role);
                setUserLoading(false)
            })
    }, [email, userRole])

    return [userRole, userLoading]
};

export default useRole;