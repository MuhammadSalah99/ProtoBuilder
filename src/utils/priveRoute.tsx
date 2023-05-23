import React, { useContext, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './useAuth';
interface PrivateRouteProps {
  element: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const location = useLocation();
    useEffect(() => {
      console.log(user)

    }, [])
    const fakeUser = {id: 2, name: 'Ayham', email: 'Ayham@text.com', authToken: 'adajldalda'}
    const {user} = useAuth()
  if (!fakeUser) {
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

