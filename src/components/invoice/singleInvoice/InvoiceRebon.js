/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

function InvoiceRebon(props) {
  return (
    <div
      className={` border flex px-2 flex-row w-full h-12 bg-gray-800 justify-between font-semibold items-center text-white tex-[16px] hover:cursor-pointer`}>
      <div className="flex flex-row w-[98%] h-12 px-2 justify-between font-semibold items-center  text-white tex-[16px]">
        <div>#</div>
        <div className="w-[55%]">Items</div>
        <div>Quantity</div>
        <div className="flex justify-center items-center w-[4rem]">Price</div>
        <div className="flex justify-center items-center w-[5rem]">Amount</div>
      </div>
      <div></div>
    </div>
  );
}

export default InvoiceRebon;
