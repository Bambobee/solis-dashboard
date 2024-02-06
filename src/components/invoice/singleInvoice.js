/* eslint-disable no-whitespace-before-property */
import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
// import { PDFViewer } from '@react-pdf/renderer';
// import { PdfComp } from 'components/pdfComponent';

import { useInvoice } from 'context';
import ItemContainer from '../items/Items';
import { useAuth } from 'context/AuthContext';
import Customers from '../customer/Customers';
import { useApp } from 'context/businessContext';
// import { PdfComp } from 'components/pdfComponent';
import ColorPicker from 'components/color/ColorPicker';
import AddRemoveInputField from './invoiceCreate/Temp';
import InvoiceRebon from './singleInvoice/InvoiceRebon';
import InvoiceHeader from './singleInvoice/invoiceHeader';
import InvoiceFooter from './singleInvoice/invoiceFooter';
import BillToSection from './singleInvoice/billToSection';
import { openNotificationWithIcon } from 'common/notifications/Notification';
// import { PdfComp } from 'components/pdfComponent';

function SingleInvoiceComponent() {
  let navigate = useNavigate();

  const antIcon = <LoadingOutlined style={{ color: '#101d2c' }} spin />;

  const { auth } = useAuth();
  const { product } = useApp();
  const { Invoice, createInvoice } = useInvoice();

  const popover = useRef();
  const [isOpen, toggle] = useState(false);
  const close = useCallback(() => toggle(false), []);

  const [note, setNote] = useState('Thank you for doing business with us');
  const [newItem, setNewItem] = useState([]);
  const [user, setUser] = useState(auth.user);
  const [loading, setLoading] = useState(false);
  const [paymentDue, setPaymentDue] = useState(new Date());
  const [showItem, setShowItem] = useState(false);
  const [orderNumber] = useState(12312);
  const [client, setClient] = useState(product.customer);
  const [showCustomer, setShowCustomer] = useState(false);
  const [business, setBusiness] = useState(product.business);
  const [invoiceNumber, setInvoiceNumber] = useState();
  const [invoiceDate] = useState(new Date().toDateString());
  const [sum, setSum] = useState(0);
  const [vat, setVat] = useState(0);
  const [addVat, setAddVat] = useState(false);
  // const [vat, setVat] = useState(false);
  const [inputFields, setInputFields] = useState([
    {
      name: '',
      description: '',
      quantity: 1,
      price: 0,
      amount: 0
    }
  ]);

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

  const setAmount = (am, index) => {
    const newList = [...inputFields];
    newList[index].amount = am;
  };

  const handleChange = (index, evnt) => {
    const { name, value } = evnt.target;
    const list = [...inputFields];
    list[index][name] = value;
    setInputFields(list);
  };

  setTimeout(() => {
    var date = new Date(); // Now
    let payDate = date.setDate(date.getDate() + 14);
    setPaymentDue(payDate);
  }, 500);

  useEffect(() => {
    setClient(product.customer);
    if (product.addItemSuccess) {
      // setInvoiceItems( product.invoiceItem)
    }
    setShowCustomer(false);
    setShowItem(false);
  }, [product]);

  useEffect(() => {
    setBusiness(product.business);
  }, [product.business]);

  const { name, currency, address, id } = {
    name: business.map((a) => a.name),
    currency: business.map((a) => a.currency),
    address: business.map((a) => a.address),
    id: business.map((a) => a._id)
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      // console.log(name)
      const InvNumber =
        new Date().toLocaleString('en-GB').split('/')[1] +
        new Date().toDateString().split(' ')[3] +
        Math.floor(Math.random() * 1000);
      setInvoiceNumber(InvNumber);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const owner = id;
  const handleSave = (e) => {
    e.preventDefault();
    let c_id, customerName;
    if (client === null) {
      return openNotificationWithIcon('error', 'Please provide client details');
    }
    if (client === 'undefined') {
      return (c_id = '61d822f7f4f8682f164007fb');
    }
    if (client !== 'undefined') {
      c_id = client.id;
      customerName = client.name;
    }
    const invoiceData = {
      amountDue: sum,
      clientInfo: c_id,
      customerName,
      invoiceItems: inputFields,
      owner,
      invoiceDate,
      invoiceNumber,
      orderNumber,
      paymentDue,
      status: 'draft'
    };
    createInvoice(invoiceData);
    setLoading(true);
  };

  useState(() => {
    setNewItem(...newItem);
  }, [newItem]);

  useEffect(() => {
    setUser(auth.user);
  }, [auth]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (Invoice.invoiceData && Invoice.createInvoiceSuccess) {
        openNotificationWithIcon('success', 'saved as draft');
        setLoading(false);
        navigate('/dashboard/invoice/new/action');
      }
    }, 10);
    return () => clearTimeout(timer);
  }, [Invoice]);

  const handleCustomer = () => {
    setShowCustomer(!showCustomer);
  };
  const handleNote = (e) => {
    setNote(e.target.value);
  };

  const handleVat = (e) => {
    setVat(e.target.value);
  };

  const handleAddVat = () => {
    setAddVat(!addVat);
  };

  const handleColor = () => {
    toggle(true);
  };

  const inputData = inputFields;

  useEffect(() => {
    const timer = setTimeout(() => {
      const total = inputFields
        .map((item) => item.amount)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      setSum(total);
    }, 100);
    return () => clearTimeout(timer);
  }, [inputFields]);

  return (
    <>
      {showCustomer && <Customers />}
      {showItem && <ItemContainer />}
      <ColorPicker isOpen={isOpen} popover={popover} close={close} />
      <div className="flex flex-col m-auto w-full h-auto drop-shadow-xl rounded-xl px-2 md:w-[90%] xl:w-[75%]">
        <div className="w-[100%] flex flex-row justify-end">
          {/* <PDFViewer width={800} height={500} showToolbar={false}>
            <PdfComp />
          </PDFViewer> */}
        </div>
        <div className="flex flex-col justify-between py-1 md:flex-row py-5">
          <h1 className="mt-0 text-[2rem] text-center font-semibold text-gray-900 md:mt-4 text-[2rem] font-bold lg:mt-4 text-[2rem]">
            New Invoice
          </h1>
          <div className="flex flex-row w-auto justify-between items-center">
            <button
              className="flex justify-center bg-gray-white text-gray-900 mx-0 border-gray-900 py-2 px-4
            rounded-[35px] tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500  md:mx-[2rem]">
              preview
            </button>
            <button
              onClick={handleSave}
              className={`flex justify-center ${
                loading ? `bg-gray-300` : `bg-gray-900`
              } hover:bg-gray-600 text-gray-100 py-2 px-4
            rounded-[35px] tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500`}>
              {loading ? <Spin indicator={antIcon} size="default" /> : 'save'}
            </button>
          </div>
        </div>
        <InvoiceHeader business={business} name={name} address={address} user={user} />
        <BillToSection
          status="draft"
          client={client}
          handleCustomer={handleCustomer}
          inputData={inputData}
          currency={currency}
          invoiceDate={invoiceDate}
          invoiceNumber={invoiceNumber}
          orderNumber={orderNumber}
          date={paymentDue}
        />
        {/* add Item component */}
        <InvoiceRebon handleColor={handleColor} />
        <AddRemoveInputField
          inputFields={inputFields}
          add={addInputField}
          remove={removeInputFields}
          handleChange={handleChange}
          handleAmount={setAmount}
        />
        {/* Total and subtotal section */}
        <InvoiceFooter
          inputs={inputData}
          currency={currency}
          grand={sum}
          handleVat={handleVat}
          vat={vat}
          add={addVat}
          toggle={handleAddVat}
          note={note}
          handleNote={handleNote}
        />
      </div>
    </>
  );
}

export default SingleInvoiceComponent;
