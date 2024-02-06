import React, { useState, useEffect } from 'react';
import { Checkbox, Spin } from 'antd';
import { useNavigate } from 'react-router-dom';
import { LoadingOutlined } from '@ant-design/icons';

import OAuth from './OAuth';
import { useAuth } from '../context/AuthContext';
import Validator from 'validators';
import { load, noLoad } from '../common/classes/buttonClass';
import { formInput, formLoad, formInputError } from '../common/classes/formClasses';
import { openNotificationWithIcon } from '../common/notifications/Notification';

function Login() {
  const antIcon = <LoadingOutlined style={{ fontSize: 15, color: '#101d2c' }} spin />;

  let navigate = useNavigate();
  const { auth, login } = useAuth();

  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(true);
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(true);
  const [emailError, setEmailError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);

  useEffect(() => {
    if (auth.error) {
      openNotificationWithIcon('error', auth.error);
      setLoading(false);
      setLoginLoading(false);
      if (auth.error.includes('Please setUp your business to proceed')) {
        navigate('/onboarding');
      }
    }
    if (auth.loginSuccess && auth.isAuthenticated) {
      setLoading(false);
      setLoginLoading(false);
      if (!auth.user.company) {
        navigate('/onboarding');
      } else {
        navigate('/dashboard/home');
      }
    } else {
      if (!auth.loginSuccess && !auth.isAuthenticated) {
        setLoading(false);
      }
    }
  }, [auth]);

  const handleLoading = () => {
    setLoginLoading(true);
  };

  useEffect(() => {
    const isEmail = Validator.validateEmail(email);
    if (email.length > 0 && !isEmail) {
      return setEmailError('invalid email');
    } else {
      return setEmailError('');
    }
  }, [email]);

  const loginHandler = (e) => {
    setLoginLoading(true);
    e.preventDefault();
    const paylod = { email, password };
    setTimeout(() => {
      login(paylod);
    }, 3000);
  };

  return (
    <div className="relative min-h-screen flex bg-[f2f4f8]">
      <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-center flex-auto min-w-0 bg-[#f2f4f8] py-10 px-2">
        <div className=" flex w-auto rounded-lg md:rounded-none items-center justify-center p-10 w-full h-full lg:p-14 xl:w-2/5 p-8">
          {loading ? (
            <Spin indicator={antIcon} size="large" />
          ) : (
            <div className=" bg-white max-w-md w-full space-y-4 rounded-xl border">
              <div className="text-center px-5">
                <h2 className="mt-4 text-2xl  font-bold text-gray-900">Welcom Back!</h2>
                <OAuth
                  text="Continue Signin with Google"
                  loading={loginLoading}
                  handleLoading={handleLoading}
                />
              </div>
              <div className="flex items-center h-auto justify-center space-x-2">
                <span className="h-px w-16 bg-gray-500"></span>

                <span className="text-gray-900">or continue with</span>
                <span className="h-px w-16 bg-gray-500"></span>
              </div>
              <form
                className="flex flex-col space-y-6 w-full px-5 justify-center"
                onSubmit={loginHandler}>
                <input
                  className={emailError ? formInputError : loginLoading ? formLoad : formInput}
                  type="email"
                  value={email}
                  readOnly={loginLoading ? true : false}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailError ? (
                  <div className="w-[100%] relative z-1 flex py-0 mt-[-5px] px-0 flex-col text-[12px] font-normal text-red-900">
                    {emailError}
                  </div>
                ) : (
                  ''
                )}
                <input
                  className={loginLoading ? formLoad : formInput}
                  type="password"
                  value={password}
                  readOnly={loginLoading ? true : false}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  // onClick={() => setLoading(true)}
                  disabled={loginLoading}
                  className={loginLoading ? load : noLoad}>
                  {loginLoading ? (
                    <>
                      <Spin indicator={antIcon} size="default" />
                      <span className="ml-[5px]">loading,please wait..</span>
                    </>
                  ) : (
                    'login'
                  )}
                </button>
                <div className="flex flex-row justify-between px-5 sm:px-0 w-full">
                  <Checkbox
                    name="remember"
                    className={remember ? `text-gray-900` : ''}
                    checked={remember}
                    disabled={loginLoading}
                    onChange={() => setRemember(!remember)}>
                    Remember me
                  </Checkbox>
                  {loginLoading ? (
                    <>Forgot password</>
                  ) : (
                    <a className="p-0 text-gray-900" href="/account/recovery">
                      Forgot password
                    </a>
                  )}
                </div>
                <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                  <span>Don not have an account?</span>
                  {loginLoading ? (
                    <>signup</>
                  ) : (
                    <a
                      href="/register"
                      className="text-gray-900  no-underline cursor-pointer hover:text-blue-500
                     transition ease-in duration-300">
                      Signup
                    </a>
                  )}
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
