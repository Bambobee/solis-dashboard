/* eslint-disable react/prop-types */
/* eslint-disable no-empty */
import React, { useEffect } from 'react';

import { useAuth } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const { auth } = useAuth();

  useEffect(() => {
    if (auth.isAuthenticated) {
    }
  }, [auth]);

  return auth.isAuthenticated === false ? (
    children
  ) : (
    <Navigate
      to="/login"
      replace
      state={{
        referrer: location.pathname,
        from: location
      }}
    />
  );
};

export default RequireAuth;
