/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';

function InvoiceFooter(props) {
  const total = props.inputs
    .map((item) => item.amount)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  const [show, setShow] = useState(false);

  return (
    <div className="flex py-2 flex-col space-y-1 w-full bg-white drop-shadow-md-b rounded-b-[5px] px-[2px]">
      <div className="flex flex-row justify-end h-10 items-center">
        Subtotal:{' '}
        <span className=" flex flex-row justify-end h-4/5 items-center p-2 w-32 font-semibold  text-[0.9rem]">
          {props.currency}
          {total.toLocaleString('en-US')}
        </span>
      </div>
      <div className="flex flex-row justify-end h-10 items-center ">
        {props.add ? (
          <MinusCircleOutlined
            onClick={props.toggle}
            className="hover:text-red-700 cursor-pointer"
          />
        ) : (
          <PlusCircleOutlined
            onClick={props.toggle}
            className="hover:text-sky-700 cursor-pointer"
          />
        )}
        <span className="mx-1">{props.add ? 'Remove VAT' : 'Add VAT'}</span>:{' '}
        <span className=" flex flex-row justify-end h-4/5 items-center p-2 w-32 font-semibold  text-[1rem]">
          {props.add ? (
            <>
              <input
                className="w-[2rem] flex items-center pl-2 justify-end"
                value={props.vat}
                onChange={props.handleVat}
              />
              <span>%</span>
            </>
          ) : (
            <div> 0% </div>
          )}
        </span>
      </div>
      <div className="flex flex-row justify-end h-10 items-center text-sm font-semibold">
        Total{' '}
        <span className="border w-24 p-1 rounded-[5px] text-sm font-normal ml-2">
          {props.currency}
        </span>{' '}
        :{' '}
        <span className=" flex flex-row justify-end h-4/5  p-2 w-32 font-semibold  text-[0.9rem]">
          {props.currency}
          {total.toLocaleString('en-US')}
        </span>
      </div>
      <div className="flex items-center justify-start hover:text-blue-500 cursor-pointer">
        <span onClick={() => setShow(!show)} className="px-3 mx-1 font-bold">
          {show ? 'collapse foot note' : 'click here to add a foot note'}
        </span>
      </div>
      {show && (
        <div className="px-3">
          <textarea
            value={props.note}
            onChange={props.handleNote}
            className="w-[50%] mini-h-auto  px-2 py-2 border border-gray-300 focus:outline-none rounded-[5px] focus:border-blue-600"
          />
        </div>
      )}
    </div>
  );
}

export default InvoiceFooter;
