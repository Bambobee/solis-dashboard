/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Modal, Button } from 'antd';

import { useProduct } from 'context/productContext';

function AddProduct(props) {
  const { addNewProduct, fetchProducts } = useProduct();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { name, description };
    addNewProduct(payload);
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
      title="Add product"
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
          save
        </Button>
      ]}>
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
          placeholder="This is a great product"
          className="w-[100%] text-base px-4 py-2 border border-gray-300 focus:outline-none focus:border-indigo-500"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
    </Modal>
  );
}

export default AddProduct;
