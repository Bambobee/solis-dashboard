/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { Modal, Button } from 'antd';

import { useApp } from 'context/businessContext';

function InviteUser(props) {
  const { id } = useParams();
  const { fetchSingleBusiness } = useApp();

  const { addNewMemeber } = useApp();
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { name, email, role };
    addNewMemeber(payload);
    setTimeout(() => {
      fetchSingleBusiness({ id });
    }, 500);
  };

  const roles = [
    {
      id: 1,
      label: 'Administrator'
    },
    {
      id: 2,
      label: 'Accountant'
    },
    {
      id: 1,
      label: 'Human Resource'
    },
    {
      id: 1,
      label: 'Head of Finance'
    }
  ];

  const handleRole = (e) => {
    setRole(e.target.value);
  };

  return (
    <Modal
      visible={true}
      onCancel={props.close}
      title="Invite Team member"
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
          Invite
        </Button>
      ]}>
      <div className="mt-4 content-center">
        <input
          type="first name"
          placeholder="example John"
          className="w-[100%] text-base px-4 py-2 border border-gray-300 focus:outline-none focus:border-indigo-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mt-4 content-center">
        <input
          type="email"
          placeholder="example@gmail.com"
          className="w-[100%] text-base px-4 py-2 border border-gray-300 focus:outline-none focus:border-indigo-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex felx-row justify-between items-center mt-4 content-center">
        <select
          placeholder="Assing a role e.g Admin"
          onChange={handleRole}
          className="w-[100%] text-base px-4 py-2 border border-gray-300 focus:outline-none focus:border-indigo-500"
          style={{ backgroundColor: 'white' }}>
          <option value="default" disabled hidden>
            Assign a role
          </option>
          {roles.map((role) => (
            <option key={role.id}>{role.label}</option>
          ))}
        </select>
      </div>
    </Modal>
  );
}

export default InviteUser;
