/* eslint-disable react/prop-types */
import React from 'react';
import { useApp } from '../../context/businessContext';

function ItemComponent({ item }) {
  const { newInoivceItem } = useApp();

  const addInvoiceItem = (e, item) => {
    const invoice_item = item;
    newInoivceItem(invoice_item);
    // console.log(invoice_item)
  };

  return (
    <div
      key={item.id}
      data={item}
      onClick={(e) => addInvoiceItem(e, item)}
      className="w-full flex flex-row justify-between items-center mt-2 h-14 hover:border-b hover:bg-gray-100 hover:cursor-pointer text-sky-700 px-5">
      <div className="text-sm font-semibold flex items-center w-1/4">{item.name}</div>
      <div className="flex items-center justify-center w-2/4">{item.description}</div>
      <div className="flex justify-end items-center w-1/4">{item.price}</div>
    </div>
  );
}

export default ItemComponent;
