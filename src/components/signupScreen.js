/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoadingOutlined } from '@ant-design/icons';
import { notification, Spin } from 'antd';

import 'antd/dist/antd.min.css';

import { useAuth } from '../context/AuthContext';
import { load, noLoad } from '../common/classes/buttonClass';
import { formInput, formLoad } from '../common/classes/formClasses';
import OAuth from './OAuth';

function SignupScreen(props) {
  const antIcon = <LoadingOutlined style={{ fontSize: 15, color: '#101d2c' }} spin />;
  let navigate = useNavigate();

  const { auth, signup } = useAuth();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const openNotificationWithIcon = (type, msg) => {
    notification[type]({
      message: type,
      description: msg
    });
  };

  useEffect(() => {
    if (auth.error) {
      openNotificationWithIcon('error', auth.error);
      setLoading(false);
    }
    if (auth.registrationSuccess && auth.isAuthenticated) {
      setLoading(false);
      openNotificationWithIcon('success', 'registration successful');
      navigate('/onboarding');
    }
  }, [auth]);

  const signupHandler = (e) => {
    setLoading(true);
    e.preventDefault();
    const payload = { email, name, password };
    setTimeout(() => {
      signup(payload);
    }, 3000);
  };

  const formClass = loading ? formLoad : formInput;
  const inActive = loading ? true : false;

  return (
    <div className="relative min-h-screen flex bg-gray-900">
      <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-center flex-auto min-w-0 bg-white">
        <div className="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full w-full xl:w-2/5 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-red">
          <div className="max-w-md w-full space-y-4  rounded-xl border">
            <div className="text-center px-5 ">
              <h2 className="mt-4 text-2xl font-bold text-gray-900">Welcom to Wave!</h2>
              <OAuth text="Continue Signup with Google" />
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center space-x-2">
                <span className="h-px w-16 bg-gray-500"></span>
                <span className="text-gray-900 font-normal">or continue with</span>
                <span className="h-px w-16 bg-gray-500"></span>
              </div>
              <form className="m-6 space-y-6" onSubmit={signupHandler}>
                <div className="mt-8 content-center">
                  <input
                    className={formClass}
                    type="name"
                    placeholder="Enter your name"
                    value={name}
                    readOnly={inActive}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <input
                    className={formClass}
                    type="email"
                    placeholder="mail@gmail.com"
                    value={email}
                    readOnly={inActive}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mt-8 content-center">
                  <input
                    className={formClass}
                    type="password"
                    placeholder="Enter your password"
                    required={true}
                    value={password}
                    readOnly={inActive}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div>
                  <button disabled={loading} className={loading ? load : noLoad}>
                    {loading ? (
                      <>
                        <Spin indicator={antIcon} size="default" />
                        <span className="ml-[5px]">loading, please wait..</span>
                      </>
                    ) : (
                      'Signup'
                    )}
                  </button>
                </div>
                <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                  <span>Already have an account?</span>
                  <a
                    href="/login"
                    className="text-indigo-400 hover:text-blue-500 no-underline hover:underline cursor-pointer transition ease-in duration-300">
                    Sign in
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupScreen;
