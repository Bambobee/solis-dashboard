/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Modal, Button } from 'antd';
// import { CloseOutlined } from '@ant-design/icons';

import { useCustomer } from 'context/CustomerContext';

function AddCustomer(props) {
  const { addNewCustomer, fetchCustomers } = useCustomer();

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [recepient, setRecepient] = useState('');
  const [contact, setContact] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { name, contact, address, recepient };
    addNewCustomer(payload);
    setRecepient('');
    setName('');
    setAddress('');
    setContact('');
    fetchCustomers();
  };

  return (
    <Modal
      visible={true}
      onCancel={props.close}
      title="Add new customer"
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
          Save
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
          placeholder="Plot 1600, Jinja-Road, Namboole Ave"
          className="w-[100%] text-base px-4 py-2 border border-gray-300 focus:outline-none focus:border-indigo-500"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className="mt-4 content-center">
        <input
          type="email"
          placeholder="Mr John Doe"
          className="w-[100%] text-base px-4 py-2 border border-gray-300 focus:outline-none focus:border-indigo-500"
          value={recepient}
          onChange={(e) => setRecepient(e.target.value)}
        />
      </div>
      <div className="mt-4 content-center">
        <input
          type="email"
          placeholder="+256-700160012"
          className="w-[100%] text-base px-4 py-2 border border-gray-300 focus:outline-none focus:border-indigo-500"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
      </div>
    </Modal>
  );
}

export default AddCustomer;
