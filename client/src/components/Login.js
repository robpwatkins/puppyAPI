import React from 'react';

const Login = () => {
  return (
    <div className="login-container">
      <form className="login">
        <input type="email" name="field2" placeholder="email" />
        <input type="password" name="password" placeholder="password" />
        <button type="button" value="Login">Login</button>
      </form>
    </div>
  )
}

export default Login;