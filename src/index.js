import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import 'flowbite';
import AppRoutes from './routes/allRoutes';
import reportWebVitals from './reportWebVitals';
import {
  AuthProvider,
  BusinessProvider,
  CustomerProvider,
  ProductProvider,
  InvoiceProvider
} from 'context';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <BusinessProvider>
        <InvoiceProvider>
          <CustomerProvider>
            <ProductProvider>
              <AppRoutes />
            </ProductProvider>
          </CustomerProvider>
        </InvoiceProvider>
      </BusinessProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
