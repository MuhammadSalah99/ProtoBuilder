import React, { useContext } from 'react';
import { Route, Navigate, RouteProps } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
interface PrivateRouteProps extends RouteProps {
  element: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element, ...rest }) => {
  const { user } = useContext(AuthContext);

  return user ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;

