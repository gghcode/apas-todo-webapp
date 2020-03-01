import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { ToastContainer } from 'react-toastify';
import { StoreProvider } from '@/context/store';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

render(
  <StoreProvider>
    <App />
    <ToastContainer />
  </StoreProvider>,
  document.getElementById('root')
);
