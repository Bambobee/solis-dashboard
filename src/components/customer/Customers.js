import React, { useState, useEffect } from 'react';
import CustomModal from '../ui/Modal';
import CustomerComp from './CustomerComp';

import { PlusCircleOutlined } from '@ant-design/icons';

import { useCustomer } from 'context/CustomerContext';
import AddCustomer from 'components/dialog/addCustomer';

function Customers() {
  const { customer, fetchCustomers } = useCustomer();

  useEffect(() => {
    fetchCustomers();
  }, []);

  const [show, setShow] = useState(false);
  const [searchField, setSearchField] = useState('');
  // const [searchShow, setSearchShow] = useState(false);
  const [customers, setCustomers] = useState(customer.customers);

  useEffect(() => {
    if (customer.addCustomerSuccess || customer.fetchCustomerSuccess) {
      setCustomers(customer.customers);
      setShow(false);
    }
  }, [customer]);

  const handleOpen = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(!show);
  };

  const handleSearch = (e) => {
    setSearchField(e.target.value);
  };

  const filteredCustomer =
    customers !== null
      ? customers.filter((customer) => {
          return (
            customer.name.toLowerCase().includes(searchField.toLowerCase()) ||
            customer.recepient.toLowerCase().includes(searchField.toLowerCase())
          );
        })
      : null;

  return (
    <>
      {show && <AddCustomer close={handleClose} />}

      <CustomModal>
        <div className="w-full h-[2rem] flex items-center border">
          <input
            className="w-full text-base border border-gray-300 px-1 py-1 text-[0.8rem] outline-none focus:outline-none rounded-[3px] focus:border-indigo-200"
            type="search"
            placeholder="search customer .."
            onChange={handleSearch}
          />
        </div>
        <div className="w-[100%] h-[10vh] overflow-y-auto">
          {filteredCustomer !== null
            ? filteredCustomer.map((customer, id) => <CustomerComp key={id} customer={customer} />)
            : ''}
        </div>
        <div
          onClick={handleOpen}
          className="flex flex-row h-[1.5rem] mt-[5px] hover:text-blue-500 cursor-pointer  w-full items-center border-t justify-center">
          <PlusCircleOutlined />
          <span className="ml-2"> Add New </span>{' '}
        </div>
      </CustomModal>
    </>
  );
}

export default Customers;
