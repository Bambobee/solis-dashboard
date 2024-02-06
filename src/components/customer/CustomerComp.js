/* eslint-disable react/prop-types */
import React from 'react';
import { useApp } from '../../context/businessContext';

function CustomerComp({ customer }) {
  const { addCustomer } = useApp();

  const handleSelection = (e, customer) => {
    const cust_data = customer;
    addCustomer(cust_data);
  };

  return (
    <div
      key={customer.id}
      data={customer}
      onClick={(e) => handleSelection(e, customer)}
      className="flex flex-col items-start hover:border-b hover:bg-gray-100 hover:cursor-pointer w-full h-12 p-2 my-1">
      <div className="text-sm font-semibold">{customer.name}</div>
      <div>{customer.recepient}</div>
    </div>
  );
}

export default CustomerComp;
