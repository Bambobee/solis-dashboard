import React, { useState, useEffect } from 'react';
import { Checkbox, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { useApp } from 'context/businessContext';
import { useCustomer } from 'context/CustomerContext';
import AddCustomer from 'components/dialog/addCustomer';
import ClientComponent from 'components/customer/client';
import CustomFilter from 'components/dashboard/filter/customerFilter';

function Customers() {
  const antIcon = <LoadingOutlined style={{ fontSize: 45, color: '#101d2c' }} spin />;

  const { product } = useApp();

  const { customer, fetchCustomers } = useCustomer();

  useEffect(() => {
    fetchCustomers();
  }, []);

  const [company, setCompany] = useState(product.business);
  const [clients, setClients] = useState(customer.customers);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);

  const handleOpen = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(!show);
  };
  useEffect(() => {
    setCompany(product.business);
  }, [product.business]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (customer.fetchCustomerSuccess || customer.upadateCustomerSuccess || customer.customers) {
        setClients(customer.customers);
        setLoading(false);
      }
      setShow(false);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [customer]);

  useEffect(() => {
    //   if(mounted){
    //   openNotificationWithIcon('success', customer.message)
    //     fetchCustomers()
    //     setClients(customer.customers)
    //   }
    // return ()=>{
    //   // clearTimeout(identifier)
    //   mounted = false;
    // }
  }, [customer]);



  // const { name } = {
  //   name: company.map((a) => a.name)
  // };

  return (
    <>
      {show && <AddCustomer show={show} close={handleClose} />}
      <div className="flex flex-col  m-auto w-full h-auto drop-shadow-xl px-2 md:w-[100%] lg:w-[100%] xl:w-[100%]">
        {loading ? (
          <Skeleton height={30} />
        ) : (
          <div className="flex flex-col px-2 py-3 lg:flex-row justify-between">
            <h1 className="mt-4 text-[1.5rem] font-bold text-gray-900 md:text-[2rem]  lg:text-[2rem]">
              {/* {name + ' ' + 'Customer list'}{' '} */}
            </h1>
            <div className="flex flex-row w-auto justify-between items-center">
              <button
                onClick={handleOpen}
                className="flex justify-center bg-gray-900 
      hover:bg-gray-600 text-gray-100 py-2 px-3
      rounded-[35px] tracking-wide font-semibold  shadow-lg cursor-pointer 
      transition ease-in duration-500">
                Add customer
              </button>
            </div>
          </div>
        )}
        <CustomFilter text="All Customers" />
        <div className=" flex flex-col m-auto w-full h-auto drop-shadow-xl mt-[0.5rem] bg-white ">
          <div className="flex flex-row justify-between px-3 h-[3rem] items-center py-2 border w-full bg-gray-900 font-semibold text-white">
            <Checkbox />
            <div className="w-1/4">Name</div>
            <div className="w-1/4 flex items-center justify-center">Address</div>
            <div>Company</div>
            <div>Balance</div>
            <div>Action</div>
          </div>
          <div className="flex flex-col items-center  w-full-h-auto">
            {/* {loading ? (
              <Spin indicator={antIcon} size="large" />
            ) : (
              <div className="bg-white h-auto w-full">
                 {clients === null || clients === 'undefined' ? (
                  <div>No customers</div>
                ) : (
                  clients.map((element, _id) => <ClientComponent key={_id} client={element} />)
                )}
              </div>
            )} */}
            <div className="bg-white h-auto w-full">
                 {clients === null || clients === 'undefined' ? (
                  <div>No customers</div>
                ) : (
                  clients.map((element, _id) => <ClientComponent key={_id} client={element} />)
                )}
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Customers;
