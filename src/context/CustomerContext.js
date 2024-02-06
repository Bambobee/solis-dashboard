import React, { createContext, useContext, useMemo, useReducer, useEffect } from 'react';

import axios from 'api/axiosInit';
import { CustomerReducer } from 'reducers';

const initialState = {
  error: null,
  message: null,
  customers: null,
  fetchUpdated: false,
  addCustomerSuccess: false,
  fetchCustomerSuccess: false,
  deleteCustomerSuccess: false,
  updateCustomerSuccess: false
};

const customerContext = createContext();

const CustomerProvider = (props) => {
  const [customer, dispatch] = useReducer(CustomerReducer, initialState);

  useEffect(() => {
    const fetchCustomers = async () => {
      const user = localStorage.getItem('user');
      const token = localStorage.getItem('token');
      if (token && user !== 'undefined') {
        const { data } = await axios.get(`/customer/all`);
        dispatch({ type: 'FETCH_CUSTOMERS_SUCCESS', data });
      }
    };
    fetchCustomers();
  }, []);

  const value = useMemo(() => [customer, dispatch], [customer]);

  return <customerContext.Provider value={value} {...props} />;
};

const useCustomer = () => {
  const context = useContext(customerContext);

  if (!context) {
    throw new Error('useauth must be within a provider');
  }

  const [customer, dispatch] = context;

  const addNewCustomer = async (payload) => {
    const { data } = await axios.post('/customer/create', payload);

    dispatch({ type: 'ADD_CUSTOMER', data });
  };

  const fetchCustomers = async () => {
    const { data } = await axios.get(`/customer/all`);
    dispatch({ type: 'FETCH_CUSTOMERS_SUCCESS', data });
  };

  const updateCustomer = async (payload) => {
    const { data } = await axios.put(`/customer/edit/${payload._id}`, payload);
    dispatch({ type: 'UPDATE_CUSTOMER', data });
  };

  return {
    customer,
    dispatch,
    addNewCustomer,
    fetchCustomers,
    updateCustomer
  };
};

export { CustomerProvider, useCustomer };
