import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import { useInvoice } from 'context';
import { useApp } from 'context/businessContext';
import ItemContainer from 'components/items/Items';
import Customers from 'components/customer/Customers';
import AddRemoveInputField from 'components/invoice/invoiceCreate/Temp';
import InvoiceRebon from 'components/invoice/singleInvoice/InvoiceRebon';
import InvoiceHeader from 'components/invoice/singleInvoice/invoiceHeader';
import BillToSection from 'components/invoice/singleInvoice/billToSection';
import InvoiceFooter from 'components/invoice/singleInvoice/invoiceFooter';
import { openNotificationWithIcon } from 'common/notifications/Notification';
import Button from 'components/ui/button/Button';

function EditInvoice() {
  const antIcon = <LoadingOutlined style={{ color: '#101d2c' }} spin />;

  const { product } = useApp();
  const { Invoice, fetchSingleInvoice, updateInvoice } = useInvoice();

  const { id } = useParams();

  // const popover = useRef();
  const [toggle] = useState(false);
  // const close = useCallback(() => toggle(false), []);

  useEffect(() => {
    fetchSingleInvoice({ id });
  }, []);

  const [buttoSippner, setButtonSpinner] = useState(false);
  const [paidLoad, setPaidLoad] = useState(false);
  const [loading, setLoading] = useState(true);
  const [note, setNote] = useState('Thank you for doing business with us');
  const [date] = useState();
  const [sum, setSum] = useState(0);
  const [user, setUser] = useState();
  const [client, setClient] = useState();
  const [showItem, setShowItem] = useState(false);
  const [business] = useState(product.business);
  const [showCustomer, setShowCustomer] = useState(false);
  const [paymentDue, setPaymentDue] = useState();
  const [orderNumber, setOrderNumber] = useState(12312);
  const [invoiceNumber, setInvoiceNumber] = useState(217845);
  const [invoice, setInvoice] = useState(Invoice.invoice);
  const [invoiceDate, setInvoiceDate] = useState('');
  const [inputFields, setInputFields] = useState([
    {
      name: '',
      description: '',
      quantity: 1,
      price: 0,
      amount: 0
    }
  ]);

  useEffect(() => {
    setClient(product.customer);
    if (Invoice.fetchInvoicesSuccess && Invoice.invoice) {
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      const d = new Date(Invoice.invoice.createdAt);
      const date = d.toLocaleDateString('en-ca', options);
      setInvoice(Invoice.invoice);
      setInputFields(Invoice.invoice.invoiceItems);
      setPaymentDue();
      setOrderNumber();
      setInvoiceNumber();
      setInvoiceDate(date);
      setClient({ name: Invoice.invoice.customerName });
      setUser({ name: Invoice.invoice.username });
      setNote(Invoice.invoice.note);
      setLoading(false);
    }
    setShowCustomer(false);
    setShowItem(false);
  }, [product, Invoice]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (product.selectedNew) {
        setClient(product.customer);
        setShowCustomer(false);
        setShowItem(false);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [product]);

  const { name, currency, address } = {
    name: business.map((a) => a.name),
    currency: business.map((a) => a.currency),
    address: business.map((a) => a.address),
    id: business.map((a) => a._id)
  };
  // const user ={name: invoice.username}
  const addInputField = () => {
    setInputFields([
      ...inputFields,
      {
        name: '',
        description: '',
        quantity: 1,
        price: 0,
        amount: 0
      }
    ]);
  };
  const removeInputFields = (index) => {
    const rows = [...inputFields];
    rows.splice(index, 1);
    setInputFields(rows);
  };

  const handleSave = (e) => {
    setButtonSpinner(true);
    e.preventDefault();
    let c_id, customerName;
    if (client === 'undefined') {
      return (c_id = '61d822f7f4f8682f164007fb');
    }
    if (client !== 'undefined') {
      c_id = client.id;
      customerName = client.name;
    }
    const invoiceData = {
      id: id,
      amountDue: sum,
      clientInfo: c_id,
      customerName,
      invoiceItems: inputFields,
      invoiceDate,
      invoiceNumber,
      orderNumber,
      paymentDue,
      note
    };
    updateInvoice(invoiceData);
    setTimeout(() => {
      fetchSingleInvoice({ id });
    }, 2);
  };

  const HandleMarkPaid = (e) => {
    e.preventDefault();
    setPaidLoad(true);
    const invoiceData = { id: id, status: 'paid' };
    updateInvoice(invoiceData);
    setTimeout(() => {
      fetchSingleInvoice({ id });
    }, 6000);
  };

  const handleChange = (index, evnt) => {
    const { name, value } = evnt.target;
    const list = [...inputFields];
    list[index][name] = value;

    setInputFields(list);
  };

  const setAmount = (am, index) => {
    const newList = [...inputFields];
    newList[index].amount = am;
  };
  const handleNote = (e) => {
    setNote(e.target.value);
  };

  const handleCustomer = () => {
    setShowCustomer(!showCustomer);
  };

  const handleColor = () => {
    toggle(true);
  };

  const handleGenerateReceipt = () => {
    // console.log(Invoice.invoice);
    return null;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (Invoice.updateInvoiceSuccess) {
        openNotificationWithIcon('success', Invoice.message);
        setButtonSpinner(false);
        setPaidLoad(false);
      }
    }, 6000);
    return () => clearTimeout(timer);
  }, [Invoice]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const total = inputFields
        .map((item) => item.amount)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      setSum(total);
    }, 900);
    return () => clearTimeout(timer);
  }, [inputFields]);
  const discount = 0;

  // var date = new Date(); // Now
  // date.setDate(date.getDate() + 30); // Set now + 30
  const btnClass = `flex justify-center 
  text-blue-900 py-2 mx-5 px-5 
   tracking-wide font-semibold cursor-pointer 
  transition ease-in duration-500 hover:text-sky-700 cursor-pointer text-blue-500 underline underline-offset-1 `;
  return (
    <>
      {showCustomer && <Customers />}
      {showItem && <ItemContainer />}
      {loading ? (
        <Spin indicator={antIcon} size="large" />
      ) : (
        <div className="flex flex-col m-auto w-full h-auto drop-shadow-xl rounded-xl px-2 md:w-[100%] xl:w-[85%]">
          <div className="flex flex-col justify-between py-1 md:flex-row py-5">
            <h1 className="mt-0 text-[2rem]  font-bold text-gray-900 md:mt-4 text-[2rem] font-bold lg:mt-4 text-[2rem]">
              {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
            </h1>
            <div className="flex flex-row w-auto justify-between items-center">
              {invoice.status === 'paid' ? (
                <Button onClick={handleGenerateReceipt} color={`white`}>
                  Generate Receipt
                </Button>
              ) : null}
              {/* <button
                className="flex justify-center bg-gray-white text-gray-900 mx-0 border-gray-900 py-2 px-4
            rounded-[35px] tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500  ">
                preview
              </button> */}
              <Button color={`white`}>preview</Button>
              {invoice.status !== 'paid' ? (
                <button onClick={HandleMarkPaid} className={btnClass}>
                  {paidLoad ? <Spin indicator={antIcon} size="default" /> : ' Mark as paid'}
                </button>
              ) : invoice.status === 'paid' ? (
                ''
              ) : (
                <button className={btnClass}>Edit</button>
              )}

              {invoice.status === 'paid' ? null : (
                <button
                  onClick={handleSave}
                  className={`flex justify-center ${
                    buttoSippner ? `bg-gray-300` : `bg-gray-900`
                  } hover:bg-gray-600 text-gray-100 py-2 px-4
            rounded-[35px] tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500`}>
                  {buttoSippner ? <Spin indicator={antIcon} size="default" /> : 'save'}
                </button>
              )}
            </div>
          </div>
          <InvoiceHeader business={business} name={name} address={address} user={user} />
          <BillToSection
            status={invoice.status}
            client={client}
            handleCustomer={handleCustomer}
            inputData={inputFields}
            currency={currency}
            invoiceDate={invoiceDate}
            invoiceNumber={invoiceNumber}
            orderNumber={orderNumber}
            date={date}
          />
          <InvoiceRebon handleColor={handleColor} />
          <AddRemoveInputField
            status={invoice.status}
            inputFields={inputFields}
            add={addInputField}
            remove={removeInputFields}
            handleChange={handleChange}
            handleAmount={setAmount}
          />

          <InvoiceFooter
            status={invoice.status}
            currency={currency}
            inputs={inputFields}
            discount={discount}
            note={note}
            handleNote={handleNote}
          />
        </div>
      )}
    </>
  );
}

export default EditInvoice;
