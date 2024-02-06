/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

import EditProduct from 'components/dialog/editProduct';
import { useProduct } from 'context/productContext';
import { openNotificationWithIcon } from 'common/notifications/Notification';

function ProductComponent({ product }) {
  const { productList } = useProduct();
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
  useEffect(() => {
    if (productList.updateProductSuccess) {
      openNotificationWithIcon('success', productList.message);
      setShow(false);
    }
  }, [productList]);
  return (
    <>
      {show && <EditProduct product={product} close={handleClose} />}
      <div
        data-testid="outerDiv"
        className=" flex flex-row justify-between px-3 py-2 border-t w-full items-center cursor-pointer h-[4rem] font-semibold ">
        <div className=" w-1/4">{product.name}</div>
        <div className="w-auto flex items-center justify-center">{product.description}</div>
        <div className="cursor-pointer font-semibold text-[1.1rem]">
          <EditOutlined onClick={handleShow} className="hover:text-blue-400" />
          <span>
            <DeleteOutlined className="hover:text-red-400" />
          </span>
        </div>
      </div>
    </>
  );
}

export default ProductComponent;
