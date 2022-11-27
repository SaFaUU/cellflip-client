import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useRole from '../../Hooks/useRole';
import Loader from '../../Pages/Shared/Loader/Loader';

const UserRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const [userRole, userLoading] = useRole(user?.email)
    if (loading || userLoading) {
        return <Loader></Loader>
    }

    if (user && userRole === 'user') {
        return children;
    }
    return (
        <div>
            <h2>You dont have access to this link</h2>
        </div>
    );

};

export default UserRoute;