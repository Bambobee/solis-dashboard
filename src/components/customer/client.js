/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import EditCustomer from 'components/dialog/editCustomer';

import { useCustomer } from 'context/CustomerContext';
import { openNotificationWithIcon } from 'common/notifications/Notification';
import { Checkbox } from 'antd';

function ClientComponent({ client }) {
  const { fetchCustomers, customer } = useCustomer();

  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!customer.isMounted) {
      fetchCustomers();
    }
  }, [customer.isMounted]);

  useEffect(() => {
    if (customer.updateCustomerSuccess) {
      openNotificationWithIcon('success', customer.message);
      setShow(false);
    }
  }, [customer]);

  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      {show && <EditCustomer client={client} close={handleClose} />}
      <div
        key={client._id}
        className=" flex flex-row justify-between px-3 py-2 border-t w-full items-center cursor-pointer h-[4rem] font-semibold ">
        <Checkbox />
        <div className=" w-1/4">{client.recepient}</div>
        <div className="w-1/4 flex items-center justify-center">{client.address}</div>
        <div>{client.name.toUpperCase()}</div>
        <div>-</div>
        <div className="cursor-pointer font-semibold text-[1.1rem]">
          <EditOutlined onClick={handleShow} className="hover:text-blue-400" />{' '}
          <span>
            <DeleteOutlined className="hover:text-red-400" />
          </span>
        </div>
      </div>
    </>
  );
}

export default ClientComponent;
