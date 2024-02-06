import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import { AccountBookFilled, LoadingOutlined } from '@ant-design/icons';

import { useAuth } from 'context';
import Validator from 'validators';
import { formInput, formInputError } from 'common/classes/formClasses';
import { load, noLoad } from 'common/classes/buttonClass';
import SuccessAlert from './alerts/successAlert';

function ForgotPassword() {
  const { auth, accountRecovery } = useAuth();
  const antIcon = <LoadingOutlined style={{ fontSize: 15, color: '#101d2c' }} spin />;
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [field, setFild] = useState('');
  const [serverError, setServerError] = useState('');
  const [current, setCurrent] = useState(1);

  const handleNext = () => {
    setCurrent((current) => current + 1);
  };
  const handleRecover = (e) => {
    e.preventDefault();
    if (email === '') {
      return setFild('Email field is required');
    }
    const isValid = Validator.validateEmail(email);
    if (!isValid) {
      return setError('Please provide a valid email');
    } else {
      const payload = { email };
      setLoading(true);
      setTimeout(() => {
        accountRecovery(payload);
      }, 10);
    }
  };

  const handleCheckEmail = (email) => {
    const isEmail = Validator.validateEmail(email);
    if (email.length > 0 && !isEmail) {
      return setError('invalid email');
    } else {
      return setError('');
    }
  };
  useEffect(() => {
    if (auth.error) {
      setLoading(false);
      return setServerError(auth.error);
    }
    if (auth.recoverySuccessful) {
      setMessage(auth.message);
      setLoading(false);
      return handleNext();
    }
  }, [auth]);
  return (
    <div className="relative min-h-screen flex bg-[f2f4f8]">
      <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-center flex-auto min-w-0 bg-[#f2f4f8] py-5 px-2">
        <div className="md:flex flex-col md:items-center md:justify-center w-full sm:w-auto md:h-full w-full xl:w-2/5 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-red">
          {current === 1 && (
            <div className=" bg-white max-w-md w-full space-y-6 py-3 rounded-xl border">
              <div className="text-center px-5">
                <AccountBookFilled />
              </div>
              <div className="text-center px-5">
                <h2 className="mt-4 text-2xl  font-bold text-gray-900">Recover your account!</h2>
              </div>
              {serverError ? (
                <div
                  className="w-[90%] mx-auto flex justify-center  rounded-[5px]
                   py-2 px-4
                  rounded-xl tracking-wide font-semibold 
                bg-red-200 text-red-900 py-1 px-3">
                  {serverError}
                </div>
              ) : (
                ''
              )}
              <form className="flex flex-col space-y-3 w-full px-5 justify-center">
                <label className="p-1">Enter your email</label>
                <input
                  className={error ? formInputError : formInput}
                  placeholder={field ? 'Email fieldis required' : 'enter your email'}
                  autoFocus={true}
                  value={email}
                  onBlur={setTimeout(() => {
                    handleCheckEmail(email);
                  }, 100)}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {error ? (
                  <span className="w-[100%] flex py-0 mt-[5px] px-0 flex-col text-[12px] font-normal text-red-900">
                    {error}
                  </span>
                ) : (
                  ''
                )}
                <button
                  disabled={loading || error}
                  onClick={handleRecover}
                  className={loading || error ? load : noLoad}>
                  {loading ? (
                    <>
                      <Spin indicator={antIcon} size="default" />
                      <span className="ml-[5px]">loading,please wait..</span>
                    </>
                  ) : (
                    'Recover'
                  )}
                </button>
                <div className="flex flex-row justify-between px-5 sm:px-0 w-full"></div>

                <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                  <span>Don not have an account?</span>
                  <a
                    href="/register"
                    className="text-indigo-400 hover:text-blue-500 no-underline hover:underline cursor-pointer transition ease-in duration-300">
                    Signup
                  </a>
                </p>
              </form>
            </div>
          )}
          {current === 2 && <SuccessAlert message={message} />}
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
