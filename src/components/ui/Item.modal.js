/* eslint-disable react/prop-types */
import React from 'react';

function ItemModal({ children }) {
  return (
    <div className="flex flex-col fixed z-10 top-[70%] left-[31%] overflow-y-auto overflow-x-hidden w-[48.5%] p-3 h-auto border items-center drop-shadow-lg rounded-[5px] bg-white">
      {children}
    </div>
  );
}

export default ItemModal;
