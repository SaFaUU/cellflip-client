import React, { useEffect, useState } from 'react';

const useUser = (email) => {
    const [dbUser, setDbUser] = useState('');

    useEffect(() => {
        fetch(`http://localhost:5000/user/${email}`)
            .then(res => res.json())
            .then(data => {
                setDbUser(data);
            })
    }, [email, dbUser])

    return [dbUser]
};

export default useUser;