import React from 'react';
import { BrowserRouter, Router, Switch, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import MyEvents from './components/MyEvents';
import NewEventForm from './components/NewEventForm';
import Dashboard from './components/Dashboard';
import MyToDo from './components/MyToDo';


function App() {

  return (
      <div className='App'>
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/NewEventForm" component={NewEventForm} />
          <Route path="/MyEvents" component={MyEvents} />
          <Route path="/Navbar" component={Navbar} />
          <Route path="/MyToDo" component={MyToDo} />
        </Switch>
        </BrowserRouter>
      </div>
  );
  
}

export default App;