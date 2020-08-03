import React, { useState, useRef } from 'react';
import useOnClickOutside from '../useOnClickOutside';

const Login = props => {
  const ref = useRef();
  useOnClickOutside(ref, () => {
    props.setLoginActive(false);
    props.setPupsActive(true);
  });

  return (
    <div ref={ref} className="login-container">
      <form className="login">
        <input type="email" name="field2" placeholder="email" />
        <input type="password" name="password" placeholder="password" />
        <button type="button" value="Login">Login</button>
      </form>
    </div>
  )
}

export default Login;