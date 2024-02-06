/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';

function EmailVerification(props) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);
  });

  return (
    <>
      {show && (
        <div className=" flex flex-row fixed z-10 top-[7%] left-[11%] opacity-[90] justify-center items-center w-[88%] h-20 mt-2 bg-blue-300 rounded shadow-lg font-semibold ">
          <p className="m-2 font-normal text-gray-900">You account {props.email} is not verified</p>
          <button className="justify-center space-x-2 bg-blue-200 cursor-pointer rounded-xl p-2">
            Resend verification link
          </button>
          <button className="ml-2" onClick={() => setShow(false)}>
            Later!
          </button>
        </div>
      )}
    </>
  );
}

export default EmailVerification;
