import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
// import { useAuth } from '../../context/AuthContext';

import TopNav from '../../components/auth/TopNav';

export default function Forbidden() {
  let navigate = useNavigate();
  // const {auth} = useAuth();

  const goHomeHandler = () => {
    navigate(`/dashboard/home`);
  };
  return (
    <>
      <TopNav />
      <div className="centerForbidden">
        <h2 style={{ textAlign: 'center' }}>403 Forbidden</h2>
        <h4 style={{ textAlign: 'center' }}>Sorry! This page is forbidden from you.</h4>
        <Button
          type="primary"
          onClick={goHomeHandler}
          style={{ marginTop: '10px' }}
          className="login-form-button"
        >
          😡😡You are lost. Click me to take you home.
        </Button>
      </div>
    </>
  );
}
