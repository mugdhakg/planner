import { Link, BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'; 
import { useState } from 'react';
import Axios from 'axios';
import MyEvents from './MyEvents';
import { useHistory } from 'react-router-dom';

function Login () {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  const history = useHistory();
  
  const login = () => { 
    Axios.post("http://localhost:5000/login", {
      username: username,
      password: password,
    }).then((response) => {
      if(response.data.message) {
        localStorage.setItem('loggedIn', false);
        setLoginStatus(response.data.message)
      }
      else {
        setLoginStatus(response.data[0].username)
        localStorage.setItem('loggedIn', true);
        history.push('./MyEvents');
      }
    });
  };
  
  return (
    <BrowserRouter>
      <span className='dot'>
      <div className='login'>
        <h1>Planner</h1>
        <input type = 'text' placeholder = 'Username...' 
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        />
        <input type = 'password' placeholder = 'Password...' 
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        />
        <button onClick={login}>Login</button>
      </div>  
      <h1>{loginStatus}</h1>
      </span>
    </BrowserRouter>
  )
}

export default Login;
export const authenticated = localStorage.getItem('loggedIn');