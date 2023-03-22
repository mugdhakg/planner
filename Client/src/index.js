import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Router, Switch, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';

import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <App />
  </BrowserRouter>
)