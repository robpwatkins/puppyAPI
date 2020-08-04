import React, { useState, useRef } from 'react';
import useOnClickOutside from '../useOnClickOutside';

const Login = props => {
  const ref = useRef();

  useOnClickOutside(ref, () => {
    props.setLoginActive(false);
    props.setPupsActive(true);
  });

  const handleSubmit = event => {
    event.preventDefault();
    document.cookie = 'loggedIn=true';
    window.location.replace('/');
  }

  return (
    <div ref={ref} className="login-container">
      <form className="login" onSubmit={handleSubmit}>
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
      </form>
    </div>
  )
}

export default Login;