import React, { useState, useRef } from 'react';
import useOnClickOutside from '../useOnClickOutside';
import { Close } from '@material-ui/icons';

const Login = props => {
  const ref = useRef();

  useOnClickOutside(ref, () => {
    props.setLoginActive(false);
    props.setPupsActive(true);
    document.body.style.overflow = 'scroll';
  });

  const handleSubmit = event => {
    event.preventDefault();
    document.cookie = 'loggedIn=true';
    window.location.replace('/');
  }

  return (
    <div ref={ref} className="login-container">
      <form className="login" onSubmit={handleSubmit}>
        <Close className="login-closer" fontSize="small" />
        <input 
          required
          type="email" 
          name="email"
          placeholder="email" 
        />
        <input 
          required
          type="password" 
          name="password" 
          placeholder="password" 
        />
        <button type="submit" value="Login">Login</button>
        <h5>Don't have an account yet? <a href="">Join the fun!</a></h5>
      </form>
    </div>
  )
}

export default Login;