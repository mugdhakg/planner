import React from 'react';
import { BrowserRouter, Router, Switch, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import MyEvents from './components/MyEvents';
import NewEventForm from './components/NewEventForm';


function Mugdha() {

  return (
      <div className='Mugdha'>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/NewEventForm" component={NewEventForm} />
          <Route path="/MyEvents" component={MyEvents} />
          <Route path="/Navbar" component={Navbar} />
        </Switch>
      </div>
  );
  
}

export default Mugdha;