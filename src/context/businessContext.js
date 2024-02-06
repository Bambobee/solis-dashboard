/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useMemo, useReducer, useEffect } from 'react';

import { AppReducer } from 'reducers';
import axios from 'api/axiosInit';

const initialState = {
  error: null,
  customers: null,
  customer: null,
  selectedNew: false,
  business: null,
  businessFetchSuccess: false,
  customerFetch: false,
  businessUpdate: false,
  message: null,
  addTeamMemberSuccess: false,
  fetchCompanySuccess: false,
  addItemSuccess: false,
  singleBusiness: null,
  companies: null,
  fetchSingleBusinessSucess: false
};
const appContext = createContext();

function BusinessProvider(props) {
  const [product, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    const fetchCompany = async () => {
      const user = localStorage.getItem('user');
      const token = localStorage.getItem('token');
      if (token && user !== 'undefined') {
        const { data } = await axios.get(`/businesses/all`);
        dispatch({ type: 'FETCH_SUCCESS', data });
      } else {
        localStorage.clear();
      }
    };
    fetchCompany();
  }, []);

  const value = useMemo(() => [product, dispatch], [product]);
  return <appContext.Provider value={value} {...props} />;
}

function useApp() {
  const context = useContext(appContext);

  if (!context) {
    throw new Error('useauth must be within a provider');
  }

  const [product, dispatch] = context;

  const fetchCompany = async () => {
    const { data } = await axios.get(`/businesses/all`);
    dispatch({ type: 'FETCH_COMPANY', data });
  };

  const addCustomer = async (cust_data) => {
    dispatch({ type: 'ADD_CUSTOMER', cust_data });
  };

  const fetchCustomer = async () => {
    const { data } = await axios.get('/customer/all');
    dispatch({ type: 'FETCH_CUSTOMERS', data });
  };

  const fetchSingleBusiness = async ({ id }) => {
    const { data } = await axios.get(`/business/${id}`);

    dispatch({ type: 'SINGLE_BUSINESS', data });
  };

  const addNewMemeber = async (payload) => {
    const { data } = await axios.put('/business/members/new', payload);
    dispatch({ type: 'ADD_TEAM_MEMBER', data });
  };

  const fetchCompanies = async ({ id }) => {
    const { data } = await axios.get(`/companies/all/${id}`);
    dispatch({ type: 'FETCH_COMPANIES', data });
  };
  return {
    product,
    dispatch,
    addCustomer,
    fetchCompany,
    fetchCustomer,
    addNewMemeber,
    fetchCompanies,
    fetchSingleBusiness
  };
}

export { BusinessProvider, useApp };
