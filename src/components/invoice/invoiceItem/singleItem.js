/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';

function SingleItem({ item }) {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const [productCost, setProductCost] = useState(0);

  const handleQuantityChange = (e, item) => {
    const _ID = item._id;
    const q = e.target.value;
    if (_ID) {
      setQuantity(q);
    }
  };
  const priceChange = (e, item) => {
    const _ID = item._id;
    const q = e.target.value;
    if (_ID) {
      setPrice(q);
    }
  };

  useEffect(() => {
    const calculateProductCost = (quantity, price) => {
      let amount = quantity * price;
      setProductCost(amount);
    };
    calculateProductCost(quantity, price);
  }, [quantity, price]);

  return (
    <div className="flex flex-row w-full h-12  justify-between items-center px-2 tex-[16px] border-b">
      <div className=" flex flex-row w-[55%] justify-between ">
        {item.name}
        <span className="w-[75%]">{item.description} </span>{' '}
      </div>
      <div className="flex justify-center items-center  ">
        <input
          key={item._id}
          className="w-[3.5rem] flex items-center justify-center p-2"
          value={quantity}
          data={item}
          onChange={(e) => handleQuantityChange(e, item)}
        />
      </div>
      <div className="flex justify-center items-center">
        <input
          key={item._id}
          className="w-[4rem] flex items-center justify-center p-2"
          value={price.toLocaleString('en-US')}
          data={item}
          onChange={(e) => priceChange(e, item)}
        />
      </div>
      <div className="flex justify-center items-center">
        <input
          id={item._id}
          key={item._id}
          className="flex items-center w-[5rem] p-2"
          value={productCost.toLocaleString('en-US')}
          data={item}
        />
      </div>
    </div>
  );
}

export default SingleItem;
