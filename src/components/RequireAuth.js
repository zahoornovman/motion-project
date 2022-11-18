import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { useIsUserAuthenticate } from '../hooks/useAuth';


const RequireAuth = (props) => {
    const auth = useIsUserAuthenticate();
    const location = useLocation();

    if (!auth) {
        return <Navigate to ="/Login" state= {{ from: location}} replace />
    }

  return props.children
}

export default RequireAuth;
