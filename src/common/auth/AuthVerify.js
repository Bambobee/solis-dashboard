import React from 'react';
import jwtDecode from 'jwt-decode';
import { WithRouter } from 'common/auth/withRouter';
import { useAuth } from 'context/AuthContext';
import history from './history';

const AuthVerify = () => {
  const { logout } = useAuth();

  history.listen(() => {
    const token = localStorage.getItem('token');
    // console.log(token);
    if (token) {
      const { exp } = jwtDecode(token);
      const expirationTime = exp * 1000 - 60000;
      if (Date.now() >= expirationTime) {
        logout();
        localStorage.clear();
      }
    }
  });

  return <div></div>;
};

export default WithRouter(AuthVerify);
