import React from 'react';
import SingleItem from './singleItem';

function InvoiceItem(item) {
  return (
    <>
      {item.item.length > 0
        ? item.item.map((elment, _id) => <SingleItem key={_id} item={elment} />)
        : ''}
    </>
  );
}

export default InvoiceItem;
