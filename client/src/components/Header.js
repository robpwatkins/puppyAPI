import React from 'react';
import Badge from './Badge';

const Header = () => {
  return (
    <div className="header-container">
      <Badge />
      <h1 className="tagline">Let's play fetch.</h1>
    </div>
  )
}

export default Header;