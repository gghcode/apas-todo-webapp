import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ToastContainer } from 'react-toastify';
import { StoreProvider } from '@/context/store';
import { UsecaseProvider } from './context/domain';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <UsecaseProvider>
    <StoreProvider>
      <App />
      <ToastContainer />
    </StoreProvider>
  </UsecaseProvider>,
  document.getElementById('root')
);
