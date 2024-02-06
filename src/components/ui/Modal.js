/* eslint-disable react/prop-types */
import React from 'react';
// import { Modal } from 'antd';

function CustomModal({ children }) {
  return (
    <div className="flex flex-col fixed z-10 top-[60%] left-[30%] p-3 overflow-y-auto overflow-x-hidden w-[50%] h-auto border items-center drop-shadow-lg rounded-[5px] bg-white md:w-[15%] ">
      {children}
    </div>
  );
}

export default CustomModal;
