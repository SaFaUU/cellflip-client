
import { info } from 'daisyui/src/colors/colorNames';
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useUser from '../../Hooks/useUser';
import Loader from '../../Pages/Shared/Loader/Loader';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <Loader></Loader>
    }
    if (user && user.uid) {
        return children;
    }
    return <Navigate to='/login'></Navigate>
};
export default PrivateRoute;
