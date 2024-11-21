import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import './css/bootsnav.css';
import './css/font-icons.min.css';
import './css/theme-vendors.min.css';
import './css/style.css';
import './css/responsive.css';
import './css/custom.css';
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <App />
    </HashRouter>
  </React.StrictMode>
);