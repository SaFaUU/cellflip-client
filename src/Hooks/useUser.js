import React, { useEffect, useState } from 'react';

const useUser = (email) => {
    const [dbUser, setDbUser] = useState({});
    const [dbloading, setDbLoading] = useState(true)

    useEffect(() => {
        fetch(`https://cellflip-server.vercel.app/user/${email}`)
            .then(res => res.json())
            .then(data => {
                setDbUser(data);
                setDbLoading(false);
            })
    }, [email, dbUser])

    return [dbUser, dbloading]
};

export default useUser;