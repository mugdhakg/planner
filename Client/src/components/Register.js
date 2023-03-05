import React from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom'; 
import { useState } from 'react';
import Axios from 'axios';

function Register () {

  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");  

  const register = () => {
    Axios.post("http://localhost:3002/register", {
      username: usernameReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <BrowserRouter>
      <div className='registration'>
        <h1>Register</h1>
        <label>Username</label>
          <input 
            type = 'text' 
            onChange={(e) => {
              setUsernameReg(e.target.value);
            }}
          />
          <label>Password</label>
          <input 
            type = 'text'
            onChange={(e) => {
              setPasswordReg(e.target.value);
            }}
          />
        <button onClick={register}>Register</button>
      </div>
    </BrowserRouter>
  )
}

export default Register;