import React from 'react';
// import { Pets } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
  <nav>
    <div className="links">
      <NavLink 
        exact 
        to="/" 
        activeClassName="active"
      >Pups
      </NavLink>
      <NavLink 
        to="/login" 
        activeClassName="active"
        >Login
      </NavLink>
      <NavLink 
        to="/documentation" 
        activeClassName="active"
        >Documentation
      </NavLink>
    </div>
  </nav>)
}

export default Nav;