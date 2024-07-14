import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import Layout from './components/Layout';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout>
      <App/>
    </Layout>
    <ToastContainer />
  </React.StrictMode>
);