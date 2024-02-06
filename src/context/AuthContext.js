import React, { createContext, useContext, useMemo, useReducer, useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import { AuthReducer } from 'reducers';
import axios from 'api/axiosInit';

const IntialState = {
  user: null,
  error: null,
  message: null,
  isLoggin: false,
  isOnboarding: false,
  loginSuccess: false,
  loginFailure: false,
  isRegistering: false,
  onBoardSuccess: false,
  isAuthenticated: false,
  recoverySuccessful: false,
  registrationSuccess: false
};

const authContext = createContext();

function AuthProvider(props) {
  const [auth, dispatch] = useReducer(AuthReducer, IntialState);

  useEffect(() => {
    const user = localStorage.getItem('user');
    const token = localStorage.getItem('token');

    if (user && user !== 'undefined' && token) {
      const payload = JSON.parse(user);
      const { exp } = jwtDecode(token);
      const expirationTime = exp * 1000 - 60000;
      if (Date.now() >= expirationTime) {
        return localStorage.clear();
      }
      dispatch({ type: 'LOGIN_SUCCESS', payload });
    }
  }, []);

  const value = useMemo(() => [auth, dispatch], [auth]);
  return <authContext.Provider value={value} {...props} />;
}

function useAuth() {
  const context = useContext(authContext);
  if (!context) {
    throw new Error('useAuth must be within a provider');
  }
  const [auth, dispatch] = context;

  const login = async (payload) => {
    try {
      const response = await axios.post('/user/login', payload);
      const { data } = response;
      dispatch({ type: 'LOGIN', data });
      localStorage.setItem('token', data.access_token);
      localStorage.setItem('user', JSON.stringify(data.data));
      return data;
    } catch ({ response }) {
      var error = response?.data?.error || 'invalid login credentials.';
      dispatch({ type: 'LOGIN_FAILURE', error });
    }
  };

  const signup = async (payload) => {
    try {
      const response = await axios.post('/user/signup', payload);
      const { data } = response;
      const { email, password } = payload;
      await login({ email, password });
      dispatch({ type: 'SIGNUP', data });
      return data;
    } catch ({ response }) {
      var error = response?.data?.error || 'Get it togather mate';
      dispatch({ type: 'SIGNUP_FAILURE', error });
    }
  };

  const googleSignup = async (payload) => {
    const response = await axios.post('/user/google/auth', payload);
    const { data } = response;
    localStorage.setItem('token', data.access_token);
    localStorage.setItem('user', JSON.stringify(data.data));
    dispatch({ type: 'SIGNUP', data });
  };

  const googleLogin = async (payload) => {
    const response = await axios.post('/user/google/auth', payload);
    const { data } = response;
    dispatch({ type: 'LOGIN', data });
    localStorage.setItem('token', data.access_token);
    localStorage.setItem('user', JSON.stringify(data.data));
  };

  const onboard = async (payload) => {
    try {
      const response = await axios.post('/business/create', payload);
      const { data } = response;
      dispatch({ type: 'ONBOARD', data });
      return data;
    } catch ({ response }) {
      var error = response?.data?.error || 'Check require fields';
      dispatch({ type: 'ONBOARD_FAILURE', error });
    }
  };

  const logout = async () => {
    dispatch({ type: 'LOGOUT' });
    window.location.reload();
  };

  const accountRecovery = async (payload) => {
    try {
      const { data } = await axios.post('/users/recover', payload);
      dispatch({ type: 'EMAIL_RECOVERY', data });
      return data;
    } catch ({ response }) {
      var error = response?.data?.error || 'Network problem try again';
      dispatch({ type: 'RECOVERY_FAILED', error });
    }
  };

  return {
    auth,
    dispatch,
    login,
    signup,
    onboard,
    logout,
    googleLogin,
    googleSignup,
    accountRecovery
  };
}
export { AuthProvider, useAuth };
