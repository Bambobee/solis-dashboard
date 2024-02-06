/* eslint-disable react/prop-types */
import React from 'react';

function StepOne(props) {
  return (
    <div
      className={`${
        props.step === 1
          ? `bg-gray-300 p-[15px] border  border-blue-300 rounded-xl flex flex-row font-semibold justify-between items-center w-[100%] h-[8rem]`
          : `bg-white border  border-gray-300 p-[15px] border rounded-xl flex flex-row font-normal justify-between items-center w-[100%] h-[8rem]`
      } `}>
      <div>Hello</div>
      <div>Invoice</div>
      <div>status</div>
    </div>
  );
}

export default StepOne;
