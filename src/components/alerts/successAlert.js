/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import { formInput } from 'common/classes/formClasses';
import { load, noLoad } from 'common/classes/buttonClass';

function SuccessAlert(props) {
  const [vcode, setVcode] = useState('');
  const [loading, setLoading] = useState(false);

  const handleVerify = (e) => {
    e.preventDefault();
    setLoading(true);
  };

  const isVisible = () => {
    if (vcode === '' || vcode === null) {
      return false;
    } else {
      return true;
    }
  };
  const show = isVisible(vcode);

  return (
    <div className=" bg-white max-w-md w-full space-y-8 py-3 px-3 rounded-xl border">
      <div className="text-center ">
        <h2 data-testid="heading" className="mt-4 text-2xl font-bold text-gray-900">
          Reset Email sent!
        </h2>
      </div>
      <div className="mt-4 text-[16px] text-center font-normal text-gray-900">{props.message}</div>
      <form className="flex flex-col justify-around space-y-5 w-full px-3 ">
        <input
          data-testid="verification"
          className={formInput}
          placeholder="enter code here"
          value={vcode}
          onChange={(e) => setVcode(e.target.value)}
        />
        {show ? (
          <button onClick={handleVerify} className={loading ? load : noLoad}>
            verify
          </button>
        ) : (
          <button className={load}>verify</button>
        )}
      </form>
      <div data-testid="try" className="w-[100%] mt-4 flex flex-row px-3 justify-between">
        <div className="cursor-pointer hover:text-blue-800 transition ease-in duration-300">
          Try another way
        </div>
        <button
          role="resend"
          className="py-2 px-4 hover:bg-gray-900 rounded-[5px] hover:text-white transition ease-in duration-300">
          Resend code
        </button>
      </div>
    </div>
  );
}

export default SuccessAlert;
