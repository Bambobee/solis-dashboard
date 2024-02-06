import React, { useState, useEffect } from 'react';
import { PlusCircleOutlined } from '@ant-design/icons';

import ItemModal from '../ui/Item.modal';
import ItemComponent from './ItemComponent';
import { useProduct } from 'context/productContext';
import AddProduct from 'components/dialog/addProduct';

function ItemContainer() {
  const { productList, fetchProducts } = useProduct();

  useEffect(() => {
    fetchProducts();
  }, []);
  const [show, setShow] = useState(false);
  const [product, setProducts] = useState(productList.products);

  useEffect(() => {
    if (productList.addProductSuccess || productList.fetchProductSuccess) {
      setProducts(productList.products);
      setShow(false);
    }
  }, [productList]);

  const handleOpen = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(!show);
  };

  return (
    <>
      {show && <AddProduct close={handleClose} />}
      <ItemModal>
        <div className="w-full h-[2rem] flex items-center border">
          <input
            className="w-full text-base px-1 focus:outline-none rounded-[3px]focus:border-indigo-500"
            type="search"
            placeholder="search products .."
          />
        </div>
        {product !== null ? product.map((item, id) => <ItemComponent key={id} item={item} />) : ''}
        <div
          onClick={handleOpen}
          className="flex flex-row h-[1.5rem] mt-[5px] hover:text-blue-500 cursor-pointer  w-full items-center border-t justify-center">
          <PlusCircleOutlined />
          <span className="ml-2"> Add New </span>{' '}
        </div>
      </ItemModal>
    </>
  );
}

export default ItemContainer;
