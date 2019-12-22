import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ToastContainer } from 'react-toastify';
import { StoreProvider } from '@/context/store';

ReactDOM.render(
  <StoreProvider>
    <App />
    <ToastContainer />
  </StoreProvider>,
  document.getElementById('root')
);
