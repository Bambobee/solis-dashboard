import React, { createContext, useContext, useMemo, useReducer, useEffect } from 'react';

import axios from 'api/axiosInit';
import { ProductReducer } from 'reducers';

const initialState = {
  error: null,
  products: null,
  message: null,
  addProductSuccess: false,
  fetchProductSuccess: false,
  deleteProductSuccess: false,
  updateProductSuccess: false
};

const productContext = createContext();

const ProductProvider = (props) => {
  const [productList, dispatch] = useReducer(ProductReducer, initialState);

  useEffect(() => {
    const getProducts = async () => {
      const user = localStorage.getItem('user');
      const token = localStorage.getItem('token');
      if (token && user !== 'undefined') {
        const { data } = await axios.get(`/products/all`);
        dispatch({ type: 'FETCH_PRODUCT_SUCCESS', data });
      }
    };
    getProducts();
  }, []);

  const value = useMemo(() => [productList, dispatch], [productList]);

  return <productContext.Provider value={value} {...props} />;
};

const useProduct = () => {
  const context = useContext(productContext);
  if (!context) {
    throw new Error('element must be within context');
  }
  const [productList, dispatch] = context;

  const addNewProduct = async (payload) => {
    const { data } = await axios.post('/product/add', payload);
    dispatch({ type: 'ADD_PRODUCT', data });
  };

  const fetchProducts = async () => {
    const { data } = await axios.get(`/products/all`);
    dispatch({ type: 'FETCH_PRODUCT_SUCCESS', data });
  };

  const updateProduct = async (payload) => {
    const { data } = await axios.put(`/product/edit/${payload._id}`, payload);
    dispatch({ type: 'UPDATE_PRODUCT_SUCCESS', data });
  };

  return {
    dispatch,
    productList,
    addNewProduct,
    fetchProducts,
    updateProduct
  };
};

export { ProductProvider, useProduct };
