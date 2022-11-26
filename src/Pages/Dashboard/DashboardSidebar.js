import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useAdmin from '../../Hooks/useAdmin';
import useRole from '../../Hooks/useRole';
import Loader from '../Shared/Loader/Loader';
import AdminSidebar from './AdminSidebar';
import SellerSidebar from './SellerSidebar';
import UserSidebar from './UserSidebar';

const DashboardSidebar = () => {
    const { user, loading } = useContext(AuthContext)
    const [isAdmin, adminLoading] = useAdmin(user?.email)
    const [userRole, userLoading] = useRole(user?.email)

    if (adminLoading || loading || userLoading) {
        return <Loader></Loader>
    }
    if (isAdmin) {
        return <AdminSidebar></AdminSidebar>
    }
    if (userRole === 'user') {
        return <UserSidebar></UserSidebar>
    }
    if (userRole === 'seller') {
        return <SellerSidebar></SellerSidebar>
    }



};

export default DashboardSidebar;