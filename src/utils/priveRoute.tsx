import React, { useContext, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useAuth } from './useAuth';
interface PrivateRouteProps {
  element: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const location = useLocation();
    useEffect(() => {
      console.log(user)

    }, [])
    const {user, setUser} = useContext(AuthContext)
  if (!user || user.role != 'Engineer') {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      {React.cloneElement(element as React.ReactElement, {
        key: location.pathname,
      })}
    </>
  );
};

export default PrivateRoute;

