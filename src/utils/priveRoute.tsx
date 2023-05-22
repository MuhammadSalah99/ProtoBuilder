import React, { useContext, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './useAuth';
import { useLocalStorage } from './useLocalStorage'; 
interface PrivateRouteProps {
  element: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const location = useLocation();
    useEffect(() => {
      console.log(user)

    }, [])
    const {user} = useAuth()
  if (!{user}) {
    return <Navigate to="/login" replace />;
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

