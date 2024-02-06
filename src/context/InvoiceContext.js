import React, { createContext, useContext, useEffect, useMemo, useReducer } from 'react';

import { InvoiceReducer } from 'reducers';
import axios from 'api/axiosInit';

const initialState = {
  error: null,
  invioce: null,
  message: null,
  invoices: null,
  invoiceData: null,
  createInvoiceSuccess: false,
  updateInvoiceSuccess: false,
  deleteInvoiceSuccess: false,
  fetchInvoicesSuccess: false,
  fetchSIngleInvoiceSuccess: false
};

const invoiceContext = createContext();

function InvoiceProvider(props) {
  const [Invoice, dispatch] = useReducer(InvoiceReducer, initialState);

  useEffect(() => {
    const user = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    async function fetchOnInitialLoad() {
      if (token && user !== 'undefined') {
        const { data } = await axios.get('/invoices/all');
        dispatch({ type: 'ALL_INVOICES', data });
      }
    }
    fetchOnInitialLoad();
  }, []);

  const value = useMemo(() => [Invoice, dispatch], [Invoice]);

  return <invoiceContext.Provider value={value} {...props} />;
}

function useInvoice() {
  const context = useContext(invoiceContext);

  if (!context) {
    throw new Error('useauth must be within a provider');
  }

  const [Invoice, dispatch] = context;

  const fetchAllInvoices = async () => {
    const { data } = await axios.get('/invoices/all');
    dispatch({ type: 'ALL_INVOICES', data });
  };

  const createInvoice = async (invoiceData) => {
    const { data } = await axios.post('/invoice/create', invoiceData);
    dispatch({ type: 'CREATE_INVOICE', data });
  };

  const updateInvoice = async (invoiceData) => {
    const { data } = await axios.put(`/update/invoice/${invoiceData.id}`, invoiceData);
    dispatch({ type: 'UPDATE_INVOICE', data });
  };

  const deleteInvoice = async (payload) => {
    const { data } = await axios.delete(`/delete/invoice/${payload._id}`);
    dispatch({ type: 'DELETE_INVOICE', data });
  };

  const fetchSingleInvoice = async ({ id }) => {
    const { data } = await axios.get(`/invoice/${id}`);
    dispatch({ type: 'SINGLE_INVOICE', data });
  };

  return {
    Invoice,
    dispatch,
    deleteInvoice,
    updateInvoice,
    createInvoice,
    fetchAllInvoices,
    fetchSingleInvoice
  };
}

export { InvoiceProvider, useInvoice };
