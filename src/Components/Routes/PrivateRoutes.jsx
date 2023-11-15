import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);

    if(loading){
        return <div className='flex justify-center my-40'><span className="loading loading-dots loading-lg"></span></div>
    }

    if(user){
        return children;
    }


    return <Navigate state={location.pathname} to='/signIn'></Navigate>;
};

export default PrivateRoutes;