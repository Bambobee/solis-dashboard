import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import { useNavigate } from 'react-router-dom';
import { MoneyCollectOutlined } from '@ant-design/icons';

import { useInvoice } from 'context';
import { columns } from 'utils/invoice';
import FilterInvoice from 'components/dashboard/filter/filterInvoice';
import OverallStatistics from 'components/dashboard/overallStats/statistics';
import HeadComponent from 'components/dashboard/header/headComponent';
import { sx } from 'common/classes';

function Invoice() {
  const navigate = useNavigate();

  const { Invoice, fetchAllInvoices } = useInvoice();

  useEffect(() => {
    fetchAllInvoices();
  }, []);

  const [overDue, setOverdue] = useState(0);
  const [amountDue, setAmountDue] = useState(0);
  const [amountPaid, setAmountPaid] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [showStats, setshowStats] = useState(false);
  const [showFilters, setshowFilters] = useState(false);

  const [invoices, setInvoices] = useState(Invoice.invoices);

  const cardData = [
    {
      id: 1,
      icon: <MoneyCollectOutlined />,
      title: 'Invoice amount',
      value: totalAmount
    },
    {
      id: 1,
      icon: <MoneyCollectOutlined />,
      title: 'Amount paid',
      value: amountPaid
    },
    {
      id: 1,
      icon: <MoneyCollectOutlined />,
      title: 'Amount due',
      value: amountDue
    },
    {
      id: 1,
      icon: <MoneyCollectOutlined />,
      title: 'Amount overdue',
      value: overDue
    }
  ];

  const handleShowFilters = () => {
    setshowFilters(!showFilters);
  };
  const handleShowStats = () => {
    setshowStats(!showStats);
  };

  useEffect(() => {
    setInvoices(Invoice.invoices);
  }, [Invoice]);

  useEffect(() => {
    if (invoices !== null) {
      const InvoiceAmount = invoices.map((data) => Number(data.amountDue));
      const paidInvoices = invoices.filter((elm) => elm.status === 'paid');
      const overDueInvoices = invoices.filter((elm) => elm.status === 'overdue');
      const overDueAmount = overDueInvoices.map((doc) => doc.amountDue);
      const paidAmount = paidInvoices.map((element) => element.amountDue);
      const overdue = overDueAmount.reduce((a, b) => a + b, 0);
      const invoiceAmount = InvoiceAmount.reduce((a, b) => a + b, 0);
      const paid = paidAmount.reduce((a, b) => a + b, 0);
      const due = invoiceAmount - paid;
      setTotalAmount(invoiceAmount);
      setOverdue(overdue);
      setAmountPaid(paid);
      setAmountDue(due);
    }
  }, [invoices]);
  return (
    <div className="flex flex-col w-fullh-auto md:w-[100%] lg:w-[100%] xl:w-[90%] mx-auto ">
      <div className="flex m-1 flex-col justify-between h-auto">
        <HeadComponent />
        <div onClick={handleShowStats} className={sx}>
          {showStats ? 'Collapse Statistics' : 'Expand Statistics'}
        </div>
        {showStats && <Statistics data={cardData} />}
        <div onClick={handleShowFilters} className={sx}>
          {showFilters ? 'Collapse Filters' : 'Expand Filters'}
        </div>
        {showFilters && <FilterInvoice />}
      </div>
      <div className="w-full flex flex-col h-auto ">
        <Table
          columns={columns}
          dataSource={invoices}
          size="small"
          onRow={(r) => ({
            onClick: () => navigate(`/dashboard/invoice/${r._id}`)
          })}
        />
      </div>
    </div>
  );
}

export default Invoice;
