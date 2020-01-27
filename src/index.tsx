import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ToastContainer } from 'react-toastify';
import { StoreProvider } from '@/context/store';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UsecaseProvider } from './context/domain';

ReactDOM.render(
  <StoreProvider>
    <UsecaseProvider>
      <App />
      <ToastContainer />
    </UsecaseProvider>
  </StoreProvider>,
  document.getElementById('root')
);
