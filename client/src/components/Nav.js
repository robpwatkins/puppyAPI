import React from 'react';
import { checkAuth } from '../checkAuth';

const Nav = props => {

  const handlePupsClick = () => {
    props.setPupsActive(true);
    props.setLoginActive(false);
  }

  const handleLoginClick = () => {
    props.setLoginActive(true);
    props.setPupsActive(false);
    document.body.style.overflow = 'hidden';
  }

console.log(props);
return (
  <nav>
    <div className="links">
      <a 
        onClick={handlePupsClick}
        className={props.pupsActive ? 'active' : ''}
        >Pups
      </a>
      {!checkAuth() ? (
        <a 
          onClick={handleLoginClick}
          className={props.loginActive ? 'active' : ''}
          >Login
        </a> 
      ):(
        <a
          onClick={() => {
            document.cookie = 'loggedIn='
            window.location.replace('/')
          }}
        >Logout</a>
        )}
      <a>Documentation</a>
    </div>
  </nav>)
}

export default Nav;