import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);

  return isLoggedIn ? (
    <div>{children}</div>
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoute;