import { Tag } from 'antd';

export const columns = [
  {
    title: 'status',
    dataIndex: 'status',
    key: 'status',
    width: 200,
    render: (status) => {
      let color = status === 'approved' ? 'geekblue' : 'green';
      if (status === 'draft') {
        color = 'volcano';
      }
      return (
        <Tag color={color} key={status}>
          {status.toLowerCase()}
        </Tag>
      );
    }
  },
  {
    title: 'Created on',
    dataIndex: 'createdAt',
    key: 'age',
    render: (createdAt) => {
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      const d = new Date(createdAt);
      const date = d.toLocaleDateString('en-ca', options);
      return date;
    }
  },
  {
    title: 'number',
    dataIndex: 'invoiceNumber',
    key: 'address'
  },
  {
    title: 'Customer',
    dataIndex: 'customerName',
    key: 'client'
  },
  {
    title: `Amount Due ${'UGX'}`,
    dataIndex: 'amountDue',
    key: 'amountDue',
    render: (amountDue) => {
      return amountDue.toLocaleString('en-US') + 'UGX';
    }
  },
  {
    title: 'Action',
    width: 50
  }
];
