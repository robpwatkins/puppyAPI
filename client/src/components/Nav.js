import React from 'react';
// import { Pets } from '@material-ui/icons';
// import { NavLink } from 'react-router-dom';
const Nav = props => {
console.log(props);
return (
  <nav>
    <div className="links">
      <a 
        // exact 
        // to="/" 
        // activeClassName="active"
        onClick={() => {
          props.setLoginActive(false);
          props.setPupsActive(true);
        }}
        className={props.pupsActive && 'active'}
      >Pups
      </a>
      <a 
        // to="/login" 
        // activeClassName="active"
        onClick={() => {
          props.setPupsActive(false);
          props.setLoginActive(true);
        }}
        className={props.loginActive && 'active'}
        >Login
      </a>
      <a 
        // to="/documentation" 
        // activeClassName="active"
        >Documentation
      </a>
    </div>
  </nav>)
}

export default Nav;