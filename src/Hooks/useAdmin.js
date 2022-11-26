import React, { useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const useAdmin = (email) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    useEffect(() => {
        fetch(`http://localhost:5000/admin/${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.role === 'admin') {
                    setIsAdmin(true);
                }
                setAdminLoading(false)
            })
    }, [email, isAdmin])

    return [isAdmin, adminLoading]
};

export default useAdmin;