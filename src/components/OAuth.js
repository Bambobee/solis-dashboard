/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useLocation } from 'react-router-dom';

import { useAuth } from 'context/AuthContext';

function OAuth(props) {
  const { googleLogin, googleSignup } = useAuth();
  const location = useLocation();

  const handleSuccess = (data) => {
    props.handleLoading();
    const payload = data;
    setTimeout(() => {
      location.pathname === '/register' ? googleSignup(payload) : googleLogin(payload);
    }, 3000);
  };

  const handleFailure = () => {};

  return (
    <>
      <GoogleLogin
        theme="light"
        clientId={process.env.REACT_APP_CLIENT_ID}
        className={`flex flex-row w-full justify-center text-gray-900 items-center rounded-[35px]  border  hover:bg-[#f2f4f8] transition ease-in duration-500 ${
          props.loading ? 'cursor-not-allowed' : 'cursor-pointer'
        }`}
        buttonText={props.text}
        onSuccess={handleSuccess}
        onFailure={handleFailure}
        cookiePolicy={'single_host_origin'}
      />
    </>
  );
}

export default OAuth;
