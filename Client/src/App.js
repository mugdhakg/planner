import React from 'react';
import { BrowserRouter, Router, Switch, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import NewEventForm from './components/NewEventForm';
import Dashboard from './components/Dashboard';


function App() {

  return (
      <div className='App'>
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/NewEventForm" component={NewEventForm} />
        </Switch>
        </BrowserRouter>
      </div>
  );
  
}

export default App;