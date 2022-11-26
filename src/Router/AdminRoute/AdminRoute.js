import { info } from 'daisyui/src/colors/colorNames';
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useAdmin from '../../Hooks/useAdmin';
import Loader from '../../Pages/Shared/Loader/Loader';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const [isAdmin, adminLoading] = useAdmin(user?.email)

    if (adminLoading || loading) {
        return <Loader></Loader>
    }

    if (isAdmin) {
        return children;
    }
    return (
        <div>
            <h2>You dont have access to this link</h2>
        </div>
    );
};

export default AdminRoute;