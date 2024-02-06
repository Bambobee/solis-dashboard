/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Card } from 'antd';
import { UserOutlined, EditOutlined } from '@ant-design/icons';
import EditCustomer from 'components/dialog/editCustomer';

function BillToSection(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const total = props.inputData
    .map((item) => item.amount)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  return (
    <>
      {show && <EditCustomer client={props.client} close={handleClose} />}
      <div className="flex flex-col h-auto justify-between w-full drop-shadow-md-t bg-white rounded-t-[10px] p-[5px] md:flex-row h-1/4 mt-5">
        <div className="flex flex-col w-[100%] h-auto py-[2px]  px-[8px] xl:w-[45%]">
          <div className="flex flex-row justify-between h-1/4 w-full p-0 font-bold">Bill to:</div>
          {props.client ? (
            <div className="flex flex-col text-sm font-semibold">
              {props.client.name.toLocaleUpperCase()}
              {props.client.recepient ? (
                <div className="text-sm font-semibold">
                  Contact person: <span className="font-normal">{props.client.recepient}</span>{' '}
                </div>
              ) : (
                <div></div>
              )}
              {props.client.address ? (
                <div className="text-sm font-semibold">
                  Address: <span className="font-normal"> {props.client.address}</span>
                </div>
              ) : (
                <div></div>
              )}
              {props.client.mobile ? (
                <div className="text-sm font-semibold">
                  {' '}
                  Mobile: <span className="font-normal">{props.client.mobile}</span>{' '}
                </div>
              ) : (
                <div></div>
              )}
              {props.status === 'paid' ? (
                ''
              ) : (
                <div className="flex flex-row items-center">
                  <div
                    onClick={props.handleCustomer}
                    className="flex flex-row mt-2 underline-offset-1 underline hover:text-sky-700 cursor-pointer text-blue-500">
                    Select a different client
                  </div>
                  <EditOutlined
                    onClick={() => setShow(true)}
                    className="hover:text-blue-400 ml-2 underline mt-2 cursor-pointer "
                  />
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-col w-[100%]  border justify-center rounded-[10px] items-center md:w-[50%] lg:w-[70%] xl:w-[60%] h-[65%]">
              <Card style={{ border: 'none' }} className="h-[100%] flex items-center">
                <div
                  onClick={props.handleCustomer}
                  className="flex flex-col-reverse w-full items-center text-normal hover:text-blue-500 cursor-pointer text-black">
                  Add a client{' '}
                  <span className="text-[1.2rem] font-semibold ">
                    <UserOutlined className="h-[70%]" />{' '}
                  </span>
                </div>
              </Card>
            </div>
          )}
        </div>
        <div className="flex flex-col w-full rounded-[5px] p-[8px] md:w-[50%] lg:w-[50%] xl:w-auto ">
          <div className="font-semibold">
            {' '}
            Invoice Number: <span className="font-normal">{props.invoiceNumber}</span>{' '}
          </div>
          <div className="font-semibold">
            {' '}
            Invoice Date : <span className="font-normal">{props.invoiceDate}</span>
          </div>
          <div className="font-semibold">
            {' '}
            Order Number : <span className="font-normal">{props.orderNumber}</span>{' '}
          </div>
          <div className="font-semibold">
            {' '}
            Payment Due: <span className="font-normal">{new Date(props.date).toDateString()}</span>
          </div>
          <div className="flex flex-row justify-between px-1 items-center font-semibold bg-gray-300">
            {' '}
            {props.status === 'paid' ? 'Amount Paid' : 'Amount Due'} ({props.currency}):
            <span className="font-semibold  text-[1rem]">{total.toLocaleString('en-US')} </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default BillToSection;
