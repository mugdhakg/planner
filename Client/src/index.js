import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Router, Switch, Route, Link } from 'react-router-dom';

import Mugdha from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
    
  <BrowserRouter>
    <div>
    <p id = "one">Planner</p>
        <nav className="navbar">
        <ul className="nav-links">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/MyEvents">
            <li>My Events</li>
          </Link>
          <Link to="/My Reminders">
            <li>My Reminders</li>
          </Link>
          <Link to="/My Journal">
            <li>My Journal</li>
          </Link>
          <Link to="/Logout">
            <li>Logout</li>
          </Link>
        </ul>
      </nav>

    </div>
    <Mugdha />
  </BrowserRouter>
)