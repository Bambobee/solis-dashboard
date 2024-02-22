import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from '../App';
import RequireAuth from './requireAuth';
import history from 'common/auth/history';
import Login from '../components/loginScreen';
import Products from 'pages/products/Products';
import Settings from 'pages/settings/Settings';
import AuthVerify from 'common/auth/AuthVerify';
import Home from '../pages/dashboard/home/Home';
import Customers from 'pages/customers/customers';
import Onboarding from '../components/Onboarding';
import Invoice from '../pages/sales/Invoice/Invoice';
import Dashboard from '../pages/dashboard/Dashboard';
import SignupScreen from '../components/signupScreen';
import ForgotPassword from 'components/forgotPassword';
import EditInvoice from 'pages/sales/Invoice/editInvoice';
import CreateInvoice from '../pages/sales/Invoice/newInvoice';
import PageNotFound from 'components/PageNotFound';
import InvoiceAction from 'pages/sales/Invoice/InvoiceAction';

function AppRoutes() {
  return (
    <BrowserRouter history={history}>
      <Routes>
        {/* <Route path="/" element={<App />} /> */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignupScreen />} />
        <Route path="/account/recovery" element={<ForgotPassword />} />

        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }>
          <Route
            path="home"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route
            path="invoices"
            element={
              <RequireAuth>
                <Invoice />
              </RequireAuth>
            }
          />
          <Route path="invoice/new" element={<CreateInvoice />} />
          <Route path="invoice/:id" element={<EditInvoice />} />
          <Route path="invoice/new/action" element={<InvoiceAction />} />
          <Route path="/dashboard/customers" element={<Customers />} />
          <Route path="/dashboard/products" element={<Products />} />
        </Route>
        <Route
          path="/settings/:id/users"
          element={
            <RequireAuth>
              {' '}
              <Settings />
            </RequireAuth>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <AuthVerify />
    </BrowserRouter>
  );
}

export default AppRoutes;
