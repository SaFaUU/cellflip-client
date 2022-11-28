import React, { useEffect, useState } from 'react';

const useAdmin = (email) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    useEffect(() => {
        fetch(`https://cellflip-server.vercel.app/user/${email}`)
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