/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Modal, Button } from 'antd';

import { useProduct } from 'context/productContext';

function EditProduct(props) {
  const { updateProduct, fetchProducts } = useProduct();
  const [name, setName] = useState(props.product.name);
  const [description, setDescription] = useState(props.product.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { _id: props.product._id, name, description };
    updateProduct(payload);
    setName('');
    setDescription('');
    setTimeout(() => {
      fetchProducts();
    }, 100);
  };

  return (
    <Modal
      visible={true}
      onCancel={props.close}
      title="Edit product details"
      footer={[
        <Button
          key="1"
          shape="round"
          onClick={props.close}
          style={{
            color: '#001529',
            width: 100,
            height: 40,
            fontSize: 14,
            fontWeight: 'bold'
          }}>
          cancel
        </Button>,
        <Button
          key="2"
          shape="round"
          style={{
            backgroundColor: '#001529',
            color: 'white',
            width: 100,
            height: 40,
            fontSize: 14,
            fontWeight: 'bold'
          }}
          onClick={handleSubmit}>
          update
        </Button>
      ]}>
      <div className="flex flex-col justify-around  w-[100%] px-4">
        <div className="mt-4 content-center">
          <input
            type="first name"
            placeholder="example Tesla"
            className="w-[100%] text-base px-4 py-2 border border-gray-300 focus:outline-none focus:border-indigo-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mt-4 content-center">
          <input
            type="email"
            placeholder="Plot 1600, Jinja-Road, Namboole Ave"
            className="w-[100%] text-base px-4 py-2 border border-gray-300 focus:outline-none focus:border-indigo-500"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>
    </Modal>
  );
}

export default EditProduct;
